import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

/* ============================================================================
 * FIDE Labs — Commercial License Delivery email
 *
 * Ported from email-templates/fide-source-code-delivery.html (itself ported
 * from Figma "email Template", node 878:892) into an email-safe React Email
 * component. The HTML version used CSS custom properties (var(--x)), flexbox/
 * grid, and base64 data-URI images — none of which render in real inboxes
 * (Gmail drops var()-based rules entirely and never renders data: URI images).
 *
 * Rules this file follows instead:
 *   - No CSS custom properties. Every colour/spacing value is a literal.
 *   - No flexbox, no grid. All layout is <table>/<tr>/<td>, which every email
 *     client (including Outlook's Word engine) understands.
 *   - No data URIs. Every image is a real file under public/email-assets/,
 *     referenced by an absolute HTTPS URL.
 * ========================================================================== */

const INK = "#0b1c30";
const BODY_TEXT = "#434653";
const WHITE = "#ffffff";
const PAGE = "#f9faff";
const GREEN = "#006c4b";
const BLUE_900 = "#003385";
const BLUE_100 = "#d7e5ff";
const BLUE_200 = "#b2c5ff";
const SURFACE_DOC = "#f2f6fe";
const SURFACE_HELP = "#f5fbf8";
const BORDER = "rgba(195, 198, 213, .3)";
const BORDER_SOFT = "rgba(195, 198, 213, .2)";
const BORDER_ROW = "#d1d5db";
const BORDER_HELP = "rgba(0, 108, 75, .2)";
const OVERLAY_BLUE = "rgba(0, 72, 181, .1)";
const OVERLAY_GREEN = "rgba(0, 108, 75, .1)";
const OVERLAY_SLATE = "rgba(53, 79, 128, .1)";

/* Outlook desktop (Word engine) ignores linear-gradient() entirely, so the
 * bgcolor attribute + solid background-color is the fallback it actually
 * renders; other clients get the gradient via background-image. */
const NAVY_FLAT = "#12306a";
const NAVY_GRADIENT = "linear-gradient(180deg, #284688 0%, #001c58 74.27%)";

const FONT_STACK = "'Inter', Helvetica, Arial, sans-serif";
const DISPLAY_STACK = "'Manrope', Helvetica, Arial, sans-serif";

const DEFAULT_ASSET_BASE_URL = "https://fidecode.com/email-assets";

export interface SourceCodeDeliveryEmailProps {
  customerName: string;
  licenseType: string;
  licenseId: string;
  purchaseDate: string;
  licenseActivatedDate: string;
  supportValidUntil: string;
  packageDownloadUrl: string;
  agreementDownloadUrl: string;
  documentationDownloadUrl: string;
  installationVideoUrl: string;
  productVersion: string;
  packageSize: string;
  /** Absolute base URL for public/email-assets, no trailing slash. */
  assetBaseUrl?: string;
}

/* Legacy Outlook needs a bgcolor attribute on <td> in addition to CSS
 * background-color — some builds ignore the latter. TS doesn't type it on a
 * <td>, hence this narrow escape hatch. */
const bg = (color: string) => ({ bgcolor: color }) as unknown as React.TdHTMLAttributes<HTMLTableCellElement>;

const PACKAGE_CONTENTS = [
  "Complete Shopify Source Code",
  "Commercial License Agreement",
  "Technical Documentation",
  "Buyer Onboarding Guide",
  "Installation Guide",
  "Configuration Guides",
  "API & Webhook Documentation",
  "Tutorial Videos",
  "README",
  "Supporting Resources",
];

const SUPPORT_TOPICS = ["Installation guidance", "Product configuration", "Licensing questions", "Technical issues"];

