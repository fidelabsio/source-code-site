import { v2 as cloudinary } from "cloudinary";

// Cloudinary serves a PDF's raw delivery URL as-is, which Chrome (and most
// browsers) render inline in the built-in PDF viewer instead of downloading
// — the customer clicks the email's "Download" button and just gets a
// preview tab, not a saved file. Inserting Cloudinary's fl_attachment flag
// into the URL forces a real Content-Disposition: attachment response, so
// the browser downloads it instead. Harmless for the zip files too — there's
// no browser-native zip viewer, so they'd download either way.
//
// fl_attachment alone downloads as a generic "file.<ext>" — passing the
// public_id's base filename (no extension; Cloudinary appends the real one)
// makes the saved file's name match what it actually is.
function withForcedDownload(secureUrl: string, publicId: string): string {
  const baseName = publicId.replace(/\.[^./]+$/, "");
  return secureUrl.replace("/upload/", `/upload/fl_attachment:${encodeURIComponent(baseName)}/`);
}

// Uploads a per-order file (e.g. the license agreement PDF) so it can be
// linked from the delivery email instead of attached. publicId should embed
// something unguessable and unique per order (the license key) — this isn't
// a signed/expiring URL, just an unenumerable one.
//
// overwrite defaults to false (per-order files should never collide on
// public_id). Pass true only for a static, one-time asset (see
// scripts/uploadStaticPackages.ts) where re-running the upload after the
// source file changes should actually replace it — Cloudinary's
// overwrite:false silently keeps serving the old bytes under an existing
// public_id instead of erroring, which would otherwise hide a stale upload.
export async function uploadOrderFile(
  buffer: Buffer,
  folder: string,
  publicId: string,
  overwrite = false
): Promise<string> {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, public_id: publicId, resource_type: "raw", overwrite },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error("Cloudinary upload returned no result"));
          return;
        }
        resolve(withForcedDownload(result.secure_url, publicId));
      }
    );
    stream.end(buffer);
  });
}
