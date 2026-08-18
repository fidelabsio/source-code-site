export default function LicenseAgreementPage() {
  return (
    <>
      <section style={{ background: "rgb(247, 252, 252)", padding: "64px 32px 48px", borderBottom: "1px solid rgb(238, 242, 242)" }}>
        <div style={{ maxWidth: "820px", margin: "0px auto", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", background: "rgb(224, 250, 248)", color: "rgb(13, 148, 136)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.8px", marginBottom: "20px" }}>
            <span style={{ width: "7px", height: "7px", flex: "0 0 auto", borderRadius: "999px", background: "rgb(20, 184, 166)", boxShadow: "rgba(20, 184, 166, 0.13) 0px 0px 0px 3px, rgba(20, 184, 166, 0.73) 0px 0px 9px", animation: "2.4s ease-in-out 0s infinite normal none running fl-dot" }} />
            FULL LEGAL TEXT
          </span>
          <h1 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "44px", lineHeight: "1.1", letterSpacing: "-1.6px", margin: "0px auto 14px", color: "rgb(13, 21, 38)", maxWidth: "760px", textWrap: "pretty" }}>
            {"Commercial "}
            <span style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 84, 235) 0%, rgb(3, 162, 145) 25%, rgb(47, 84, 235) 50%, rgb(3, 162, 145) 75%, rgb(47, 84, 235) 100%)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", animation: "6s linear 0s infinite normal none running fl-grad" }}>
              License Agreement
            </span>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "1.65", color: "rgb(107, 114, 128)", margin: "0px auto", maxWidth: "620px" }}>
            {"This is the complete agreement referenced on the "}
            <a href="/license" style={{ color: "rgb(13, 148, 136)", fontWeight: "600" }}>
              Source Code License
            </a>
            {" summary. On purchase, we issue you an executed copy naming your License ID, Issue Date, Delivered Version, and Licensee details — this page is that same agreement in full."}
          </p>
        </div>
      </section>
      <section style={{ background: "rgb(255, 255, 255)", padding: "64px 32px 72px" }}>
        <div style={{ maxWidth: "820px", margin: "0px auto" }}>
          {"\n\n"}
          <div style={{ padding: "0px 0px 32px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                01
              </span>
              Parties and definitions
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"This Agreement is between "}
              <strong>
                FIDE LAB (OPC) PRIVATE LIMITED
              </strong>
              , a company registered at 901, 302, DSR Tranquil, Ayyappa Society, Madhapur, Hyderabad – 500081, Telangana, India ("
              <strong>
                FIDE Labs
              </strong>
              ", "we", "us"), and the person or company named on your License Details ("you", "
              <strong>
                Licensee
              </strong>
              ").
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              In this Agreement:
            </p>
            <ul style={{ margin: "12px 0px 0px", padding: "0px 0px 0px 18px", display: "flex", flexDirection: "column", gap: "9px" }}>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  "Product"
                </strong>
                {" means the single FIDE source-code product named on your License Details. Each FIDE Labs product is licensed separately."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  "Software"
                </strong>
                {" means the Product as supplied to you, comprising the Original Code, the Third-Party Components, and the Documentation."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  "Original Code"
                </strong>
                {" means the source code, business logic, architecture, and design system authored by FIDE Labs and supplied as part of the Software. It does not include Third-Party Components."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  "Third-Party Components"
                </strong>
                {" means open-source and third-party software incorporated into or required by the Software, including the packages identified in Schedule A and the "}
                <code>
                  THIRD-PARTY-NOTICES
                </code>
                {" file. These are not owned by FIDE Labs and are licensed to you by their respective rights holders under their own terms."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  "Documentation"
                </strong>
                {" means the guides, README, API and webhook reference, and other written materials supplied with the Software."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  "Delivery"
                </strong>
                {" means the moment we first grant you access to the repository containing the Software, or otherwise first make the Software available to you for download. Section 14.1 applies."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  "Store"
                </strong>
                {" means a single Shopify storefront identified by a unique "}
                <code>
                  .myshopify.com
                </code>
                {" domain."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  "Production Deployment"
                </strong>
                {" means an installation of the Software serving live traffic or processing real orders on a Store."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  "Non-Production Deployment"
                </strong>
                {" means an installation used solely for development, testing, staging, or demonstration, which does not serve live customer traffic and does not process real orders."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  "Client Store"
                </strong>
                {" means a Store owned or operated by a third party for whom you provide services, and which you do not own."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  "Marketplace"
                </strong>
                {" means the Shopify App Store or any other application marketplace, plugin directory, theme store, template marketplace, or code marketplace."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  "Multi-Tenant Deployment"
                </strong>
                {" means a single installation of the Software that serves two or more Stores that are not all owned or operated by you, whether as a hosted service, application, or otherwise."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  "Affiliate"
                </strong>
                {" means an entity that you control, that controls you, or that is under common control with you, where control means ownership of more than 50% of voting equity."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  "License Tier"
                </strong>
                {" means the tier named on your License Details, with the scope set out in Schedule B."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  "Order Form"
                </strong>
                {" means any written order, quotation, or purchase document issued by us and accepted by you in respect of the Software."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  "Update & Support Term"
                </strong>
                {" means the 12-month period beginning on the Issue Date, as renewed under Section 11."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  "Modifications"
                </strong>
                {" means any change, extension, or derivative work you make to the Original Code."}
              </li>
              {"\n"}
            </ul>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                02
              </span>
              License grant
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"Subject to your compliance with this Agreement and payment in full, we grant you a "}
              <strong>
                perpetual, non-exclusive, non-transferable, non-sublicensable, worldwide
              </strong>
              {" license to use, modify, and deploy the Software within the scope of your License Tier."}
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              2.1 License Tier
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              The Software is currently licensed on a single tier:
            </p>
            <div style={{ overflowX: "auto", margin: "0px 0px 12px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13.5px" }}>
                <tbody>
                  <tr style={{ background: "rgb(249, 250, 251)" }}>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", fontWeight: "600", color: "rgb(13, 21, 38)" }}>
                      Tier
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", fontWeight: "600", color: "rgb(13, 21, 38)" }}>
                      Deployment scope
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", fontWeight: "600", color: "rgb(13, 21, 38)" }}>
                      Status
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Commercial
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      One (1) Production Deployment, for one business
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Available
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              The full scope of the Commercial tier is set out in Schedule B.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              We may release additional license tiers in future, including tiers permitting deployment on Client Stores or operation of the Software as a hosted multi-tenant service. No such tier is offered as at the date of this version, and this Agreement grants no rights beyond the Commercial tier. If we release a further tier, existing licensees may upgrade to it under Section 2.6.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              2.2 Common to all tiers
            </h3>
            <div style={{ overflowX: "auto", margin: "0px 0px 12px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13.5px" }}>
                <tbody>
                  <tr style={{ background: "rgb(249, 250, 251)" }}>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", fontWeight: "600", color: "rgb(13, 21, 38)" }}>
                      Attribute
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", fontWeight: "600", color: "rgb(13, 21, 38)" }}>
                      Detail
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Production Deployments
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      One (1)
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Non-Production Deployments
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Up to three (3)
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Transferable
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      No, except under Section 20
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Territory
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Worldwide
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Duration
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Perpetual, subject to termination under Section 18
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Fee structure
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      One-time, per Product
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Non-Production Deployments do not consume license capacity. A Shopify development store, a staging store, and a local development environment are Non-Production Deployments. The moment an installation serves live customer traffic or processes real orders, it becomes a Production Deployment and consumes your capacity.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              2.3 Exceeding your tier
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              If you need more capacity than your license allows, you may purchase an additional license, or upgrade under Section 2.6 if a suitable tier is available. Deploying beyond your capacity is a breach of Section 6.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              2.4 What "lifetime" and "perpetual" mean
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"Your license is "}
              <strong>
                perpetual
              </strong>
              . Once purchased, your right to use, modify, and run the Software does not expire, and no further payment is required to keep running it.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Perpetual applies to the license, not to updates. Specifically:
            </p>
            <ul style={{ margin: "12px 0px 12px", padding: "0px 0px 0px 18px", display: "flex", flexDirection: "column", gap: "9px" }}>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  You keep permanently:
                </strong>
                {" the right to use and run the Software, including every version we released to you while your Update & Support Term was active."}
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  You do not receive permanently:
                </strong>
                {" new releases, patches, compatibility updates, or technical support after your Update & Support Term expires, unless you renew under Section 11."}
              </li>
            </ul>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              <strong>
                Your copies.
              </strong>
              {" You are responsible for retaining your own copy of each version delivered to you. We are not obliged to provide, restore, or archive repository access after your Update & Support Term expires, and your perpetual rights under this Section are not conditional on our continuing to host any version."}
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Where any marketing, sales, or promotional statement conflicts with this Section, this Section governs.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              2.5 Per-Product scope
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              This license covers one Product. It grants no rights in any other FIDE Labs product, whether existing now or released later. Other products require their own licenses.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              2.6 Tier upgrades
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              If we release a higher license tier, you may upgrade to it by paying the difference between the fee you paid and the then-current fee for that tier. On upgrade:
            </p>
            <ul style={{ margin: "12px 0px 12px", padding: "0px 0px 0px 18px", display: "flex", flexDirection: "column", gap: "9px" }}>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                your deployment capacity changes to the new tier from the upgrade date;
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                your Update & Support Term is not reset or extended, unless we agree otherwise in writing; and
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                this Agreement continues to apply, with the new tier named in an updated License Details block or an amended Order Form.
              </li>
            </ul>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Downgrades are not available and fees paid are not refundable on downgrade.
            </p>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                03
              </span>
              Fees and payment
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"The License Fee is a "}
              <strong>
                one-time payment of USD 599
              </strong>
              , as stated on your License Details and invoice.
            </p>
            <ul style={{ margin: "12px 0px 0px", padding: "0px 0px 0px 18px", display: "flex", flexDirection: "column", gap: "9px" }}>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Fees are quoted and payable in USD unless your invoice states otherwise.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Fees are exclusive of any taxes, duties, or withholdings. You are responsible for those, other than taxes on our income.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Where your purchase is made through a third-party merchant of record, that provider is the seller of record for tax purposes and its terms apply to payment processing and, as set out in Section 14, may also apply to refunds.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Repository access is granted after payment clears in full.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                We may change our published prices at any time. A price change does not affect a license already purchased.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                The annual renewal fee under Section 11 is separate from, and additional to, the one-time License Fee.
              </li>
            </ul>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                04
              </span>
              What you receive
            </h2>
            <ul style={{ margin: "0px 0px 0px", padding: "0px 0px 0px 18px", display: "flex", flexDirection: "column", gap: "9px" }}>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Complete application source code, delivered via a private repository invitation
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Installation and Deployment Guide
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Shopify Partner Setup Guide
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Configuration Guide
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                API and Webhook Documentation
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                FAQ, README, and license documentation
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                {"A "}
                <code>
                  THIRD-PARTY-NOTICES
                </code>
                {" file listing the Third-Party Components and their licenses"}
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Updates and support for the Update & Support Term, per Sections 10 and 11
              </li>
            </ul>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                05
              </span>
              Permitted use
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Within the scope of your license, you may:
            </p>
            <ul style={{ margin: "12px 0px 0px", padding: "0px 0px 0px 18px", display: "flex", flexDirection: "column", gap: "9px" }}>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Run one Production Deployment, plus up to three Non-Production Deployments, under Section 2.2.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Use the Software for your own business.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Rebrand the application: change its name, colours, copy, logos, and email templates.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Modify, extend, refactor, and study the Original Code, and add new features.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Integrate third-party services.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Disclose the source code to your employees and contractors who need it to work on your deployment, provided they are bound by confidentiality obligations at least as protective as Section 13. You remain responsible for their compliance.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Disclose the source code to the owner of the Store licensed under this Agreement, provided they agree in writing to be bound by this Agreement and you provide us a copy of that agreement on request.
              </li>
            </ul>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "12px 0px 0px" }}>
              You own your Modifications. You do not own the Original Code they are built on, and your Modifications may only be used within the scope of this license.
            </p>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                06
              </span>
              Restrictions
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              You may not:
            </p>
            <ul style={{ margin: "12px 0px 0px", padding: "0px 0px 0px 18px", display: "flex", flexDirection: "column", gap: "9px" }}>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Redistribute, resell, publish, or share the Original Code, or any portion of it, or any Modification derived in whole or in part from it, except as expressly permitted in Section 5.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Upload the Original Code to any public or shared repository, package registry, gist, forum, or file-sharing service.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Sell, license, rent, lease, or sublicense the Original Code or any Modification of it.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Publish, list, submit, or distribute the Software, or any rebranded or modified version of it, on any Marketplace.
                </strong>
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Operate the Software as a Multi-Tenant Deployment.
                </strong>
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Deploy the Software on any Client Store
                </strong>
                , or otherwise deploy or operate it for the benefit of a third party's Store.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Deploy the Software on a Store owned or operated by an Affiliate, without a separate license for that Store.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Claim authorship or ownership of the Original Code.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                {"Remove, obscure, or alter copyright notices, license headers, the "}
                <code>
                  THIRD-PARTY-NOTICES
                </code>
                {" file, or the traceability metadata described in Section 8."}
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Deploy the Software beyond the capacity stated in Section 2.2.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Build a Competing Product, as defined in Section 6.1.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Use the Software in violation of applicable law or the Shopify Partner Program Agreement and API Terms.
              </li>
            </ul>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "12px 0px 0px" }}>
              Breach of this Section is a material breach and is handled under Section 18.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              6.1 Competing Product
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"A "}
              <strong>
                "Competing Product"
              </strong>
              {" is a product or service that meets all three of the following:"}
            </p>
            <ol style={{ margin: "12px 0px 12px", padding: "0px 0px 0px 20px", display: "flex", flexDirection: "column", gap: "9px" }}>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                it incorporates, or is derived from, the Original Code;
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                its primary function is request-a-quote, hide-price, or equivalent quote-request functionality for e-commerce storefronts; and
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                it is offered, marketed, or made available to third parties as a product, app, template, or source-code package, whether for a fee or free of charge.
              </li>
            </ol>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              For clarity, neither of the following is a Competing Product: operating your own licensed Store; or building an unrelated product that reuses general programming knowledge, patterns, or techniques you gained from reading the Original Code.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              6.2 Circumvention and derivation
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              You may not circumvent, remove, disable, or work around any watermarking, license metadata, access control, or other protective measure in or applied to the Software.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              You may not use knowledge of the Original Code's architecture, business logic, or design obtained through your access to it to develop, or to assist any third party in developing, a Competing Product.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Nothing in this Section limits your rights under Section 5, or any right you have under mandatory applicable law that cannot be excluded or restricted by contract, including any right of decompilation or analysis for interoperability purposes conferred by law.
            </p>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                07
              </span>
              Intellectual property
            </h2>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "0px 0px 8px" }}>
              7.1 Original Code
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              All right, title, and interest in the Original Code, the product architecture and design system, the Documentation, FIDE Labs branding assets, and the original business logic remain the exclusive property of FIDE Labs. You receive only the license expressly granted in Section 2. Nothing in this Agreement transfers ownership.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              7.2 Third-Party Components
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              The Software incorporates Third-Party Components that FIDE Labs does not own. Those components remain the property of their respective rights holders and are licensed to you directly under their own license terms, not under this Agreement. Where a Third-Party Component's license conflicts with this Agreement in respect of that component, the component's own license governs.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"Schedule A identifies the principal Third-Party Components. The authoritative list is the "}
              <code>
                THIRD-PARTY-NOTICES
              </code>
              {" file shipped with your package. You must retain that file and all embedded license headers in any deployment."}
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              7.2.1 Copyleft components
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"If the "}
              <code>
                THIRD-PARTY-NOTICES
              </code>
              {" file identifies any component licensed under the GNU General Public License, GNU Affero General Public License, Server Side Public License, or similar copyleft terms, you agree to comply with those terms in respect of that component, including any source-availability obligation they impose on your deployment. Our indemnity under Section 17.1 does not cover claims arising from your failure to comply with the terms of a Third-Party Component's license."}
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              7.3 Your Modifications
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              You own your Modifications and any original code you write. This ownership is subject to our continuing ownership of the Original Code, and does not entitle you to use, distribute, or license your Modifications outside the scope of Section 2.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              7.4 Feedback and contributions
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              If you provide us with suggestions, feature requests, bug reports, patches, pull requests, or code contributions relating to the Software, you grant us a perpetual, irrevocable, worldwide, royalty-free, sublicensable license to use, reproduce, modify, and incorporate them into the Software and into any other FIDE Labs product, without obligation of confidentiality, attribution, or payment. You confirm you hold the rights necessary to grant this license. You are not obliged to provide any contribution, and nothing in this Section requires you to disclose your Modifications to us.
            </p>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                08
              </span>
              Source code protection and traceability
            </h2>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "0px 0px 8px" }}>
              8.1 Watermarking
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Each package supplied is watermarked with information identifying the purchaser.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Embedded data may include your name and email address, the License ID, the License Tier, the purchase date, the Delivered Version, and the invoice or order reference. This data is placed in documentation and metadata files.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"We embed and process this data on the basis of our legitimate interest in protecting our intellectual property and in detecting unauthorised distribution of the Software. We use it for one purpose only: identifying the original licensee if an unauthorised copy of the Software is found. It is not used for marketing and is not shared with third parties except as required to enforce our rights or to comply with law. Our handling of this data, including your rights in respect of it, is described in our "}
              <a href="/privacy" style={{ color: "rgb(13, 148, 136)", fontWeight: "600" }}>
                Privacy Policy
              </a>
              .
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              You may not remove, alter, or obfuscate this metadata. Section 6.2 applies.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              8.2 Consequences of unauthorised sharing
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Each watermarked package is traceable to the licensee it was issued to. Where a watermarked package, or any part of the Original Code, is found to have been shared, published, redistributed, or otherwise made available in breach of Section 5 or Section 6, and the watermark or other evidence identifies your package as its source, we may take any or all of the following steps:
            </p>
            <ul style={{ margin: "12px 0px 12px", padding: "0px 0px 0px 18px", display: "flex", flexDirection: "column", gap: "9px" }}>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Terminate this license immediately
                </strong>
                , without a cure period, under Section 18.2, with the consequences set out in Section 19;
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Decline to sell you any future FIDE Labs product, license, renewal, or upgrade
                </strong>
                , and close or refuse any account or repository access associated with you or your organisation;
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Withhold any refund
                </strong>
                {" otherwise available under Section 14;"}
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Issue infringement notices
                </strong>
                {" to hosting providers, source repositories, package registries, marketplaces, and search engines, identifying the infringing material;"}
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Pursue any remedy available at law or in equity
                </strong>
                , including injunctive relief under Section 18.3.1, damages, an account of profits, and recovery of our enforcement costs.
              </li>
            </ul>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              These steps are cumulative and are in addition to, not instead of, any other right or remedy we hold. Where the watermark identifies your package as the source of an unauthorised copy, it will be treated as evidence that the disclosure originated with you, unless you demonstrate that the disclosure occurred despite your compliance with Sections 5, 6, and 13.
            </p>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                09
              </span>
              License ID
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"Every purchase is assigned a License ID in the format "}
              <strong>
                FID-YYYY-NNNN
              </strong>
              , where NNNN is a four-digit sequence number. Quote it for support requests, purchase verification, version tracking, and renewals.
            </p>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                10
              </span>
              Support
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Support is included for the duration of the Update & Support Term.
            </p>
            <div style={{ overflowX: "auto", margin: "0px 0px 12px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13.5px" }}>
                <tbody>
                  <tr style={{ background: "rgb(249, 250, 251)" }}>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", fontWeight: "600", color: "rgb(13, 21, 38)" }}>
                      Included
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", fontWeight: "600", color: "rgb(13, 21, 38)" }}>
                      Not included
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Installation and configuration guidance
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Custom feature development
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Documentation clarification
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Shopify store or theme setup
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Bug reporting and triage
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Third-party integrations
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Product-related questions
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Server or database administration
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }} />
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Debugging your Modifications
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"Support is provided by email at "}
              <a href="mailto:support@fidelabs.io" style={{ color: "rgb(13, 148, 136)", fontWeight: "600" }}>
                support@fidelabs.io
              </a>
              {" during business hours in GMT+5:30. Our target first response time is "}
              <strong>
                2 business days
              </strong>
              .
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Target response times are goals, not contractual commitments, and do not constitute a service level agreement. Any binding SLA must be agreed separately in writing.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              We do not support Modifications you have made. If a defect can only be reproduced in modified code, support is limited to confirming whether the same defect exists in the unmodified Original Code.
            </p>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                11
              </span>
              Updates, the Update & Support Term, and renewal
            </h2>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "0px 0px 8px" }}>
              11.1 What is included
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              During the Update & Support Term you receive, at no additional cost:
            </p>
            <ul style={{ margin: "12px 0px 12px", padding: "0px 0px 0px 18px", display: "flex", flexDirection: "column", gap: "9px" }}>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Critical bug fixes — defects that prevent core functionality from operating as documented
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Security patches
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Compatibility updates required by changes to the Shopify platform or API
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                New feature releases and minor version upgrades, where we choose to issue them
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Technical support under Section 10
              </li>
            </ul>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Major new versions may be offered separately at our discretion.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              11.2 Compatibility and expiry
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              <strong>
                Compatibility updates are provided only while your Update & Support Term is active.
              </strong>
              {" Shopify changes its platform, APIs, and requirements from time to time, and those changes may affect how the Software operates."}
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              We will issue compatibility updates for such changes during your Update & Support Term. After it expires, we are under no obligation to make the Software compatible with any Shopify platform change, whether announced before or after expiry. Continued compatibility with future Shopify releases may therefore require you to renew under Section 11.4, or to purchase a new major version if one is offered under Section 11.1.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Your perpetual right to run the versions delivered to you is unaffected by this Section, but a version that is no longer compatible with the Shopify platform may cease to function correctly, and Section 15 applies.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              11.3 Term and effect of expiry
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              <strong>
                The Update & Support Term is 12 months from the Issue Date.
              </strong>
              {" When it expires, and unless you renew:"}
            </p>
            <ul style={{ margin: "12px 0px 12px", padding: "0px 0px 0px 18px", display: "flex", flexDirection: "column", gap: "9px" }}>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                You keep the perpetual right to run every version you received during the Term. See Section 2.4.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                You stop receiving new releases, patches, and support.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                You are responsible for retaining your own copy of each version delivered to you.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                We are not obliged to maintain compatibility with Shopify platform changes released after expiry. Section 11.2 applies.
              </li>
            </ul>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"Expiry of the Update & Support Term does "}
              <strong>
                not
              </strong>
              {" terminate your license."}
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              11.4 Renewal
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"You may renew for further 12-month periods at the then-current renewal fee, currently "}
              <strong>
                USD 149
              </strong>
              {" per year. Renewal restores updates and support for the renewed period."}
            </p>
            <ul style={{ margin: "12px 0px 0px", padding: "0px 0px 0px 18px", display: "flex", flexDirection: "column", gap: "9px" }}>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                {"Renewal is "}
                <strong>
                  optional
                </strong>
                {" and is not charged automatically. We will invite renewal at least 30 days before your Term expires."}
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Non-payment of a renewal fee is not a breach of this Agreement and does not give rise to any right of termination.
                </strong>
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Renewal fees are set as a percentage of the then-current list price and may change between renewal periods.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                A renewal purchased before expiry runs from the expiry date. A renewal purchased after a lapse runs from the purchase date, and we may charge a reinstatement fee of USD 99 in addition to the renewal fee.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                If your Term has lapsed for more than 3 months, we may require you to purchase a current license rather than renew.
              </li>
            </ul>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                12
              </span>
              Your responsibilities
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              You are responsible for your deployment. Specifically:
            </p>
            <ul style={{ margin: "12px 0px 12px", padding: "0px 0px 0px 18px", display: "flex", flexDirection: "column", gap: "9px" }}>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                You must test the Software before putting it into production.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                You are the operator of your deployment. Where your deployment processes personal data of merchants or their customers, you are responsible for determining your role under applicable data protection law, publishing your own privacy notice, and meeting your obligations to data subjects.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                You must implement and keep operational any mandatory compliance webhooks required by Shopify, including the customer and shop data request and redaction webhooks, in any deployment you operate.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                You must maintain your own Shopify Partner account and comply with Shopify's terms. Nothing in this Agreement grants any right in or to Shopify's platform, APIs, or trademarks.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                You are responsible for your own hosting, database, backups, monitoring, and security.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                You must keep an accurate record of your Production Deployment.
              </li>
            </ul>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              <strong>
                No data processing relationship.
              </strong>
              {" We do not host your deployment and do not access or process personal data of merchants or their end customers in connection with it. We are not a processor or sub-processor of yours in respect of that data, and no data processing agreement is required under this Agreement. The only personal data we process in connection with this Agreement is your own contact and purchase information, as described in our Privacy Policy and in Section 8."}
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              12.1 Verification
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              On not less than 15 business days' written notice, and no more than twice in any 12-month period, you will provide a written statement listing each Store domain on which the Software is deployed, certified as accurate by an authorised representative.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Where we have reasonable grounds to suspect deployment beyond your licensed capacity, we may request supporting evidence, limited to Shopify store records for the relevant Stores. We will not request access to your servers, source repositories, or business records generally.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              If verification shows you have exceeded your capacity, you must within 15 days either purchase the additional capacity at the then-current list price or remove the excess deployments. Doing so cures the breach for the purposes of Section 18.1.
            </p>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                13
              </span>
              Confidentiality
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              The Original Code is our confidential information. You must apply reasonable technical and organisational measures to prevent unauthorised access to it.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Reasonable measures include, at minimum: (a) storing the Original Code in private repositories with access limited to persons with a need to know; (b) binding each such person to confidentiality obligations at least as protective as this Section; and (c) promptly removing access when a person no longer requires it.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              This obligation does not apply to information that is public through no fault of yours, that you already lawfully held, or that you are legally compelled to disclose (in which case, tell us first if you are permitted to).
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              This obligation survives termination and continues for as long as the Original Code remains non-public. Where the Original Code becomes public as a result of your breach of this Section or your negligence, this obligation continues indefinitely notwithstanding that publication, and Section 17.2 applies to claims arising from third-party use of the published code.
            </p>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                14
              </span>
              Refunds
            </h2>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "0px 0px 8px" }}>
              14.1 Delivery
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              <strong>
                Delivery is complete, and the Software is deemed fully delivered and accepted, at the moment we first grant you access to the repository containing the Software or otherwise first make it available to you for download.
              </strong>
              {" No physical shipment, installation, or activation is required, and delivery does not depend on whether you subsequently download, deploy, or use the Software."}
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Because the Software is supplied as downloadable source code, it cannot be returned once access has been granted.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              14.2 Refunds
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              <strong>
                The Software is non-refundable once access has been granted
              </strong>
              , except in the specific cases set out in Section 14.3 or where a refund is required by applicable law.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              14.3 Limited refund cases
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"We will consider a refund request received within "}
              <strong>
                14 days of Delivery
              </strong>
              {" in these cases only:"}
            </p>
            <ul style={{ margin: "12px 0px 12px", padding: "0px 0px 0px 18px", display: "flex", flexDirection: "column", gap: "9px" }}>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Duplicate payment;
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Failure to grant repository access; or
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                The Software fails to perform its core documented functions — quote capture, quote management, and email notification — as described in the Documentation, despite reasonable troubleshooting, and we cannot resolve the issue within 14 days of you reporting it.
              </li>
            </ul>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"Requests made more than 14 days after Delivery will not be considered. Change of mind, insufficient technical knowledge, incorrect purchase choice, lack of a required Shopify Partner account or hosting environment, and unmet expectations that are not documented functions are "}
              <strong>
                not
              </strong>
              {" eligible."}
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Renewal fees, reinstatement fees, and upgrade fees are non-refundable once the renewed or upgraded period has begun.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Where your purchase was made through a third-party merchant of record, that provider's refund policy may also apply and, to the extent it is more generous, will prevail.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              A refund of the License Fee terminates your license. Section 19 applies. We may withhold a refund otherwise available under this Section where Section 8.2 applies.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Nothing in this Section limits any non-waivable statutory refund right you may have under applicable law.
            </p>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                15
              </span>
              Disclaimer of warranty
            </h2>
            <p style={{ fontSize: "13px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px", textTransform: "uppercase", letterSpacing: "0.2px" }}>
              The Software is provided "as is" and "as available", without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that the Software will operate without interruption or error, that it will meet any requirement specific to your business, or that it will remain compatible with future versions of the Shopify platform. We give no warranty of any kind in respect of Third-Party Components.
            </p>
            <p style={{ fontSize: "13px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px", textTransform: "uppercase", letterSpacing: "0.2px" }}>
              You are responsible for validating the Software before deploying it to production.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Nothing in this Section excludes or limits any warranty, liability, or right that cannot be excluded or limited under applicable law. Where any exclusion in this Section is held unenforceable, it applies to the maximum extent permitted.
            </p>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                16
              </span>
              Limitation of liability
            </h2>
            <p style={{ fontSize: "13px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px", textTransform: "uppercase", letterSpacing: "0.2px" }}>
              To the maximum extent permitted by law, neither party is liable for any indirect, incidental, special, punitive, or consequential damages, or for lost profits, lost revenue, lost data, or business interruption, arising out of or relating to this Agreement, even if advised of the possibility of such damages.
            </p>
            <p style={{ fontSize: "13px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px", textTransform: "uppercase", letterSpacing: "0.2px" }}>
              Our total aggregate liability under this Agreement shall not exceed the greater of (a) the total License Fee paid by you under this Agreement, or (b) the total amounts paid by you under this Agreement in the twelve months preceding the event giving rise to the claim.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              These limits do not apply to: your payment obligations; your breach of Section 6 (Restrictions) or Section 13 (Confidentiality); your indemnity obligations under Section 17.2; or any liability that cannot be limited by law, including fraud, wilful misconduct, and death or personal injury caused by negligence.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Nothing in this Section excludes or limits any liability that cannot be excluded or limited under applicable law. Where any limitation in this Section is held unenforceable, it applies to the maximum extent permitted.
            </p>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                17
              </span>
              Indemnification
            </h2>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "0px 0px 8px" }}>
              17.1 Our indemnity to you
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"We will defend you against a third-party claim alleging that the "}
              <strong>
                unmodified Original Code
              </strong>
              , used as permitted by this Agreement, infringes that third party's copyright, trademark, or trade secret rights, and we will pay damages finally awarded or agreed in settlement.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              This indemnity does not apply to claims arising from: your Modifications; combination of the Software with anything not supplied by us; Third-Party Components, including any claim arising from your failure to comply with a Third-Party Component's license terms or attribution requirements; your continued use after we notify you to stop; or use outside the scope of this Agreement.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              If a claim is made or we reasonably believe one is likely, we may at our option procure the right for you to continue using the Software, modify it to be non-infringing, or terminate the license and refund a pro-rated portion of the fees you paid.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              <strong>
                Our total liability under this Section is subject to, and counts towards, the cap in Section 16, notwithstanding anything in Section 16 to the contrary.
              </strong>
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              17.2 Your indemnity to us
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              You will defend and indemnify us against any third-party claim arising from: your deployment and operation of the Software; your Modifications; your use of the Software in breach of this Agreement or applicable law; your handling of personal data; and claims by merchants or their end customers relating to your deployment.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              17.3 Conditions
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              An indemnity applies only if the indemnified party gives prompt written notice of the claim, gives the indemnifying party sole control of the defence and settlement (except that no settlement admitting liability or imposing obligations on the indemnified party may be made without consent), and provides reasonable cooperation at the indemnifying party's expense.
            </p>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                18
              </span>
              Breach, suspension, and termination
            </h2>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "0px 0px 8px" }}>
              18.1 Curable breach
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"If you breach this Agreement, we will give you written notice describing the breach. If the breach is capable of being cured and you cure it within "}
              <strong>
                30 days
              </strong>
              , no further action follows. Deploying beyond your capacity is cured by purchasing the additional capacity or removing the excess deployment.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              18.2 Immediate termination
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              We may suspend support and terminate this license immediately, without a cure period, if you:
            </p>
            <ul style={{ margin: "12px 0px 12px", padding: "0px 0px 0px 18px", display: "flex", flexDirection: "column", gap: "9px" }}>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                redistribute, publish, resell, share, or sublicense the Original Code;
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                upload it to a public repository;
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                publish or list the Software on a Marketplace;
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                operate the Software as a Multi-Tenant Deployment, or deploy it on a Client Store;
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                build or release a Competing Product; or
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                fail to pay the License Fee.
              </li>
            </ul>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Section 8.2 sets out the additional consequences that may follow where an unauthorised copy of the Software is traced to your package.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              18.3 Remedies
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              On termination for breach we may, in addition to terminating: suspend support and repository access; withhold refunds; issue copyright infringement notices to hosting providers, repositories, registries, and marketplaces; and pursue any remedy available at law or in equity, including injunctive relief.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              18.3.1 Injunctive relief
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              You acknowledge that a breach of Section 6 or Section 13 would cause us irreparable harm not adequately remedied by damages, and agree that we may seek injunctive or other equitable relief in addition to any other remedy, without the necessity of posting a bond or other security where the court permits.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              18.4 Suspension pending investigation
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Where we have reasonable grounds to suspect a breach of Section 6 or Section 13, suspension under this Section does not affect your right to continue running versions already delivered to you, does not extend your Update & Support Term, and will be lifted promptly if the suspicion is not substantiated.
            </p>
            {"\n\n"}
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "20px 0px 8px" }}>
              18.5 Your right to terminate
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              You may terminate this Agreement at any time by ceasing use and complying with Section 19. Termination by you does not entitle you to a refund except under Section 14.
            </p>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                19
              </span>
              Effect of termination
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"On termination for any reason, you must, within "}
              <strong>
                10 business days
              </strong>
              :
            </p>
            <ol style={{ margin: "12px 0px 12px", padding: "0px 0px 0px 20px", display: "flex", flexDirection: "column", gap: "9px" }}>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Stop all use of the Software, including all Production and Non-Production Deployments.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Remove the Software from every Store, server, and environment you control.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Delete all copies of the Original Code in your possession or control, including forks, branches, local clones, archives, and backups, except copies in immutable backup systems, which must be deleted on their normal expiry cycle and in any event within 12 months of termination, and which must not be restored into use.
              </li>
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                Provide a written certification, signed by an authorised representative, confirming that you have complied with paragraphs 1 to 3, identifying each repository, environment, and storage system from which deletion occurred, and identifying any immutable backup system in which copies remain together with its scheduled expiry date.
              </li>
            </ol>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Your Modifications are of no further use to you once the Original Code is deleted; the right to run them within the Software ends with the license.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Termination does not entitle you to a refund except as set out in Section 14, and does not relieve you of amounts already owed. Breach of this Section is subject to the remedies in Sections 8.2 and 18.3, including injunctive relief under Section 18.3.1.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              <strong>
                Survival.
              </strong>
              {" Sections 1, 3, 6, 7, 8, 13, 15, 16, 17, 19, 20, 21, and 22 survive termination."}
            </p>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                20
              </span>
              Assignment and change of control
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              You may not assign or transfer this Agreement, or the license granted under it, without our prior written consent. Consent will not be unreasonably withheld where the transfer is to a purchaser of all or substantially all of your business or assets, provided the transferee agrees in writing to be bound by this Agreement and the Licensed Store record is updated accordingly.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              We may assign this Agreement in full, without your consent, to a successor in connection with a merger, acquisition, corporate reorganisation, or sale of all or substantially all of our assets. Your license and your rights under it survive any such transaction unchanged. We will notify you of any assignment.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Any attempted assignment in breach of this Section is void.
            </p>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                21
              </span>
              Governing law and dispute resolution
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"This Agreement is governed by the laws of "}
              <strong>
                India
              </strong>
              , without regard to its conflict-of-laws rules. The United Nations Convention on Contracts for the International Sale of Goods does not apply.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"The courts of "}
              <strong>
                Hyderabad, Telangana, India
              </strong>
              {" have exclusive jurisdiction over any dispute arising out of or relating to this Agreement, and both parties submit to that jurisdiction."}
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              Before filing a claim, the parties will attempt in good faith to resolve the dispute through discussion between senior representatives for 30 days. This does not prevent either party from seeking urgent injunctive relief at any time, in any court of competent jurisdiction, to protect intellectual property or confidential information.
            </p>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px", borderBottom: "1px solid rgb(243, 244, 246)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                22
              </span>
              General
            </h2>
            <ul style={{ margin: "0px 0px 0px", padding: "0px 0px 0px 18px", display: "flex", flexDirection: "column", gap: "9px" }}>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Business use.
                </strong>
                {" You confirm that you are acquiring and using the Software wholly or mainly for purposes relating to your trade, business, craft, or profession, and not as a consumer. Where any provision of this Agreement is unenforceable against a consumer under applicable law, that provision applies to the maximum extent permitted."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Entire agreement.
                </strong>
                {" This Agreement, together with the invoice, Schedule A, Schedule B, and any Order Form, is the entire agreement between us on this subject and supersedes all prior discussions, proposals, marketing statements, and representations."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Order of precedence.
                </strong>
                {" If there is a conflict, this Agreement prevails over any purchase order, vendor terms, marketing page, or other document. Where an Order Form expressly amends a specific section of this Agreement, the Order Form prevails for that section only."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Amendments.
                </strong>
                {" Changes to this Agreement must be in writing and agreed by both parties, including by electronic acceptance. We may update the standard form of this license for future releases; the version delivered with your purchase governs your purchase."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Waiver.
                </strong>
                {" A failure to enforce any provision is not a waiver of it."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Severability.
                </strong>
                {" If any provision is held unenforceable, it will be limited or severed to the minimum extent necessary, and the rest of the Agreement remains in force."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Notices.
                </strong>
                {" Notices to you go to the email on your License Details. Notices to us go to support@fidelabs.io and, where formal service is required, to the registered address in Section 1. Email notice is deemed received on the next business day."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Independent contractors.
                </strong>
                {" Nothing here creates a partnership, joint venture, employment, or agency relationship."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Force majeure.
                </strong>
                {" Neither party is liable for delay or failure caused by events beyond its reasonable control, excluding payment obligations."}
              </li>
              {"\n"}
              <li style={{ fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" }}>
                <strong>
                  Export and sanctions.
                </strong>
                {" You confirm you are not located in, and will not deploy the Software from, a country subject to comprehensive trade sanctions, and that you are not on any restricted-party list."}
              </li>
              {"\n"}
            </ul>
          </div>
          {"\n\n"}
          <div style={{ padding: "32px 0px 0px" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.6px", margin: "0px 0px 12px", color: "rgb(13, 21, 38)" }}>
              <span style={{ color: "rgb(13, 148, 136)", marginRight: "10px" }}>
                23
              </span>
              Contact
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"For licensing questions, purchase verification, tier upgrades, renewals, or support, contact us at "}
              <a href="mailto:support@fidelabs.io" style={{ color: "rgb(13, 148, 136)", fontWeight: "600" }}>
                support@fidelabs.io
              </a>
              . Include your License ID, License Tier, Delivered Version, purchase email, and a description of the issue.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              {"For formal legal notices, contact "}
              <a href="mailto:support@fidelabs.io" style={{ color: "rgb(13, 148, 136)", fontWeight: "600" }}>
                support@fidelabs.io
              </a>
              .
            </p>
          </div>
          {"\n\n"}
          <div style={{ marginTop: "44px", padding: "32px 28px", border: "1px solid rgb(229, 231, 235)", borderRadius: "16px", background: "rgb(249, 250, 251)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "18px", letterSpacing: "-0.4px", margin: "0px 0px 14px", color: "rgb(13, 21, 38)" }}>
              Schedule A — Third-party components
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              The Software incorporates third-party packages that FIDE Labs does not own. Each is licensed to you by its rights holder under its own terms, as set out in Section 7.2.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 16px" }}>
              {"The authoritative list of Third-Party Components and their license identifiers is the "}
              <code>
                THIRD-PARTY-NOTICES
              </code>
              {" file included in the root of the repository supplied to you. That file is generated from the actual production dependency tree of your Delivered Version. Where this Schedule and the "}
              <code>
                THIRD-PARTY-NOTICES
              </code>
              {" file differ, the file governs. The principal components are:"}
            </p>
            <div style={{ overflowX: "auto", margin: "0px 0px 12px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13.5px", background: "rgb(255, 255, 255)" }}>
                <tbody>
                  <tr style={{ background: "rgb(243, 244, 246)" }}>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", fontWeight: "600", color: "rgb(13, 21, 38)" }}>
                      Component
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", fontWeight: "600", color: "rgb(13, 21, 38)" }}>
                      Purpose
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      React
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      UI framework
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      React Router
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Routing
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Prisma
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Database ORM and client
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Shopify Polaris
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Admin UI component library
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Shopify App Bridge
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Embedded app integration
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 0px" }}>
              {"For the license identifier applicable to each component above, and for the complete list of all production dependencies including transitive dependencies, refer to "}
              <code>
                THIRD-PARTY-NOTICES
              </code>
              . You must retain that file and all embedded license headers in any deployment. Section 7.2.1 applies to any component licensed under copyleft terms.
            </p>
          </div>
          {"\n\n"}
          <div style={{ marginTop: "24px", padding: "32px 28px", border: "1px solid rgb(229, 231, 235)", borderRadius: "16px", background: "rgb(249, 250, 251)" }}>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700", fontSize: "18px", letterSpacing: "-0.4px", margin: "0px 0px 14px", color: "rgb(13, 21, 38)" }}>
              Schedule B — License tiers
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 16px" }}>
              The Commercial tier is a one-time fee per Product, carries a perpetual license under Section 2.4, and includes a 12-month Update & Support Term renewable under Section 11.4.
            </p>
            <div style={{ overflowX: "auto", margin: "0px 0px 16px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13.5px", background: "rgb(255, 255, 255)" }}>
                <tbody>
                  <tr style={{ background: "rgb(243, 244, 246)" }}>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)" }} />
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", fontWeight: "600", color: "rgb(13, 21, 38)" }}>
                      Commercial
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Status
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Available
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Fee (one-time)
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      USD 599
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Annual renewal
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      USD 149
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Production Deployments
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      1
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Non-Production Deployments
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      3
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Own business use
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Yes
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Client Stores
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      No
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Affiliate Stores
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      No — separate license required per Store
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Multi-Tenant Deployment
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      No
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Marketplace listing
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      No
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Source disclosure to client
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Employees, contractors, and the licensed Store owner only
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Support
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Standard — 2 business day target first response
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      Resale of source code
                    </td>
                    <td style={{ padding: "10px 14px", border: "1px solid rgb(229, 231, 235)", color: "rgb(55, 65, 81)" }}>
                      No
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "rgb(13, 21, 38)", margin: "0px 0px 8px" }}>
              B.1 Scope
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 12px" }}>
              One Production Deployment, on one Store, for one business. "One business" means you, the single legal entity named on your License Details. It does not include your Affiliates, and it does not include Client Stores.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 0px" }}>
              {"If you operate more than one Store yourself, each Store needs its own license. If you wish to deploy the Software on a Store you do not own, or to operate it as a hosted service for other merchants, or to list it on a Marketplace, this license does not permit it — contact us at "}
              <a href="mailto:support@fidelabs.io" style={{ color: "rgb(13, 148, 136)", fontWeight: "600" }}>
                support@fidelabs.io
              </a>
              {" to discuss whether a suitable license is available."}
            </p>
          </div>
          {"\n\n"}
          <div style={{ marginTop: "32px", padding: "20px 24px", borderRadius: "12px", background: "rgb(247, 252, 252)", textAlign: "center" }}>
            <p style={{ fontSize: "13px", lineHeight: "1.6", color: "rgb(107, 114, 128)", margin: "0px" }}>
              Copyright © 2026 FIDE LAB (OPC) PRIVATE LIMITED. All rights reserved. Unauthorised copying, redistribution, or commercial reuse of the Original Code without written permission is prohibited.
            </p>
          </div>
          {"\n\n"}
          <div style={{ marginTop: "44px", borderRadius: "20px", padding: "48px 32px", textAlign: "center", background: "linear-gradient(135deg, rgb(47, 84, 235), rgb(3, 162, 145))", boxShadow: "rgba(47, 84, 235, 0.55) 0px 26px 54px -28px" }}>
            <div style={{ width: "52px", height: "52px", margin: "0px auto 20px", borderRadius: "15px", background: "rgba(255, 255, 255, 0.16)", border: "1px solid rgba(255, 255, 255, 0.24)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgb(255, 255, 255)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
              </svg>
            </div>
            <h2 style={{ fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800", fontSize: "28px", letterSpacing: "-1px", margin: "0px 0px 10px", color: "rgb(255, 255, 255)" }}>
              Questions About This Agreement?
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.65", color: "rgba(255, 255, 255, 0.82)", margin: "0px auto 26px", maxWidth: "520px" }}>
              Need clarification about a specific clause or how it applies to your deployment? Our team is happy to help.
            </p>
            <a href="/contact#contact-form" className="fl-tm-scp5 fl-tm-scp4" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 30px", borderRadius: "999px", background: "rgb(255, 255, 255)", color: "rgb(13, 21, 38)", fontSize: "14.5px", fontWeight: "600", boxShadow: "rgba(13, 21, 38, 0.5) 0px 10px 26px -12px", transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.18s" }}>
              {"Contact Support "}
              <span>
                →
              </span>
            </a>
          </div>
        </div>
      </section>
      {"\n"}
    </>
  );
}
