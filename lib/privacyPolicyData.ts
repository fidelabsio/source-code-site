import type { LegalSection } from "@/components/pages/legal/LegalBlocks";

export const privacyPolicySections: LegalSection[] = [
  {
    number: "01",
    title: "Who we are",
    blocks: [
      {
        type: "p",
        text: `This Privacy Policy explains how **FIDE LAB (OPC) PRIVATE LIMITED** ("FIDE Labs", "we", "us", "our") collects and uses personal data when you visit our website, purchase a source code licence, receive a delivery, contact support, or renew.`,
      },
      {
        type: "p",
        text: `For everything described in this Policy, FIDE Labs is the **controller** of your personal data (a "Data Fiduciary" under India's Digital Personal Data Protection Act, 2023).`,
      },
    ],
  },
  {
    number: "02",
    title: "What this Policy covers — and what it does not",
    blocks: [
      { type: "p", text: `**This Policy covers:**` },
      {
        type: "ul",
        items: [
          `the Product website at [FideCode.com](http://FideCode.com) and any documentation or purchase pages we operate on it;`,
          `your purchase of a licence under the Commercial License Agreement (the "Licence");`,
          `delivery of the watermarked ZIP file, including the traceability metadata described in Section 8.1 of the Licence;`,
          `support, updates, renewals, and licence verification; and`,
          `our business communications with you.`,
        ],
      },
      { type: "p", text: `**This Policy does not cover:**` },
      {
        type: "table",
        headers: ["Out of scope", "Who is responsible", "Why"],
        rows: [
          [
            `Personal data processed by **your deployment** of the software — your merchants, your customers, quote requests, order data`,
            `**You**, as the operator of your deployment`,
            `Section 12 of the Licence. We do not host your deployment and have no access to it.`,
          ],
          [`Third-party services **you** integrate into your deployment`, `You and that provider`, `We supply source code, not a service.`],
          [`Payment card details`, `Our payment provider`, `See Section 5. We never receive or store card numbers.`],
        ],
      },
      {
        type: "p",
        text: `**No data processing relationship.** Consistent with Section 12 of the Licence, we are not a processor or sub-processor for the personal data your deployment handles. You determine your own role under applicable data protection law, publish your own privacy notice, and answer to your own data subjects. No data processing agreement is required between us for that data, and we will not sign one in respect of it.`,
      },
    ],
  },
  {
    number: "03",
    title: "Personal data we collect",
    blocks: [
      { type: "p", text: `We collect only what we need to sell you a licence, deliver it, support it, and protect it.` },
      { type: "h3", text: `3.1 Data you give us` },
      {
        type: "table",
        headers: ["Category", "Examples", "When"],
        rows: [
          [`**Identity and contact data**`, `Name, authorised contact name, company or trading name, email address, country`, `At purchase; when you contact us`],
          [
            `**Purchase data**`,
            `Purchase / invoice number, order reference, licence tier, amount, currency, date, tax identifiers where required`,
            `At purchase`,
          ],
          [
            `**Licence data**`,
            `Licence ID (FID-YYYY-NNNN), issue date, delivered version, Update & Support Term dates, renewal history`,
            `At purchase and throughout the Licence`,
          ],
          [
            `**Deployment data**`,
            `Licensed store domain(s), and any store domains listed in a verification statement under Section 12.1 of the Licence`,
            `At purchase; on verification`,
          ],
          [
            `**Support data**`,
            `Emails to [support@fidelabs.io](mailto:support@fidelabs.io), bug reports, screenshots, log extracts, configuration details you choose to send us`,
            `When you contact support`,
          ],
          [`**Correspondence**`, `Pre-sales enquiries, legal notices, feedback and feature requests under Section 7.4 of the Licence`, `Whenever you write to us`],
        ],
      },
      {
        type: "quote",
        text: `**Please do not send us live personal data.** When reporting a bug, redact or anonymise merchant and customer data in logs, screenshots, and database extracts before sending them. If you send us personal data we did not ask for, we will delete it once the support request is closed.`,
      },
      { type: "h3", text: `3.2 Data we generate` },
      {
        type: "table",
        headers: ["Category", "Detail"],
        rows: [
          [
            `**Watermark and traceability metadata**`,
            `Each delivered package is watermarked under Section 8.1 of the Licence. Embedded data may include your name and email address, the Licence ID, the Licence Tier, the purchase date, the delivered version, and the invoice or order reference, placed in documentation and metadata files.`,
          ],
          [
            `**Delivery records**`,
            `Date and time the download link was issued, the email address it was sent to, and delivery confirmation retained as proof of delivery under Section 14.1 of the Licence`,
          ],
          [`**Licence register**`, `Our internal record linking your Licence ID to your purchase, term, and renewal status`],
        ],
      },
      { type: "h3", text: `3.3 Data collected automatically` },
      {
        type: "table",
        headers: ["Category", "Detail"],
        rows: [
          [`**Website usage**`, `IP address, browser type and version, device type, referring page, pages viewed, timestamps`],
          [`**Cookies and similar technologies**`, `See Section 10`],
          [`**Security logs**`, `Access logs and error reports generated by our hosting and monitoring providers`],
        ],
      },
      { type: "h3", text: `3.4 What we do not collect` },
      {
        type: "ul",
        items: [
          `We do not collect payment card numbers, CVV codes, or bank credentials.`,
          `We do not collect special category / sensitive personal data, and ask that you do not send any.`,
          `We do not knowingly collect data from children. Our products are sold on a business-to-business basis under Section 22 of the Licence and are not directed to anyone under 18.`,
          `We do not receive telemetry, usage data, or "phone home" signals from your deployment. The software does not transmit data to us once delivered.`,
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Why we use your data, and our legal basis",
    blocks: [
      {
        type: "table",
        headers: ["Purpose", "Data used", "Legal basis (GDPR / UK GDPR)", "Basis under India's DPDP Act, 2023"],
        rows: [
          [
            `Process your purchase, issue an invoice, grant access to the ZIP file`,
            `Identity, purchase, licence data`,
            `Performance of a contract (Art. 6(1)(b))`,
            `Consent / performance of the contract you requested`,
          ],
          [
            `Provide support, updates, and compatibility patches during your Update & Support Term`,
            `Identity, licence, support data`,
            `Performance of a contract (Art. 6(1)(b))`,
            `Consent for the specified purpose`,
          ],
          [
            `Watermark packages and trace unauthorised distribution`,
            `Watermark metadata, licence data`,
            `Legitimate interests (Art. 6(1)(f)) — protecting our intellectual property and detecting unauthorised distribution`,
            `Legitimate use — protection of our rights and enforcement of legal claims`,
          ],
          [
            `Verify licence compliance under Section 12.1 of the Licence`,
            `Deployment data, licence data`,
            `Legitimate interests (Art. 6(1)(f)) — enforcing the terms of the Licence`,
            `Legitimate use`,
          ],
          [
            `Send transactional notices: delivery, release notes, security advisories, renewal invitations under Section 11.4`,
            `Identity, licence data`,
            `Performance of a contract (Art. 6(1)(b)); legitimate interests for security advisories`,
            `Consent / legitimate use`,
          ],
          [
            `Send marketing about other FIDE Labs products`,
            `Identity data`,
            `Consent (Art. 6(1)(a)), or legitimate interests for existing customers where permitted`,
            `Consent, withdrawable at any time`,
          ],
          [`Keep accounting, tax, and statutory records`, `Purchase data`, `Legal obligation (Art. 6(1)(c))`, `Compliance with law`],
          [
            `Establish, exercise, or defend legal claims, including under Sections 8.2, 18, and 19 of the Licence`,
            `Any of the above`,
            `Legitimate interests (Art. 6(1)(f))`,
            `Legitimate use — enforcement of legal rights`,
          ],
          [`Improve the product using feedback you send us`, `Feedback under Section 7.4`, `Legitimate interests (Art. 6(1)(f))`, `Legitimate use`],
        ],
      },
      {
        type: "p",
        text: `**A note on watermarking.** We take this seriously because you should know exactly what is embedded in your package and why. The metadata exists for one purpose: identifying the original licensee if an unauthorised copy of the software is found. It is not used for marketing, is not sold, is not shared with third parties except as needed to enforce our rights or comply with law, and is not used to profile you. You may not remove or obfuscate it — Section 6.2 of the Licence applies — and if you object to the processing under Section 8, tell us and we will consider your objection, but we may be unable to supply the software without it.`,
      },
      {
        type: "p",
        text: `**No automated decision-making.** We do not use your data for automated decision-making or profiling that produces legal or similarly significant effects. Decisions about breach, suspension, or termination under the Licence are made by a person.`,
      },
    ],
  },
  {
    number: "05",
    title: "Payments",
    blocks: [
      {
        type: "p",
        text: `Payments are processed by our payment provider. Where that provider is the merchant of record, it is the seller of record for tax purposes and an independent controller of the payment data you give it, under its own privacy policy.`,
      },
      {
        type: "p",
        text: `We receive from the provider only the information needed to issue and administer your licence: your name, company name, email address, billing country, order or invoice reference, amount, and payment status. **We never receive your full card number, CVV, or bank credentials.**`,
      },
    ],
  },
  {
    number: "06",
    title: "Who we share your data with",
    blocks: [
      { type: "p", text: `We do not sell your personal data, and we do not share it for cross-context behavioural advertising.` },
      { type: "p", text: `We share it only with the categories of recipient below.` },
      { type: "h3", text: `6.1 Service providers` },
      {
        type: "table",
        headers: ["Provider", "Purpose", "Data shared"],
        rows: [
          [`Payment provider / merchant of record`, `Payment processing, invoicing, tax`, `Identity, purchase data`],
          [`Email service (transactional and support)`, `Delivery emails, support correspondence, renewal notices`, `Identity, licence, support data`],
          [`File delivery / storage`, `Hosting and serving the watermarked ZIP file`, `Licence data, download logs`],
          [`Website hosting`, `Serving the Product website`, `Website usage data, IP address`],
          [`Analytics`, `Website measurement`, `Website usage data`],
          [`Error monitoring`, `Detecting website faults`, `Technical logs, IP address`],
          [`Accounting / bookkeeping`, `Statutory financial records`, `Purchase data`],
        ],
      },
      {
        type: "p",
        text: `Each provider acts on our instructions under a written agreement, is bound to confidentiality and appropriate security, and may use the data only for the purpose we specify.`,
      },
      { type: "h3", text: `6.2 Other recipients` },
      {
        type: "table",
        headers: ["Recipient", "When"],
        rows: [
          [`Professional advisers — lawyers, accountants, auditors`, `When we need advice or are subject to audit`],
          [`Courts, regulators, law enforcement`, `Where required by law, or to establish, exercise, or defend legal claims`],
          [
            `Hosting providers, package registries, marketplaces, search engines`,
            `Where we issue an infringement notice under Section 8.2 of the Licence, limited to what is necessary to identify the infringing material and our rights in it`,
          ],
          [
            `A successor entity`,
            `On a merger, acquisition, reorganisation, or sale of all or substantially all of our assets, as contemplated by Section 20 of the Licence. We will notify you.`,
          ],
        ],
      },
    ],
  },
  {
    number: "07",
    title: "International transfers",
    blocks: [
      {
        type: "p",
        text: `We are based in India. If you are in the EEA, the UK, or elsewhere, your personal data will be transferred to and processed in India, and may be processed by our service providers in other countries.`,
      },
      {
        type: "p",
        text: `India has not received an adequacy decision from the European Commission. Where we transfer personal data out of the EEA or the UK, we rely on:`,
      },
      {
        type: "ul",
        items: [
          `the **EU Standard Contractual Clauses (2021)**, and the **UK International Data Transfer Addendum** where UK data is in scope; or`,
          `another lawful transfer mechanism, including your explicit consent or the transfer being necessary for the performance of the contract between us (GDPR Art. 49(1)(b)), which will typically apply to the purchase and delivery of your licence.`,
        ],
      },
      { type: "p", text: `You may request a copy of the safeguards we rely on by writing to us at the address in Section 12.` },
    ],
  },
  {
    number: "08",
    title: "How long we keep your data",
    blocks: [
      {
        type: "table",
        headers: ["Data", "Retention period", "Reason"],
        rows: [
          [
            `Licence register (Licence ID, tier, term, delivered version, licensed store domains)`,
            `For the life of the licence — which is perpetual under Section 2.4 — and for **7 years** after it ends or is terminated`,
            `Your licence does not expire; we must be able to verify it indefinitely, and to defend claims after it ends`,
          ],
          [
            `Watermark and traceability metadata, and delivery records`,
            `Same as the licence register`,
            `Required as evidence of delivery under Section 14.1 and for enforcement under Section 8.2`,
          ],
          [`Invoices, payment records, tax records`, `**8 years** from the end of the relevant financial year`, `Companies Act, 2013 and Indian tax law`],
          [`Support correspondence`, `**3 years** from the close of the request`, `Product quality, and defending claims within the limitation period`],
          [`Verification statements under Section 12.1`, `**3 years** from receipt`, `Compliance record`],
          [`Marketing contact data`, `Until you unsubscribe, or **2 years** of inactivity, whichever is sooner`, `Consent-based`],
          [
            `Website analytics and server logs`,
            `*[CONFIRM — typically 14–26 months for analytics; 90 days for server logs]*`,
            `Security and measurement`,
          ],
          [`Records of data subject / data principal requests`, `**3 years** from the response`, `Demonstrating compliance`],
        ],
      },
      { type: "p", text: `After these periods we delete or irreversibly anonymise the data. Backups are deleted on their normal expiry cycle.` },
      {
        type: "p",
        text: `Note that deletion of your contact data does **not** remove the watermark from a package already delivered to you — that copy is in your possession, not ours — and does not affect your perpetual licence rights under Section 2.4.`,
      },
    ],
  },
  {
    number: "09",
    title: "How we protect your data",
    blocks: [
      { type: "p", text: `We apply technical and organisational measures appropriate to the risk, including:` },
      {
        type: "ul",
        items: [
          `access to the licence register and delivery systems limited to personnel who need it;`,
          `multi-factor authentication on the accounts holding customer and licence data;`,
          `encryption in transit (TLS) for the website, delivery links, and email;`,
          `private repositories and access controls for the source code itself;`,
          `confidentiality obligations binding on our personnel and contractors;`,
          `regular review of who has access, with prompt removal when access is no longer needed.`,
        ],
      },
      {
        type: "p",
        text: `No system is perfectly secure. If a personal data breach affects you, we will notify you and the relevant authority where the law requires — including notification to the **Data Protection Board of India** under the DPDP Act, and within **72 hours** to the relevant supervisory authority where GDPR applies.`,
      },
    ],
  },
  {
    number: "10",
    title: "Cookies",
    blocks: [
      { type: "p", text: `Our website uses:` },
      {
        type: "table",
        headers: ["Type", "Purpose", "Consent required"],
        rows: [
          [`Strictly necessary`, `Site security, load balancing, session handling`, `No`],
          [`Analytics *[CONFIRM if used]*`, `Understanding how the site is used`, `Yes, in the EEA and UK`],
          [`Marketing *[CONFIRM if used]*`, `Measuring campaign performance`, `Yes, in the EEA and UK`],
        ],
      },
      { type: "p", text: `You can control cookies through your browser settings. Blocking strictly necessary cookies may prevent parts of the site from working.` },
    ],
  },
  {
    number: "11",
    title: "Your rights",
    blocks: [
      { type: "p", text: `Your rights depend on where you are. We will not discriminate against you for exercising them.` },
      { type: "h3", text: `11.1 If you are in India (DPDP Act, 2023)` },
      { type: "p", text: `As a Data Principal, you have the right to:` },
      {
        type: "ul",
        items: [
          `**access** a summary of the personal data we process about you and the processing activities;`,
          `**correct, complete, update, or erase** your personal data;`,
          `**nominate** another individual to exercise your rights in the event of your death or incapacity;`,
          `**grievance redressal** — raise a grievance with our Grievance Officer (Section 12) before approaching the Data Protection Board of India;`,
          `**withdraw consent** at any time, where processing is based on consent. Withdrawal does not affect processing already carried out.`,
        ],
      },
      { type: "h3", text: `11.2 If you are in the EEA or UK (GDPR / UK GDPR)` },
      {
        type: "p",
        text: `You have the right to access, rectification, erasure, restriction of processing, data portability, and objection — including objection to processing based on legitimate interests, such as the watermarking described in Section 4 — and the right to withdraw consent where processing is consent-based.`,
      },
      { type: "h3", text: `11.3 If you are in California (CCPA / CPRA)` },
      {
        type: "p",
        text: `You have the right to know what personal information we collect and how we use it, to delete it, to correct it, and to opt out of sale or sharing. **We do not sell or share personal information as those terms are defined in the CCPA**, and we do not process sensitive personal information for purposes requiring a right to limit.`,
      },
      { type: "h3", text: `11.4 Limits on erasure` },
      { type: "p", text: `Some data cannot be erased on request:` },
      {
        type: "ul",
        items: [
          `**Licence, delivery, and watermark records**, which we retain to verify your perpetual licence, prove delivery under Section 14.1, and enforce our rights under Section 8.2. This is data necessary for the establishment, exercise, or defence of legal claims, and for compliance with a legal obligation.`,
          `**Financial and tax records**, which we must retain by law.`,
        ],
      },
      { type: "p", text: `Where we cannot fulfil a request in whole or in part, we will tell you why and what your options are.` },
      { type: "h3", text: `11.5 How to exercise a right` },
      {
        type: "p",
        text: `Write to us at the address in Section 12 with your Licence ID (if you have one) and enough detail for us to identify you. We may ask for reasonable verification — we will not ask for more documentation than we need.`,
      },
      {
        type: "table",
        headers: ["Where you are", "We will respond within"],
        rows: [
          [`India`, `30 days, and we acknowledge grievances promptly`],
          [`EEA / UK`, `30 days, extendable by 60 days for complex requests, with notice`],
          [`California`, `Acknowledgement within 10 business days; substantive response within 45 days, extendable by 45 days with notice`],
        ],
      },
      { type: "p", text: `Requests are free unless manifestly unfounded or excessive.` },
    ],
  },
  {
    number: "12",
    title: "Contact",
    blocks: [{ type: "p", text: `**Support:** [support@fidelabs.io](mailto:support@fidelabs.io)` }],
  },
  {
    number: "13",
    title: "Complaints",
    blocks: [
      { type: "p", text: `If you are not satisfied with our response:` },
      {
        type: "table",
        headers: ["Where you are", "Authority"],
        rows: [
          [`India`, `Data Protection Board of India`],
          [`EEA`, `Your local supervisory authority`],
          [`UK`, `Information Commissioner's Office (ICO)`],
          [`California`, `California Privacy Protection Agency, or the California Attorney General`],
        ],
      },
      { type: "p", text: `We would appreciate the chance to resolve the matter first.` },
    ],
  },
  {
    number: "14",
    title: "Changes to this Policy",
    blocks: [
      {
        type: "p",
        text: `We may update this Policy. The version and effective date at the head of the document identify the current version. Where a change is material — a new purpose, a new category of recipient, or a change in retention.`,
      },
      {
        type: "p",
        text: `Changes to this Policy do not amend the Licence. Where this Policy and the Licence conflict on a matter the Licence addresses, **the Licence governs** (Section 22, Order of precedence).`,
      },
    ],
  },
];