export const SourceCodeDeliveryEmail = ({
  customerName,
  licenseType,
  licenseId,
  purchaseDate,
  licenseActivatedDate,
  supportValidUntil,
  packageDownloadUrl,
  agreementDownloadUrl,
  documentationDownloadUrl,
  installationVideoUrl,
  productVersion,
  packageSize,
  assetBaseUrl = DEFAULT_ASSET_BASE_URL,
}: SourceCodeDeliveryEmailProps) => {
  const asset = (file: string) => `${assetBaseUrl}/${file}`;

  const detailRows: Array<{ label: string; value: string; accent?: boolean }> = [
    { label: "Licensed Customer", value: customerName },
    { label: "Product", value: "FIDE Shopify Source Code Product" },
    { label: "License Type", value: licenseType, accent: true },
    { label: "License ID", value: licenseId, accent: true },
    { label: "Product Version", value: productVersion },
    { label: "Purchase Date", value: purchaseDate },
    { label: "License Activated", value: licenseActivatedDate },
    { label: "Update & Support Valid Until", value: supportValidUntil, accent: true },
    { label: "Download Package Size", value: packageSize },
  ];

  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf",
            format: "truetype",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Manrope"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: "https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_F.ttf",
            format: "truetype",
          }}
          fontWeight={700}
          fontStyle="normal"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body, table, td, a { -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
              table, td { mso-table-lspace:0pt; mso-table-rspace:0pt; }
              img { -ms-interpolation-mode:bicubic; border:0; outline:none; text-decoration:none; }
              p { margin:0; }
            `,
          }}
        />
      </Head>

      <Preview>Your FIDE Shopify Source Code Package is ready — license {licenseId} is active.</Preview>

      <Body style={{ margin: 0, padding: 0, backgroundColor: PAGE, fontFamily: FONT_STACK, color: INK }}>
        <Container style={{ width: "600px", maxWidth: "600px", margin: "0 auto", backgroundColor: PAGE }}>
          {/* ================= HEADER ================= */}
          <Section style={{ padding: "24px 24px 0" }}>
            <Link href="https://fidecode.com">
              <Img src={asset("logo-header.png")} alt="Fide Labs" width="150" height="40" style={{ display: "block", border: 0 }} />
            </Link>
          </Section>

          {/* ================= HERO ================= */}
          <Section style={{ padding: "24px 24px 0" }}>
            <table role="presentation" cellPadding={0} cellSpacing={0} border={0}>
              <tbody>
                <tr>
                  <td
                    {...bg(BLUE_100)}
                    style={{
                      backgroundColor: BLUE_100,
                      borderRadius: "9999px",
                      padding: "8px 18px",
                      fontFamily: FONT_STACK,
                      fontSize: "13px",
                      fontWeight: 600,
                      lineHeight: "16px",
                      letterSpacing: "0.02em",
                      color: BLUE_900,
                      whiteSpace: "nowrap",
                    }}
                  >
                    COMMERCIAL LICENSE DELIVERY&nbsp;
                    <Img
                      src={asset("icon-eyebrow-arrow.png")}
                      alt=""
                      width="10"
                      height="10"
                      style={{ display: "inline-block", verticalAlign: "middle", border: 0 }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <Heading
              as="h1"
              style={{
                margin: "20px 0 0",
                fontFamily: DISPLAY_STACK,
                fontSize: "28px",
                fontWeight: 800,
                lineHeight: "34px",
                letterSpacing: "-0.4px",
                color: INK,
              }}
            >
              Your FIDE Shopify Source Code Package <span style={{ color: GREEN }}>is Ready!</span>
            </Heading>

            <Text style={{ margin: "24px 0 0", fontFamily: FONT_STACK, fontSize: "18px", fontWeight: 600, lineHeight: "24px", color: INK }}>
              Hello {customerName},
            </Text>

            {[
              "Thank you for choosing FIDE Labs.",
              "Your payment has been successfully verified, and your Commercial License has been activated. Your complete FIDE Shopify Source Code Product is now being prepared for delivery.",
              "This package contains everything you need to deploy, customize, and launch your own production-ready Shopify application, including the complete source code, documentation, licensing materials, and tutorial resources.",
              "Please review your purchase details below — our support team will follow up with everything you need to access your package.",
            ].map((copy) => (
              <Text
                key={copy.slice(0, 24)}
                style={{ margin: "12px 0 0", fontFamily: FONT_STACK, fontSize: "16px", fontWeight: 400, lineHeight: "24px", color: BODY_TEXT }}
              >
                {copy}
              </Text>
            ))}
          </Section>

          {/* ================= PURCHASE DETAILS ================= */}
          <Section style={{ padding: "32px 24px 0" }}>
            <table
              role="presentation"
              width="100%"
              cellPadding={0}
              cellSpacing={0}
              border={0}
              style={{ width: "100%", backgroundColor: WHITE, border: `1px solid ${BORDER}`, borderRadius: "12px" }}
            >
              <tbody>
                <tr>
                  <td style={{ padding: "24px" }}>
                    <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td style={{ paddingBottom: "12px", borderBottom: `1px solid ${BORDER}` }}>
                            <Img
                              src={asset("icon-receipt.png")}
                              alt=""
                              width="18"
                              height="20"
                              style={{ display: "inline-block", verticalAlign: "middle", border: 0, marginRight: "8px" }}
                            />
                            <span style={{ fontFamily: DISPLAY_STACK, fontSize: "20px", fontWeight: 700, lineHeight: "26px", color: INK, verticalAlign: "middle" }}>
                              Purchase Details
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Two side-by-side columns at the Figma frame's 1152px width wrap
                        every value onto multiple lines at a 600px email width, so the
                        nine label/value pairs run as one column here instead. */}
                    <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%" }}>
                      <tbody>
                        {detailRows.map((row, index) => (
                          <tr key={row.label}>
                            <td
                              width="220"
                              style={{
                                width: "220px",
                                padding: "10px 8px 10px 0",
                                borderBottom: index === detailRows.length - 1 ? "none" : `1px solid ${BORDER_SOFT}`,
                                fontFamily: FONT_STACK,
                                fontSize: "14px",
                                fontWeight: 400,
                                lineHeight: "20px",
                                color: BODY_TEXT,
                                verticalAlign: "top",
                              }}
                            >
                              {row.label}
                            </td>
                            <td
                              style={{
                                padding: "10px 0",
                                borderBottom: index === detailRows.length - 1 ? "none" : `1px solid ${BORDER_SOFT}`,
                                fontFamily: FONT_STACK,
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "20px",
                                color: row.accent ? GREEN : INK,
                                verticalAlign: "top",
                              }}
                            >
                              {row.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* ================= DOWNLOAD CARD ================= */}
          <Section style={{ padding: "24px 24px 0" }}>
            <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td
                    {...bg(NAVY_FLAT)}
                    style={{ backgroundColor: NAVY_FLAT, backgroundImage: NAVY_GRADIENT, borderRadius: "9px", padding: "28px 24px" }}
                  >
                    <Heading as="h2" style={{ margin: 0, fontFamily: DISPLAY_STACK, fontSize: "20px", fontWeight: 700, lineHeight: "26px", color: WHITE }}>
                      Your Product Package Is Ready
                    </Heading>

                    <Text style={{ margin: "12px 0 0", fontFamily: FONT_STACK, fontSize: "14px", fontWeight: 400, lineHeight: "20px", color: BLUE_200 }}>
                      Click below to download your source code package and get started.
                    </Text>

                    <table role="presentation" cellPadding={0} cellSpacing={0} border={0} align="center" style={{ margin: "18px auto 0" }}>
                      <tbody>
                        <tr>
                          <td style={{ borderRadius: "8px", backgroundColor: WHITE }}>
                            <Link
                              href={packageDownloadUrl}
                              style={{
                                display: "inline-block",
                                padding: "12px 28px",
                                fontFamily: FONT_STACK,
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "18px",
                                color: NAVY_FLAT,
                                textDecoration: "none",
                              }}
                            >
                              Download Source Code Package
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <Text style={{ margin: "20px 0 10px", fontFamily: FONT_STACK, fontSize: "13px", fontWeight: 600, lineHeight: "18px", color: WHITE }}>
                      The package includes:
                    </Text>

                    <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%" }}>
                      <tbody>
                        {[0, 2, 4, 6, 8].map((start) => (
                          <tr key={start}>
                            {[start, start + 1].map((i) => (
                              <td
                                key={i}
                                width="50%"
                                style={{
                                  width: "50%",
                                  padding: "0 0 8px",
                                  fontFamily: FONT_STACK,
                                  fontSize: "13px",
                                  fontWeight: 500,
                                  lineHeight: "18px",
                                  color: WHITE,
                                  verticalAlign: "top",
                                }}
                              >
                                <Img
                                  src={asset("icon-check-mint.png")}
                                  alt=""
                                  width="13"
                                  height="13"
                                  style={{ display: "inline-block", verticalAlign: "middle", border: 0, marginRight: "7px" }}
                                />
                                <span style={{ verticalAlign: "middle" }}>{PACKAGE_CONTENTS[i]}</span>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <Text style={{ margin: "18px 0 0", fontFamily: FONT_STACK, fontSize: "12px", fontWeight: 400, lineHeight: "17px", color: BLUE_200 }}>
                      <span style={{ fontWeight: 600 }}>Note:</span> Having trouble with the download link above? Contact
                      support@fidelabs.io. Your signed Commercial License Agreement is available to download below.
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* ================= INCLUDED RESOURCES ================= */}
          <Section style={{ padding: "24px 24px 0" }}>
            <table
              role="presentation"
              width="100%"
              cellPadding={0}
              cellSpacing={0}
              border={0}
              style={{ width: "100%", backgroundColor: SURFACE_DOC, border: `1px solid ${BORDER}`, borderRadius: "12px" }}
            >
              <tbody>
                <tr>
                  <td style={{ padding: "24px" }}>
                    <Text style={{ margin: "0 0 18px" }}>
                      <Img
                        src={asset("icon-doc-blue.png")}
                        alt=""
                        width="16"
                        height="20"
                        style={{ display: "inline-block", verticalAlign: "middle", border: 0, marginRight: "8px" }}
                      />
                      <span style={{ fontFamily: DISPLAY_STACK, fontSize: "20px", fontWeight: 700, lineHeight: "26px", color: BLUE_900, verticalAlign: "middle" }}>
                        Included Resources
                      </span>
                    </Text>

                    {[
                      {
                        icon: "icon-doc-blue.png",
                        iconWidth: 16,
                        iconHeight: 20,
                        tint: OVERLAY_BLUE,
                        name: "Technical Documents",
                        action: "Download",
                        href: documentationDownloadUrl,
                      },
                      {
                        icon: "icon-signature-green.png",
                        iconWidth: 18,
                        iconHeight: 19,
                        tint: OVERLAY_GREEN,
                        name: "License Agreement",
                        action: "Download",
                        href: agreementDownloadUrl,
                      },
                      {
                        icon: "icon-play-circle-slate.png",
                        iconWidth: 20,
                        iconHeight: 20,
                        tint: OVERLAY_SLATE,
                        name: "Watch Installation Video",
                        action: "Watch Video",
                        href: installationVideoUrl,
                      },
                    ].map((item, index) => (
                      <table
                        key={item.name}
                        role="presentation"
                        width="100%"
                        cellPadding={0}
                        cellSpacing={0}
                        border={0}
                        style={{ width: "100%", borderTop: `1px solid ${BORDER_ROW}`, borderBottom: `1px solid ${BORDER_ROW}`, marginTop: index === 0 ? 0 : "18px" }}
                      >
                        <tbody>
                          <tr>
                            <td width="40" style={{ width: "40px", padding: "10px 0", verticalAlign: "middle" }}>
                              <table role="presentation" cellPadding={0} cellSpacing={0} border={0}>
                                <tbody>
                                  <tr>
                                    <td
                                      {...bg(item.tint)}
                                      align="center"
                                      style={{ width: "36px", height: "36px", backgroundColor: item.tint, borderRadius: "4px", textAlign: "center", verticalAlign: "middle" }}
                                    >
                                      <Img
                                        src={asset(item.icon)}
                                        alt=""
                                        width={String(item.iconWidth)}
                                        height={String(item.iconHeight)}
                                        style={{ display: "inline-block", border: 0, verticalAlign: "middle" }}
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>

                            <td style={{ padding: "10px 12px", fontFamily: FONT_STACK, fontSize: "15px", fontWeight: 600, lineHeight: "20px", color: INK, verticalAlign: "middle" }}>
                              {item.name}
                            </td>

                            <td align="right" style={{ padding: "10px 0", textAlign: "right", verticalAlign: "middle", whiteSpace: "nowrap" }}>
                              {item.href ? (
                                <table role="presentation" cellPadding={0} cellSpacing={0} border={0} align="right">
                                  <tbody>
                                    <tr>
                                      <td style={{ border: `1px solid ${BLUE_900}`, borderRadius: "8px", padding: "8px 14px" }}>
                                        <Link
                                          href={item.href}
                                          style={{ fontFamily: FONT_STACK, fontSize: "14px", fontWeight: 600, lineHeight: "16px", color: BLUE_900, textDecoration: "none", whiteSpace: "nowrap" }}
                                        >
                                          <span style={{ verticalAlign: "middle", color: BLUE_900 }}>{item.action}</span>
                                          <Img
                                            src={asset(item.action === "Watch Video" ? "icon-play-blue.png" : "icon-download-blue.png")}
                                            alt=""
                                            width={item.action === "Watch Video" ? "12" : "12"}
                                            height={item.action === "Watch Video" ? "17" : "12"}
                                            style={{ display: "inline-block", verticalAlign: "middle", border: 0, marginLeft: "8px" }}
                                          />
                                        </Link>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              ) : (
                                <span style={{ fontFamily: FONT_STACK, fontSize: "13px", fontWeight: 500, lineHeight: "16px", color: BODY_TEXT, fontStyle: "italic" }}>
                                  {item.action}
                                </span>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* ================= NEED HELP ================= */}
          <Section style={{ padding: "24px 24px 0" }}>
            <table
              role="presentation"
              width="100%"
              cellPadding={0}
              cellSpacing={0}
              border={0}
              style={{ width: "100%", backgroundColor: SURFACE_HELP, border: `1px solid ${BORDER_HELP}`, borderRadius: "12px" }}
            >
              <tbody>
                <tr>
                  <td style={{ padding: "24px" }}>
                    <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td width="80" style={{ width: "80px", verticalAlign: "top" }}>
                            <Img src={asset("icon-headphone.png")} alt="Support headset" width="64" height="64" style={{ display: "block", border: 0 }} />
                          </td>
                          <td style={{ verticalAlign: "top" }}>
                            <Heading as="h2" style={{ margin: 0, fontFamily: DISPLAY_STACK, fontSize: "20px", fontWeight: 700, lineHeight: "26px", color: GREEN }}>
                              Need Help Getting Started?
                            </Heading>
                            <Text style={{ margin: "8px 0 0", fontFamily: FONT_STACK, fontSize: "14px", fontWeight: 400, lineHeight: "20px", color: BODY_TEXT }}>
                              Our Technical Support team is available to assist you with:
                            </Text>

                            <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", marginTop: "10px" }}>
                              <tbody>
                                {[0, 2].map((start) => (
                                  <tr key={start}>
                                    {[start, start + 1].map((i) => (
                                      <td
                                        key={i}
                                        width="50%"
                                        style={{ width: "50%", padding: "0 0 6px", fontFamily: FONT_STACK, fontSize: "13px", fontWeight: 500, lineHeight: "18px", color: INK, verticalAlign: "top" }}
                                      >
                                        <Img
                                          src={asset("icon-check-green.png")}
                                          alt=""
                                          width="12"
                                          height="12"
                                          style={{ display: "inline-block", verticalAlign: "middle", border: 0, marginRight: "5px" }}
                                        />
                                        <span style={{ verticalAlign: "middle" }}>{SUPPORT_TOPICS[i]}</span>
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>

                            <Text style={{ margin: "6px 0 0", fontFamily: FONT_STACK, fontSize: "12px", fontStyle: "italic", fontWeight: 400, lineHeight: "17px", color: BODY_TEXT }}>
                              covered under your active Update &amp; Support plan.
                            </Text>

                            <table role="presentation" cellPadding={0} cellSpacing={0} border={0} style={{ marginTop: "16px" }}>
                              <tbody>
                                <tr>
                                  <td style={{ border: `2px solid ${GREEN}`, borderRadius: "8px", padding: "12px 16px" }}>
                                    <Link
                                      href="https://fidecode.com/contact"
                                      style={{ fontFamily: FONT_STACK, fontSize: "14px", fontWeight: 600, lineHeight: "16px", color: GREEN, textDecoration: "none", whiteSpace: "nowrap" }}
                                    >
                                      <span style={{ verticalAlign: "middle", color: GREEN }}>Contact Technical Support</span>
                                      <Img
                                        src={asset("icon-arrow-green.png")}
                                        alt=""
                                        width="12"
                                        height="12"
                                        style={{ display: "inline-block", verticalAlign: "middle", border: 0, marginLeft: "8px" }}
                                      />
                                    </Link>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* ================= FOOTER ================= */}
          <Section style={{ padding: "24px 24px 32px" }}>
            <table
              role="presentation"
              width="100%"
              cellPadding={0}
              cellSpacing={0}
              border={0}
              style={{ width: "100%", backgroundColor: NAVY_FLAT, backgroundImage: NAVY_GRADIENT, borderRadius: "9px" }}
            >
              <tbody>
                <tr>
                  <td {...bg(NAVY_FLAT)} style={{ padding: "24px", backgroundColor: NAVY_FLAT }}>
                    <Img src={asset("logo-footer.png")} alt="Fide Labs" width="158" height="39" style={{ display: "block", border: 0 }} />

                    <Text style={{ margin: "16px 0 0", fontFamily: FONT_STACK, fontSize: "14px", fontWeight: 600, lineHeight: "18px", color: WHITE }}>
                      FIDE LAB (OPC) PRIVATE LIMITED
                    </Text>
                    <Text style={{ margin: "8px 0 0", fontFamily: FONT_STACK, fontSize: "12px", fontWeight: 400, lineHeight: "18px", color: "rgba(255, 255, 255, .8)" }}>
                      901, 302, Dsr Tranquil, Ayyappa society, Madhapur, Hyderabad - 500081
                    </Text>

                    <Text style={{ margin: "16px 0 0", fontFamily: FONT_STACK, fontSize: "12px", fontWeight: 400, lineHeight: "18px", color: "rgba(255, 255, 255, .8)" }}>
                      &copy; 2026 FIDE Labs (OPC) Private Limited. All rights reserved.
                    </Text>
                    <Text style={{ margin: "6px 0 0", fontFamily: FONT_STACK, fontSize: "11px", fontWeight: 400, lineHeight: "16px", color: "rgba(255, 255, 255, .7)" }}>
                      This email contains confidential licensing and delivery information intended only for the licensed customer.
                      Unauthorized forwarding, sharing, or redistribution of the delivered source code is prohibited under the
                      Commercial License Agreement.
                    </Text>

                    <table role="presentation" cellPadding={0} cellSpacing={0} border={0} style={{ marginTop: "16px" }}>
                      <tbody>
                        <tr>
                          <td style={{ padding: "4px 0", fontFamily: FONT_STACK, fontSize: "13px" }}>
                            <Link href="mailto:support@fidelabs.io" style={{ color: WHITE, textDecoration: "none" }}>
                              support@fidelabs.io
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ padding: "4px 0", fontFamily: FONT_STACK, fontSize: "13px" }}>
                            <Link href="https://fidecode.com" style={{ color: WHITE, textDecoration: "none" }}>
                              fidecode.com
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SourceCodeDeliveryEmail;
