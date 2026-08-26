import type { LegalSection } from "@/components/pages/legal/LegalBlocks";

export const termsSections: LegalSection[] = [
  {
    number: "01",
    title: "About these Terms",
    blocks: [
      {
        type: "p",
        text: `These Terms of Service ("**Terms**") govern your access to and use of the website at [FideCode.com](http://FideCode.com) and your purchase of a licence to the **Request a Quote & Hide Price** source code product (the "**Product**").`,
      },
      {
        type: "p",
        text: `The Site is operated by **FIDE LAB (OPC) PRIVATE LIMITED**, a company registered at 901, 302, DSR Tranquil, Ayyappa Society, Madhapur, Hyderabad – 500081, Telangana, India ("**FIDE Labs**", "**we**", "**us**", "**our**").`,
      },
      {
        type: "p",
        text: `By accessing the Site, placing an order, or completing a purchase, you agree to these Terms. If you do not agree, do not use the Site.`,
      },
    ],
  },
  {
    number: "02",
    title: "Scope — and what governs the software",
    blocks: [
      {
        type: "p",
        text: `These Terms govern the **Site and the purchase transaction**. They do not govern what you may do with the Product once it is delivered to you.`,
      },
      {
        type: "table",
        headers: ["Subject", "Governed by"],
        rows: [
          [`Browsing the Site, its content, and its availability`, `These Terms`],
          [`Placing an order, pricing, payment, and order acceptance`, `These Terms`],
          [`Delivery of the Product`, `These Terms and Section 14.1 of the Licence`],
          [
            `What you may and may not do with the source code — deployment scope, restrictions, modification, redistribution`,
            `**The Commercial License Agreement (the "Licence")**`,
          ],
          [`Updates, support, renewal`, `**The Licence**, Sections 10 and 11`],
          [`Refunds`, `**The Licence**, Section 14`],
          [`Personal data`, `**The Privacy Policy**`],
        ],
      },
      {
        type: "p",
        text: `**Order of precedence.** Where these Terms conflict with the Licence, **the Licence prevails**, consistent with Section 22 of the Licence. Nothing on the Site, in these Terms, or in any marketing material varies the Licence.`,
      },
      {
        type: "p",
        text: `The Licence is presented to you before purchase and is accepted at checkout. Read it before you buy. If you would like a copy in advance, write to us at the address in Section 18.`,
      },
    ],
  },
  {
    number: "03",
    title: "Eligibility",
    blocks: [
      { type: "p", text: `You may use the Site and purchase the Product only if:` },
      {
        type: "ul",
        items: [
          `you are at least 18 years old;`,
          `you are acquiring the Product wholly or mainly for purposes relating to your trade, business, craft, or profession, and **not as a consumer**, consistent with Section 22 of the Licence;`,
          `you have the legal capacity, and where applicable the corporate authority, to enter into a binding contract; and`,
          `you are not located in, and will not deploy the Product from, a country subject to comprehensive trade sanctions, and you are not named on any restricted-party list.`,
        ],
      },
      { type: "p", text: `The Product is sold on a business-to-business basis. It is not sold or marketed to consumers.` },
    ],
  },
  {
    number: "04",
    title: "The Site",
    blocks: [
      { type: "h3", text: `4.1 Permitted use` },
      { type: "p", text: `You may browse the Site, read the documentation we publish on it, and use it to place an order.` },
      { type: "h3", text: `4.2 Acceptable use` },
      { type: "p", text: `You may not:` },
      {
        type: "ul",
        items: [
          `attempt to gain unauthorised access to the Site, its servers, delivery links, or any account, repository, or system connected to it;`,
          `circumvent or attempt to circumvent any access control, download link expiry, rate limit, or licence verification mechanism;`,
          `scrape, crawl, or harvest the Site or its content by automated means, except by a well-behaved search engine crawler obeying our`,
          `introduce malware, or take any action that imposes an unreasonable load on our infrastructure;`,
          `resell, mirror, or republish the Site, its documentation, or its content;`,
          `use the Site to infringe any third party's rights, or in breach of any applicable law; or`,
          `misrepresent your identity, your company, or your authority when placing an order.`,
        ],
      },
      { type: "h3", text: `4.3 Availability` },
      {
        type: "p",
        text: `The Site is provided on an "as available" basis. We do not guarantee that it will be available uninterrupted or error-free, and we may modify, suspend, or discontinue any part of it at any time without notice.`,
      },
      {
        type: "p",
        text: `Availability of the Site is separate from your rights under the Licence. **Your perpetual right to run a version already delivered to you does not depend on the Site, on our continuing to operate it, or on our continuing to host any version** — see Section 2.4 of the Licence. You are responsible for retaining your own copy of every version delivered to you.`,
      },
      { type: "h3", text: `4.4 Suspension of Site access` },
      {
        type: "p",
        text: `We may suspend or block your access to the Site where we reasonably believe you have breached Section 4.2, or where Section 8.2 or Section 18 of the Licence applies. Suspension of Site access does not by itself terminate your licence, and termination of your licence is governed only by the Licence.`,
      },
    ],
  },
  {
    number: "05",
    title: "Orders, pricing, and payment",
    blocks: [
      { type: "h3", text: `5.1 Prices` },
      {
        type: "p",
        text: `Prices are displayed on the Site and are quoted in **USD** unless stated otherwise. The current price of the Commercial licence is **USD 599** as a one-time fee, with an optional annual renewal at **USD 149**, as set out in Sections 3 and 11.4 of the Licence.`,
      },
      {
        type: "ul",
        items: [
          `Prices are **exclusive of taxes, duties, and withholdings**, which are your responsibility other than taxes on our income.`,
          `We may change published prices at any time. **A price change does not affect a licence already purchased.**`,
          `Renewal fees are set as a percentage of the then-current list price and may change between renewal periods (Section 11.4 of the Licence).`,
        ],
      },
      { type: "h3", text: `5.2 Pricing errors` },
      {
        type: "p",
        text: `Publication of a price on the Site is an invitation to treat, not an offer. If a price is displayed incorrectly through obvious error, we may cancel the order and refund any amount paid in full, and we will tell you before doing so. We will not be obliged to supply the Product at an incorrectly displayed price.`,
      },
      { type: "h3", text: `5.3 Order acceptance` },
      {
        type: "p",
        text: `Your order is an offer to buy. **A contract is formed only when we accept your order**, which occurs when we grant you access to the download containing the Product, or when we confirm acceptance in writing, whichever is earlier.`,
      },
      { type: "p", text: `We may decline any order, at our discretion, including where:` },
      {
        type: "ul",
        items: [
          `we are unable to verify your identity or payment;`,
          `supply would breach applicable export controls or sanctions;`,
          `Section 8.2 of the Licence applies to you, or to a person or organisation associated with you; or`,
          `we have previously terminated a licence held by you for breach.`,
        ],
      },
      { type: "p", text: `Where we decline an order, we refund any amount paid in full and no contract is formed.` },
      { type: "h3", text: `5.4 Payment` },
      {
        type: "p",
        text: `Payment is processed by our payment provider. Where that provider acts as merchant of record, it is the seller of record for tax purposes and its own terms apply to payment processing and, as set out in Section 14.3 of the Licence, may also apply to refunds.`,
      },
      {
        type: "p",
        text: `**Access to the Product is granted after payment clears in full** (Section 3 of the Licence). We never receive or store your card details — see the Privacy Policy.`,
      },
      { type: "h3", text: `5.5 What you are buying` },
      {
        type: "p",
        text: `You are buying **a licence to one Product, at the Commercial tier**, as defined in Section 2.1 and Schedule B of the Licence. In summary, and subject always to the Licence:`,
      },
      {
        type: "ul",
        items: [
          `one (1) Production Deployment, on one Store, for one business;`,
          `up to three (3) Non-Production Deployments;`,
          `a perpetual licence to run every version delivered to you;`,
          `a 12-month Update & Support Term, renewable and optional.`,
        ],
      },
      {
        type: "p",
        text: `**The Commercial tier is the only tier currently offered.** Any tier described on the Site as "Coming Soon" is not available for purchase, confers no rights, and is not part of what you are buying. Where a future tier is released, Section 2.6 of the Licence governs upgrades.`,
      },
    ],
  },
  {
    number: "06",
    title: "Delivery",
    blocks: [
      {
        type: "p",
        text: `**Delivery is complete, and the Product is deemed fully delivered and accepted, at the moment we first grant you access to the ZIP file containing the Product or otherwise first make it available to you for download**, as set out in Section 14.1 of the Licence.`,
      },
      {
        type: "ul",
        items: [
          `Delivery is electronic. There is no physical shipment, installation, or activation.`,
          `Delivery does not depend on whether you subsequently download, deploy, or use the Product.`,
          `We send the download to the email address given at checkout. **You are responsible for the accuracy of that address** and for ensuring you can receive our email. Tell us promptly if you do not receive it.`,
          `Each package is watermarked and traceable to you under Section 8.1 of the Licence. The Privacy Policy explains what is embedded and why.`,
          `You are issued a Licence ID. Quote it in all correspondence.`,
        ],
      },
      {
        type: "p",
        text: `Retain your own copy of every version delivered to you. We are not obliged to restore or re-issue access after your Update & Support Term expires (Section 2.4 of the Licence).`,
      },
    ],
  },
  {
    number: "07",
    title: "Refunds",
    blocks: [
      {
        type: "p",
        text: `**The Product is non-refundable once access has been granted**, except in the limited cases set out in **Section 14.3 of the Licence** — duplicate payment, failure to grant link access, or failure of the core documented functions that we cannot resolve within 14 days of you reporting it — or where a refund is required by applicable law.`,
      },
      {
        type: "p",
        text: `Requests must be made within **14 days of Delivery**. Change of mind, insufficient technical knowledge, incorrect purchase choice, absence of a required Shopify Partner account or hosting environment, and unmet expectations that are not documented functions are **not** eligible.`,
      },
      { type: "p", text: `Section 14 of the Licence governs refunds in full. This Section is a summary and does not vary it.` },
    ],
  },
  {
    number: "08",
    title: "Support",
    blocks: [
      {
        type: "p",
        text: `Support is included for the duration of your Update & Support Term and is governed by **Section 10 of the Licence**. It is provided by email at [support@fidelabs.io](mailto:support@fidelabs.io) during business hours in GMT+5:30, with a **target** first response of 2 business days.`,
      },
      {
        type: "p",
        text: `Target response times are goals, not contractual commitments, and do not constitute a service level agreement.`,
      },
    ],
  },
  {
    number: "09",
    title: "Site content and intellectual property",
    blocks: [
      {
        type: "p",
        text: `All content on the Site — text, documentation, screenshots, graphics, layout, design system, and code — is owned by FIDE Labs or its licensors and is protected by copyright and other intellectual property laws.`,
      },
      {
        type: "p",
        text: `You may view and print pages of the Site for your own internal business use in evaluating or operating the Product. You may not otherwise copy, republish, distribute, or create derivative works from Site content without our written permission.`,
      },
      {
        type: "p",
        text: `FIDE Labs names and logos are our trademarks. Nothing on the Site grants you any right to use them, except as expressly permitted by Section 5 of the Licence in respect of the Product you have licensed.`,
      },
      {
        type: "p",
        text: `**Shopify**, **Shopify Polaris**, **App Bridge**, and related marks are trademarks of Shopify Inc. We are not affiliated with, endorsed by, or sponsored by Shopify. Nothing on the Site or in the Licence grants you any right in Shopify's platform, APIs, or trademarks, and your use of the Shopify platform is governed by your own agreements with Shopify.`,
      },
    ],
  },
  {
    number: "10",
    title: "Information on the Site",
    blocks: [
      { type: "p", text: `We take care with what we publish, but:` },
      {
        type: "ul",
        items: [
          `Documentation, feature descriptions, screenshots, and roadmap statements on the Site are provided for information and **do not form part of the contract between us**. The Licence, together with the invoice, Schedule A, Schedule B, and any Order Form, is the entire agreement on the subject of the Product, and supersedes all prior discussions, proposals, marketing statements, and representations (Section 22 of the Licence).`,
          `We may change, add to, or withdraw features and documentation at any time.`,
          `Statements about future releases are statements of intent, not commitments.`,
        ],
      },
      {
        type: "p",
        text: `**Where any statement on the Site conflicts with the Licence, the Licence governs.** If something on the Site matters to your purchase decision, ask us in writing before you buy and we will confirm the position.`,
      },
    ],
  },
  {
    number: "11",
    title: "Third-party links and components",
    blocks: [
      {
        type: "p",
        text: `The Site may link to third-party websites and services. We do not control them, do not endorse them, and are not responsible for their content, terms, or privacy practices.`,
      },
      {
        type: "p",
        text: `The Product incorporates third-party open-source components that we do not own, licensed to you directly by their rights holders under their own terms. Section 7.2 of the Licence and the \`THIRD-PARTY-NOTICES\` file shipped with your package govern those components.`,
      },
    ],
  },
  {
    number: "12",
    title: "Disclaimer",
    blocks: [
      {
        type: "p",
        text: `THE SITE AND ITS CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE AVAILABLE WITHOUT INTERRUPTION OR ERROR, OR THAT IT OR ITS CONTENT IS ACCURATE, COMPLETE, OR CURRENT.`,
      },
      {
        type: "p",
        text: `The Product itself is provided subject to the disclaimer in **Section 15 of the Licence**, which applies in place of this Section in respect of the Product.`,
      },
      {
        type: "p",
        text: `Nothing in this Section excludes or limits any warranty, liability, or right that cannot be excluded or limited under applicable law.`,
      },
    ],
  },
  {
    number: "13",
    title: "Limitation of liability",
    blocks: [
      {
        type: "p",
        text: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY IS LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES, OR FOR LOST PROFITS, LOST REVENUE, LOST DATA, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE SITE.`,
      },
      {
        type: "p",
        text: `OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS SHALL NOT EXCEED THE GREATER OF (A) THE TOTAL AMOUNT YOU HAVE PAID US IN THE TWELVE MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) **USD 100**.`,
      },
      {
        type: "p",
        text: `Where you have purchased a licence, our liability in respect of the Product is governed by **Section 16 of the Licence**, and any amount payable under these Terms counts towards, and does not increase, the cap in that Section.`,
      },
      {
        type: "p",
        text: `These limits do not apply to your payment obligations, to your indemnity under Section 14, or to any liability that cannot be limited by law, including fraud, wilful misconduct, and death or personal injury caused by negligence.`,
      },
      {
        type: "p",
        text: `Nothing in this Section excludes or limits any liability that cannot be excluded or limited under applicable law. Where any limitation is held unenforceable, it applies to the maximum extent permitted.`,
      },
    ],
  },
  {
    number: "14",
    title: "Your indemnity",
    blocks: [
      {
        type: "p",
        text: `You will defend and indemnify us against any third-party claim arising from your use of the Site in breach of these Terms or applicable law, or from your misrepresentation of your identity or authority when placing an order.`,
      },
      { type: "p", text: `Your indemnity in respect of the Product is governed by Section 17.2 of the Licence.` },
    ],
  },
  {
    number: "15",
    title: "Privacy",
    blocks: [
      { type: "p", text: `Our handling of personal data is described in the **Privacy Policy**, which forms part of these Terms.` },
      {
        type: "p",
        text: `That policy also explains the watermarking and traceability metadata embedded in each delivered package under Section 8.1 of the Licence, and confirms that we are **not** a processor or sub-processor for personal data handled by your deployment (Section 12 of the Licence).`,
      },
    ],
  },
  {
    number: "16",
    title: "Changes to these Terms",
    blocks: [
      {
        type: "p",
        text: `We may update these Terms. The version and effective date at the head of this document identify the current version, and the updated version takes effect when posted on the Site.`,
      },
      { type: "p", text: `Changes to these Terms:` },
      {
        type: "ul",
        items: [
          `apply to your use of the Site from the effective date;`,
          `**do not vary the Licence** governing a purchase already made. The Licence version delivered with your purchase, identified by its Agreement Version, governs that purchase (Section 22 of the Licence); and`,
          `where material and where you hold a current licence, will be notified to you by email at least **30 days** before they take effect.`,
        ],
      },
      { type: "p", text: `Continued use of the Site after the effective date is acceptance of the updated Terms.` },
    ],
  },
  {
    number: "17",
    title: "Governing law and disputes",
    blocks: [
      {
        type: "p",
        text: `These Terms are governed by the laws of **India**, without regard to conflict-of-laws rules. The United Nations Convention on Contracts for the International Sale of Goods does not apply.`,
      },
      {
        type: "p",
        text: `The courts of **Hyderabad, Telangana, India** have exclusive jurisdiction over any dispute arising out of or relating to these Terms, and both parties submit to that jurisdiction.`,
      },
      {
        type: "p",
        text: `Before filing a claim, the parties will attempt in good faith to resolve the dispute through discussion between senior representatives for 30 days. This does not prevent either party from seeking urgent injunctive relief at any time, in any court of competent jurisdiction, to protect intellectual property or confidential information.`,
      },
    ],
  },
  {
    number: "18",
    title: "General",
    blocks: [
      {
        type: "p",
        text: `**Entire agreement.** These Terms, together with the Privacy Policy and — where you have purchased — the Licence, the invoice, and any Order Form, are the entire agreement between us in respect of the Site and your purchase, and supersede all prior discussions and representations.`,
      },
      {
        type: "p",
        text: `**Severability.** If any provision is held unenforceable, it will be limited or severed to the minimum extent necessary and the rest remains in force.`,
      },
      { type: "p", text: `**Waiver.** A failure to enforce any provision is not a waiver of it.` },
      {
        type: "p",
        text: `**Assignment.** You may not assign these Terms without our written consent. We may assign them to a successor in connection with a merger, acquisition, reorganisation, or sale of all or substantially all of our assets, on notice to you. Assignment of the Licence is governed by Section 20 of the Licence.`,
      },
      {
        type: "p",
        text: `**Force majeure.** Neither party is liable for delay or failure caused by events beyond its reasonable control, excluding payment obligations.`,
      },
      {
        type: "p",
        text: `**Independent contractors.** Nothing here creates a partnership, joint venture, employment, or agency relationship.`,
      },
      {
        type: "p",
        text: `**Notices.** Notices to you go to the email address you gave at checkout, or the address in the Licensee Information block of your Licence. Notices to us go to [Support@fidelabs.io](mailto:Support@fidelabs.io) and, where formal service is required, to the registered address in Section 1. Email notice is deemed received on the next business day.`,
      },
      {
        type: "p",
        text: `**Survival.** Sections 2, 4.2, 9, 10, 12, 13, 14, 17, and 18 survive termination of these Terms or of your access to the Site.`,
      },
    ],
  },
  {
    number: "19",
    title: "Contact",
    blocks: [
      {
        type: "table",
        headers: ["Purpose", "Address"],
        rows: [[`Sales, licensing, purchase verification, renewals, support`, `[support@fidelabs.io](mailto:support@fidelabs.io)`]],
      },
      {
        type: "p",
        text: `Include your Licence ID, Licence Tier, delivered version, and purchase email in any correspondence about an existing licence.`,
      },
    ],
  },
];
