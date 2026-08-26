/** @type {import('next').NextConfig} */
const nextConfig = {
  // Without this, Next's webpack bundling for anything reachable from app/
  // substitutes its own internal React copy into @react-pdf/renderer's
  // module graph too. @react-pdf/renderer builds its PDF tree with
  // React.createElement calls from our code, then walks that tree with its
  // own custom (non-DOM) reconciler — if those two don't resolve to the
  // exact same "react" module instance, elements we create aren't
  // recognized as valid by react-pdf's renderer and it throws React error
  // #31 ("Objects are not valid as a React child"). Marking the package
  // external makes Next.js require() it via plain Node module resolution
  // instead, so it shares the one "react" instance everything else uses.
  //
  // pdfkit needs the same treatment for a different reason: it loads its
  // built-in font metrics (Helvetica.afm, etc.) from plain data files
  // sitting next to its own JS via path.join(__dirname, "data", ...).
  // Webpack bundles pdfkit's JS into .next/server/vendor-chunks/ but doesn't
  // know to copy those non-JS data files alongside it, so at runtime it
  // looks for them at a path that was never created (ENOENT). Excluding it
  // from webpack bundling makes Next.js require() it straight from
  // node_modules/pdfkit instead, where those data files actually live.
  serverExternalPackages: ["@react-pdf/renderer", "pdfkit"],
};

module.exports = nextConfig;
