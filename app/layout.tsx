import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";

const SITE_URL = "https://fidecode.com";
const SITE_NAME = "Fide Labs";
const SITE_DESCRIPTION =
  "Launch your own Shopify app or deliver white-label solutions from one production-ready codebase — complete source code, documentation, and a commercial license.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fide Labs — One Codebase for Your Brand and Every Client Brand",
    template: "%s — Fide Labs",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "white-label Shopify app",
    "Shopify app source code",
    "Shopify B2B quote app",
    "Shopify app boilerplate",
    "production-ready Shopify codebase",
  ],
  authors: [{ name: SITE_NAME }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: "Fide Labs — One Codebase for Your Brand and Every Client Brand",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Fide Labs — One Codebase for Your Brand and Every Client Brand",
    description: SITE_DESCRIPTION,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  logo: `${SITE_URL}/assets/404-asset-1.png`,
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@fidelabs.io",
    contactType: "customer support",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/assets/site.css" />
        <JsonLd data={organizationJsonLd} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  var R=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var d=document.documentElement,fired=false,t0=Date.now();
  function unlock(){if(document.body)document.body.removeAttribute('data-fl-lock');}
  function kill(){
    d.setAttribute('data-fl-done','1');
    var n=document.getElementById('fl-loader');
    if(n)n.style.display='none';
    unlock();
  }
  function done(){
    d.setAttribute('data-fl-out','1');
    var n=document.getElementById('fl-loader');
    if(!R&&n&&n.animate){
      var a=n.animate(
        [{opacity:1,transform:'scale(1)'},{opacity:0,transform:'scale(0.98)'}],
        {duration:400,easing:'ease',fill:'both'}
      );
      a.onfinish=kill;
      setTimeout(kill,800);
    }else{kill();}
  }
  function go(){
    if(fired)return;fired=true;
    var img=document.querySelector('#fl-loader img');
    var wait=Math.max(0,(R?0:1100)-(Date.now()-t0));
    function fire(){setTimeout(done,R?0:260);}
    setTimeout(function(){
      if(img&&!img.complete){img.addEventListener('load',fire);img.addEventListener('error',fire);setTimeout(fire,2000);}
      else fire();
    },wait);
  }
  function lock(){if(document.body)document.body.setAttribute('data-fl-lock','1');}
  if(document.body)lock();else document.addEventListener('DOMContentLoaded',lock);
  if(document.readyState==='complete')go();
  else window.addEventListener('load',go);
  setTimeout(go,6000);
  setTimeout(kill,9000);
})();
`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <div
          id="fl-loader"
          role="status"
          aria-live="polite"
          suppressHydrationWarning
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2147483647,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            background: "#FFFFFF",
            contain: "layout paint",
          }}
        >
          <img
            src="/assets/404-asset-1.png"
            alt="FIDELabs"
            width={172}
            height={47}
            style={{ display: "block", width: 172, height: 47, objectFit: "contain", animation: "fl-ld-logo 480ms cubic-bezier(.2,.8,.2,1) both" }}
          />
          <div
            aria-hidden="true"
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "conic-gradient(from 0deg, rgba(20,184,166,0) 0deg, #14B8A6 100deg, #2F54EB 270deg, rgba(47,84,235,0) 360deg)",
              WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
              animation: "fl-ld-spin 800ms linear infinite",
            }}
          />
          <p style={{ margin: 0, fontFamily: "Geist, system-ui, sans-serif", fontSize: 13.5, letterSpacing: 0.2, color: "#6B7280" }}>
            Preparing your experience…
          </p>
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
