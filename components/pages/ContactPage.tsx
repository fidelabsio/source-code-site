"use client";

import type { FormEvent } from "react";
import FormField from "@/components/pages/contact/FormField";

const FORM_FIELDS: {
  id: string;
  label: string;
  type: "text" | "email" | "url" | "textarea";
  placeholder: string;
  fullWidth?: boolean;
  rows?: number;
}[] = [
  { id: "first-name", label: "First name", type: "text", placeholder: "Jordan" },
  { id: "last-name", label: "Last name", type: "text", placeholder: "Mensah" },
  { id: "email", label: "Email", type: "email", placeholder: "jordan@studio.com" },
  { id: "company", label: "Company", type: "text", placeholder: "Northline Studio" },
  { id: "store-url", label: "Shopify store URL", type: "url", placeholder: "store.myshopify.com", fullWidth: true },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "What are you building, and where can we help?",
    fullWidth: true,
    rows: 5,
  },
];

export default function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <section style={{ background: "rgb(255, 255, 255)", padding: "64px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", background: "rgb(224, 250, 248)", color: "rgb(13, 148, 136)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.8px" }}>
              <span style={{ width: "7px", height: "7px", flex: "0 0 auto", borderRadius: "999px", background: "rgb(20, 184, 166)", boxShadow: "rgba(20, 184, 166, 0.13) 0px 0px 0px 3px, rgba(20, 184, 166, 0.73) 0px 0px 9px", animation: "2.4s ease-in-out 0s infinite normal none running fl-dot" }} />
              CONTACT
            </span>
          </div>
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", alignItems: "flex-start" }}>
            <div id="contact-form" style={{ flex: "1 1 520px", minWidth: "0px", background: "rgb(255, 255, 255)", border: "1px solid rgb(229, 231, 235)", borderRadius: "16px", padding: "32px", boxShadow: "rgba(15, 23, 42, 0.08) 0px 20px 45px, rgba(15, 23, 42, 0.05) 0px 8px 20px" }}>
              <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 6px", color: "rgb(13, 21, 38)" }}>
                Send us a message
              </h2>
              <p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "rgb(107, 114, 128)", margin: "0px 0px 26px" }}>
                Tell us about your store, your clients, or the feature you need.
              </p>
              <form id="fl-contact-form" noValidate onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "18px" }}>
                  {FORM_FIELDS.map((field) => (
                    <FormField key={field.id} {...field} />
                  ))}
                </div>
                <button type="submit" className="fl-ct-scp6 fl-ct-scp4" style={{ marginTop: "26px", width: "100%", display: "inline-flex", justifyContent: "center", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "999px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", background: "linear-gradient(135deg, rgb(3, 162, 145), rgb(47, 84, 235))", color: "rgb(255, 255, 255)", fontFamily: "Geist, system-ui, sans-serif", fontSize: "14.5px", fontWeight: "600", cursor: "pointer", boxShadow: "rgba(47, 84, 235, 0.24) 0px 4px 14px", transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.18s, background 0.18s" }}>
                  <span className="sc-interp">
                    Send Message
                  </span>
                  {" "}
                  <span>
                    →
                  </span>
                </button>
                <p style={{ margin: "14px 0px 0px", textAlign: "center", fontSize: "12.5px", lineHeight: "1.6", color: "rgb(107, 114, 128)" }}>
                  {"By submitting this form, you agree to our "}
                  <a href="/privacy" className="fl-ct-scp7" style={{ color: "rgb(13, 148, 136)", fontWeight: "600", transition: "color 0.18s" }}>
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
            <div style={{ flex: "1 1 340px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ background: "rgb(255, 255, 255)", border: "1px solid rgb(229, 231, 235)", borderRadius: "16px", padding: "28px", boxShadow: "rgba(15, 23, 42, 0.08) 0px 20px 45px, rgba(15, 23, 42, 0.05) 0px 8px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                  <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.8px", color: "rgb(13, 148, 136)" }}>
                    CONTACT US
                  </span>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", flex: "0 0 auto", borderRadius: "12px", background: "rgb(224, 250, 248)", color: "rgb(13, 148, 136)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
                    </svg>
                  </div>
                  <div style={{ minWidth: "0px" }}>
                    <a href="mailto:support@fidelabs.io" className="fl-ct-scp7" style={{ display: "inline-block", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontSize: "19px", fontWeight: "700", color: "rgb(13, 148, 136)", letterSpacing: "-0.4px", marginBottom: "8px", transition: "color 0.18s" }}>
                      support@fidelabs.io
                    </a>
                    <p style={{ fontSize: "13.5px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px" }}>
                      For licensing, deployment, technical support, product enquiries, and general questions.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ background: "rgb(206, 255, 251)", border: "1px solid rgb(20, 184, 166)", borderRadius: "16px", padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "999px", background: "rgb(20, 184, 166)", boxShadow: "rgba(20, 184, 166, 0.18) 0px 0px 0px 3px", animation: "2.4s ease-in-out 0s infinite normal none running fl-dot" }} />
                  <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.8px", color: "rgb(13, 148, 136)" }}>
                    EXPECTED RESPONSE TIME
                  </span>
                </div>
                <p style={{ fontSize: "14.5px", lineHeight: "1.6", color: "rgb(55, 65, 81)", margin: "0px", fontWeight: "500" }}>
                  We typically respond within two business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(249, 250, 251)", padding: "64px 32px" }}>
        <div style={{ maxWidth: "1160px", margin: "0px auto" }}>
          <div style={{ background: "rgb(255, 255, 255)", border: "1px solid rgb(229, 231, 235)", borderRadius: "16px", padding: "36px", display: "flex", gap: "28px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", boxShadow: "rgba(15, 23, 42, 0.08) 0px 18px 40px, rgba(15, 23, 42, 0.04) 0px 8px 18px" }}>
            <div>
              <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "30px", letterSpacing: "-1.1px", margin: "0px 0px 8px", color: "rgb(13, 21, 38)" }}>
                Need technical help?
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px", maxWidth: "520px" }}>
                The documentation covers setup, branding, and deployment end to end. If it does not answer your question, send us a message above.
              </p>
            </div>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href="/documentation" className="fl-ct-scp8 fl-ct-scp4" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 26px", borderRadius: "999px", background: "rgb(255, 255, 255)", border: "1px solid rgb(209, 213, 219)", color: "rgb(31, 41, 55)", fontSize: "14.5px", fontWeight: "600", transition: "0.18s" }}>
                Browse Documentation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
