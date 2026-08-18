export type FaqItem = { id: number; q: string; a: string };
export type FaqCategory = { slug: string; title: string; items: FaqItem[] };

export const faqCategories: FaqCategory[] = [
  {
    slug: "product-overview",
    title: "Product Overview",
    items: [
      {
        id: 1,
        q: "What is the FIDE Source Code Product?",
        a: "The FIDE Source Code Product is a commercial, production-ready Shopify application developed by FIDE Labs. It includes the complete application source code, technical documentation, installation guides, configuration guides, API references, webhook documentation, and licensing documentation required to deploy, customize, and operate the application independently.\nUnlike a hosted SaaS solution, this product gives you a licensed copy of the complete source code that you deploy and manage within your own infrastructure, subject to the terms of your licence.",
      },
      {
        id: 2,
        q: "Who is this product designed for?",
        a: "The product is intended for businesses and technical teams that want a production-ready Shopify application for **their own store**, without investing months building one from scratch.\nTypical customers include:\n- E-commerce businesses running a Shopify store\n- Startup founders launching a quote-based storefront\n- Product and development teams building on Shopify\n- Technical consultants deploying for a single business",
      },
      {
        id: 3,
        q: "What do I receive when I purchase the product?",
        a: "- Complete application source code\n- Private repository access\n- Installation & Deployment Guide\n- Shopify Partner Setup Guide\n- Configuration Guide\n- API Documentation\n- Webhook Documentation\n- README and FAQ documentation\n- License documentation\n- `THIRD-PARTY-NOTICES` file\n- Product updates during the Update & Support Term\n- Standard technical support during the Update & Support Term",
      },
      {
        id: 4,
        q: "Is this a SaaS subscription?",
        a: "**No.**\nYou receive a licensed copy of the application source code that you host and manage yourself. Once purchased, you have a perpetual licence to use the software within the scope of your licence. Updates and technical support are provided separately through the Update & Support Term and optional renewals.",
      },
      {
        id: 5,
        q: "Do I receive the complete source code?",
        a: "**Yes.** The complete application source code, delivered through a private repository, along with the documentation needed to install, configure, customize, and deploy it.\nThe package includes both the Original Code developed by FIDE Labs and the Third-Party Components required to run it, which are governed by their own licences.",
      },
      {
        id: 6,
        q: "Is the application production-ready?",
        a: "**Yes.** The application is designed for production deployment after you complete the recommended installation, configuration, and testing procedures.\nHosting environments and Shopify configurations differ. **You remain responsible for validating the software before deploying it to a live environment.**",
      },
      {
        id: 7,
        q: "Can I customize the application to fit my business requirements?",
        a: "**Yes.** You may modify business logic, extend functionality, refactor code, integrate third-party services, and adapt the application to your operational requirements, provided your use stays within the scope of your licence.",
      },
      {
        id: 8,
        q: "Which technologies are used to build the application?",
        a: "Principal technologies:\n- React\n- React Router\n- Prisma\n- Shopify Polaris\n- Shopify App Bridge\nThe complete list of production dependencies, including transitive dependencies and their licence identifiers, is in the `THIRD-PARTY-NOTICES` file supplied in the repository root.",
      },
      {
        id: 9,
        q: "Does purchasing this product transfer ownership of the software?",
        a: "**No.**\nYou receive a commercial licence to use the software. FIDE Labs retains ownership of the Original Code, software architecture, documentation, design system, and business logic. You receive only the rights expressly granted in the License Agreement.",
      },
      {
        id: 10,
        q: "Why choose this instead of building from scratch?",
        a: "Building a production-quality Shopify application requires substantial investment in planning, development, testing, documentation, deployment, and maintenance.\nThis product provides a mature foundation — production-ready source, full documentation, licensing, deployment guidance, API and webhook references, and a structured update model — so you can reach market faster while keeping full control over your deployment and customization.",
      },
    ],
  },
  {
    slug: "purchase-licensing",
    title: "Purchase & Licensing",
    items: [
      {
        id: 11,
        q: "What licence do I receive?",
        a: "A **perpetual, non-exclusive, non-transferable, non-sublicensable, worldwide Commercial License** for the product named in your License Details block.\nIt grants the right to use, modify, and deploy the software within the scope set out in Schedule B. Ownership remains with FIDE Labs.",
      },
      {
        id: 12,
        q: 'What does "perpetual" mean?',
        a: "Your right to use the software **does not expire**. Once purchased, you may continue running every version delivered to you during your active Update & Support Term, permanently, without further licence fees.\nA perpetual licence **does not mean lifetime updates or lifetime support.** Those are governed separately by the Update & Support Term. This distinction is the single most important thing to understand before buying.",
      },
      {
        id: 13,
        q: "Is this a one-time purchase?",
        a: "**Yes.** One-time payment. No mandatory monthly or yearly fees are required to keep using the software you've licensed.\nOptional annual renewals cover continued updates and support only.",
      },
      {
        id: 14,
        q: "What is included in the Commercial License?",
        a: "- One perpetual Commercial License\n- One Production Deployment\n- Up to three Non-Production Deployments\n- Complete source code and documentation package\n- Private repository access\n- Twelve months of product updates\n- Twelve months of standard technical support\nIntended for one business operating one Shopify store.",
      },
      {
        id: 15,
        q: "How much does it cost?",
        a: "**USD 599**, one-time.",
      },
      {
        id: 16,
        q: "What is the Update & Support Term?",
        a: "A **12-month period** starting on the License Issue Date. During it you receive eligible software updates, Shopify compatibility updates, security patches, bug fixes, and standard technical support at no additional cost.",
      },
      {
        id: 17,
        q: "What happens after the 12-month Term expires?",
        a: "- Your perpetual licence **remains valid**.\n- You may continue running every version already delivered to you.\n- You stop receiving new releases, updates, compatibility updates, security patches, and technical support.\n- Repository access may be set to read-only or revoked.\nYour ability to use the software is not affected by the support period ending.",
      },
      {
        id: 18,
        q: "Should I keep my own copy of the code?",
        a: "**Yes — please do this.** Clone the repository to storage you control as soon as you receive access.\nWe are not obliged to host, restore, or archive repository access after your Update & Support Term expires, and your perpetual rights don't depend on us continuing to host anything. If you rely solely on our repository and your term lapses, you may lose convenient access to versions you're entitled to run.",
      },
      {
        id: 19,
        q: "Is renewal mandatory?",
        a: "**No.** Renewal is entirely optional and is not charged automatically. Not renewing is **not a breach** of the agreement and gives rise to no termination right. You simply stop receiving updates and support.",
      },
      {
        id: 20,
        q: "How much is the annual renewal?",
        a: "**USD 149 per year**, currently. Renewal pricing is set as a percentage of the then-current list price and may change between renewal periods.",
      },
      {
        id: 21,
        q: "What do I get when I renew?",
        a: "Renewal restores your entitlement to product updates, security patches, Shopify compatibility updates, bug fixes, new feature releases issued during the renewal period, and standard technical support.\nRenewal extends updates and support only. It does not change your deployment rights.",
      },
      {
        id: 22,
        q: "What if I renew after my term has already expired?",
        a: "A renewal purchased before expiry runs from the expiry date. A renewal purchased after a lapse runs from the purchase date, and we may charge a **reinstatement fee of USD 99** in addition to the renewal fee.\nIf your term has been lapsed for more than **3 months**, we may require you to purchase a current licence rather than renew.",
      },
      {
        id: 23,
        q: "Can I upgrade my licence later?",
        a: "We may release additional licence tiers in future. If we do, existing licensees may upgrade by paying the difference between the fee already paid and the then-current price of the new tier.\nUpgrading changes your deployment rights from the upgrade date. It does **not** restart or extend your existing Update & Support Term unless we agree otherwise in writing.",
      },
      {
        id: 24,
        q: "Can I downgrade?",
        a: "**No.** Downgrades are not available, and fees paid are not refundable on downgrade.",
      },
      {
        id: 25,
        q: "Does one licence cover all FIDE Labs products?",
        a: "**No.** Each product is licensed separately. Your licence grants no rights in any other FIDE Labs product, existing or future.",
      },
      {
        id: 26,
        q: "What is a License ID and why does it matter?",
        a: "Every purchase is assigned a unique **License ID** in the format **FID-YYYY-NNNN**. Use it for purchase verification, technical support, product updates, renewal requests, and version tracking. Keep it safe — it's the primary reference for your purchase.",
      },
      {
        id: 27,
        q: "Can I transfer or sell my licence?",
        a: "**No**, not by default. The licence is non-transferable and non-sublicensable.\nIf your entire business, or substantially all of its assets, is acquired, a transfer may be permitted with our prior written consent — which we won't unreasonably withhold — provided the new owner agrees in writing to be bound by the same terms and the licensed store record is updated. Any attempted transfer outside this is void.",
      },
      {
        id: 28,
        q: "Is this licence for businesses or consumers?",
        a: "**Businesses.** By purchasing, you confirm you are acquiring the software wholly or mainly for purposes relating to your trade, business, craft, or profession, and not as a consumer.",
      },
    ],
  },
  {
    slug: "deployment-license-usage",
    title: "Deployment & License Usage Rights",
    items: [
      {
        id: 29,
        q: "How many Shopify stores can I use it on?",
        a: "**One (1) Production Deployment on one Shopify store, operated by one business.**\nTo deploy on an additional store you own, you need an additional Commercial License.",
      },
      {
        id: 30,
        q: 'What counts as a "Store"?',
        a: "A single Shopify storefront identified by its unique **.myshopify.com** domain.\nMultiple custom domains pointing at the same Shopify store do **not** create additional licence usage. Separate Shopify stores each need their own licence.",
      },
      {
        id: 31,
        q: "What is a Production Deployment?",
        a: "Any installation that serves live customer traffic or processes real customer orders. It consumes your licensed deployment capacity.",
      },
      {
        id: 32,
        q: "What is a Non-Production Deployment?",
        a: "An installation used exclusively for local development, testing, quality assurance, staging, or internal demonstration — one that does not serve live customer traffic or process real orders. These do **not** consume your Production Deployment capacity.",
      },
      {
        id: 33,
        q: "How many Non-Production Deployments do I get?",
        a: "**Up to three (3).** A typical setup:\n- One local development environment\n- One Shopify development store\n- One staging environment",
      },
      {
        id: 34,
        q: "When does a test environment become a Production Deployment?",
        a: "The moment it begins serving live customer traffic or processing real orders. At that point it consumes your one Production Deployment.",
      },
      {
        id: 35,
        q: "Can I deploy on multiple stores that I own?",
        a: "**No.** One Commercial License covers one production deployment on one store. Each additional store you operate needs its own licence.",
      },
      {
        id: 36,
        q: "Can I use one licence across multiple businesses?",
        a: "**No.** The licence is granted to the single legal entity named in the Licensee Information block. It can't be shared between companies or organizations.",
      },
      {
        id: 37,
        q: "What about stores owned by my parent company, subsidiaries, or affiliates?",
        a: '**Each needs its own licence.** "One business" means the single legal entity named on your licence. It does not extend to affiliates — including entities you control, that control you, or under common control with you.',
      },
      {
        id: 38,
        q: "Can I deploy the software for my clients?",
        a: "**No.** The Commercial License is for your own business only. Deploying on a store you don't own, or operating the software for the benefit of a third party's store, is a breach.\nIf client deployment is what you need, email [support@fidelabs.io](mailto:support@fidelabs.io) before purchasing to discuss whether a suitable licence is available.",
      },
      {
        id: 39,
        q: "Can I run it as a hosted SaaS platform for multiple merchants?",
        a: "**No.** Operating the software as a Multi-Tenant Deployment — a single installation serving two or more stores not all owned by you — is not permitted, and is grounds for immediate termination without a cure period.",
      },
      {
        id: 40,
        q: "Can I share the source code with my employees or contractors?",
        a: "**Yes**, where they need it to work on your deployment. Conditions:\n- Access limited to people with a genuine need to know\n- Each bound by confidentiality obligations at least as protective as the agreement's\n- Access promptly removed when they no longer need it\nYou remain responsible for their compliance.",
      },
      {
        id: 41,
        q: "Can I give the source code to the owner of my licensed store?",
        a: "**Yes**, provided they agree in writing to be bound by the License Agreement, and you can give us a copy of that agreement if we ask.\nThis applies only to the store licensed under your agreement and creates no additional deployment rights.",
      },
      {
        id: 42,
        q: "What happens if I deploy beyond my licensed capacity?",
        a: "It's a breach. In most cases you'll receive written notice and **30 days to cure** — by purchasing additional capacity or removing the excess deployment.",
      },
      {
        id: 43,
        q: "Can FIDE Labs verify my deployment usage?",
        a: "**Yes, within defined limits.** On not less than **15 business days' written notice**, and no more than **twice in any 12-month period**, we may ask for a written statement listing each store domain where the software is deployed, certified as accurate by an authorised representative.\nIf we have reasonable grounds to suspect you've exceeded capacity, we may request supporting evidence **limited to Shopify store records** for the relevant stores.\n**We will not request access to your servers, source repositories, or general business records.**",
      },
      {
        id: 44,
        q: "What am I responsible for in my deployment?",
        a: "You operate the deployment, so you're responsible for:\n- Testing before going live\n- Hosting, database, backups, monitoring, and security\n- Maintaining your own Shopify Partner account and complying with Shopify's terms\n- **Implementing and keeping operational Shopify's mandatory compliance webhooks**, including the customer and shop data request and redaction webhooks\n- Keeping an accurate record of your Production Deployment",
      },
      {
        id: 45,
        q: "Who is responsible for data protection?",
        a: "**You are.** You operate the deployment, so you determine your role under applicable data protection law, publish your own privacy notice, and meet your obligations to data subjects.",
      },
      {
        id: 46,
        q: "Do we need a Data Processing Agreement?",
        a: "**No.** We don't host your deployment and don't access or process personal data of merchants or their end customers in connection with it. We are not your processor or sub-processor for that data, and no DPA is required.\nThe only personal data we handle in connection with your licence is your own contact and purchase information, described in our Privacy Policy and in §8 of the agreement.",
      },
    ],
  },
  {
    slug: "customization-white-label",
    title: "Customization, White Label & Development",
    items: [
      {
        id: 47,
        q: "Can I modify the source code?",
        a: "**Yes.** Modify, extend, refactor, study, and customize the Original Code to meet your requirements — change business logic, improve workflows, optimize performance, add functionality — within the scope of your licence.",
      },
      {
        id: 48,
        q: "Can I completely rebrand the application?",
        a: "**Yes.** Fully rebrand it to match your own business identity:\n- Application name\n- Brand colours and typography\n- UI text and labels\n- Email templates\n- Icons and assets",
      },
      {
        id: 49,
        q: "Can I rename the application?",
        a: "**Yes.** Renaming does not transfer ownership of the Original Code or any intellectual property.",
      },
      {
        id: 50,
        q: "Can I add new features?",
        a: "**Yes.** Additional quote workflows, admin features, integrations, reporting dashboards, automation, custom business logic — extending the Original Code is expressly permitted.",
      },
      {
        id: 51,
        q: "Can I remove features I don't need?",
        a: "**Yes.** Modifications remain subject to your licence terms and should continue to comply with applicable Shopify requirements.",
      },
      {
        id: 52,
        q: "Can I integrate third-party services and APIs?",
        a: "**Yes** — payment gateways, CRM, ERP, analytics, email providers, AI services, internal business APIs.",
      },
      {
        id: 53,
        q: "Who owns the custom code I develop?",
        a: "**You own your modifications and any original code you write.**\nFIDE Labs continues to own the Original Code, architecture, documentation, and associated IP. Owning your modifications does not give you the right to distribute, sell, or license them outside the scope of your licence.",
      },
      {
        id: 54,
        q: "Can I use my modifications outside my licence scope?",
        a: "**No.** Your modifications depend on the Original Code underneath them. They may only be used within the deployment rights your licence grants.",
      },
      {
        id: 55,
        q: "Can I hire developers or contractors to customize it?",
        a: "**Yes.** Anyone given access must have a legitimate need and be bound by confidentiality obligations at least as protective as the agreement's. You remain responsible for their compliance.",
      },
      {
        id: 56,
        q: "Can I create multiple branded versions?",
        a: "**Yes, within your deployment rights.** You may build branded variations for development, testing, or your licensed deployment.\nBranding variations do **not** increase your Production Deployment count. Under the Commercial License you may operate one Production Deployment regardless of how many branded variants exist.",
      },
      {
        id: 57,
        q: "Can I contribute improvements back to FIDE Labs?",
        a: "**Yes, and we'd welcome it** — feature requests, bug reports, suggestions, code contributions, pull requests, documentation improvements.\nIf you voluntarily send us a contribution, you grant us a perpetual, irrevocable, worldwide, royalty-free, sublicensable licence to use, modify, and incorporate it into the Software and other FIDE Labs products, with no obligation of payment, attribution, or confidentiality. You confirm you hold the rights to grant that.\n**You are never required to contribute anything**, and nothing obliges you to disclose your modifications to us.",
      },
      {
        id: 58,
        q: "Can I remove FIDE Labs copyright notices?",
        a: "**No.** You must not remove, alter, or obscure copyright notices, licence headers, the `THIRD-PARTY-NOTICES` file, or embedded traceability metadata.",
      },
      {
        id: 59,
        q: "Can I remove watermarking or licence metadata?",
        a: "**No.** You may not remove, alter, disable, or circumvent watermarking, License IDs, licence metadata, access controls, or other protective measures.",
      },
      {
        id: 60,
        q: "Does rebranding make me the owner?",
        a: "**No.** Rebranding changes appearance and identity only. Ownership of the Original Code, architecture, documentation, and IP remains with FIDE Labs.",
      },
    ],
  },
  {
    slug: "restrictions-ip-compliance",
    title: "Restrictions, Intellectual Property & License Compliance",
    items: [
      {
        id: 61,
        q: "Can I redistribute the source code?",
        a: "**No.** The Original Code — or any portion of it, or any modification derived from it — may not be redistributed, shared, resold, or published, except as Section 5 expressly permits (employees, contractors, and your licensed store owner).\nUnauthorized redistribution is a material breach and grounds for immediate termination without a cure period.",
      },
      {
        id: 62,
        q: "Can I upload the source code to a public repository?",
        a: "**No.** Never to public GitHub, GitLab, Bitbucket, gists, public package registries, public forums, or file-sharing services.",
      },
      {
        id: 63,
        q: "Can I use a private repository?",
        a: "**Yes** — and you should. Store the Original Code in a private repository with access limited to authorised employees and contractors bound by confidentiality obligations. This is a minimum requirement, not just a recommendation.",
      },
      {
        id: 64,
        q: "Can I sell the source code?",
        a: "**No.** You may not sell, sublicense, lease, rent, transfer, or commercially distribute the Original Code or anything derived from it. Purchase gives you usage rights, not redistribution rights.",
      },
      {
        id: 65,
        q: "Can I resell my modified version?",
        a: "**No.** However extensively you've customized it, you may not sell, redistribute, license, or publish the modified software as a commercial product.",
      },
      {
        id: 66,
        q: "Can I publish the application on the Shopify App Store?",
        a: "**No.** Publishing, listing, submitting, or distributing the Software — or any rebranded or modified version of it — on the Shopify App Store is not permitted under this licence, and is grounds for immediate termination without a cure period.\nThis is the most common question we get, so to be completely clear: **this licence does not let you launch your own quote app on the Shopify App Store.**",
      },
      {
        id: 67,
        q: "What about other marketplaces?",
        a: "Same answer. Prohibited across theme marketplaces, template marketplaces, code marketplaces, plugin directories, and any other public software marketplace — original, modified, or rebranded.",
      },
      {
        id: 68,
        q: "Can I claim ownership of the Original Code?",
        a: "**No.** Ownership of the Original Code, architecture, documentation, design system, and business logic always remains with FIDE Labs.",
      },
      {
        id: 69,
        q: 'What is a "Competing Product"?',
        a: "A product or service meeting **all three** of these:\n1. It incorporates, or is derived from, the Original Code; and\n2. Its primary function is request-a-quote, hide-price, or equivalent quote-request functionality for e-commerce storefronts; and\n3. It is offered, marketed, or made available to third parties as a product, app, template, or source-code package — whether for a fee or free.\nAll three must be true.",
      },
      {
        id: 70,
        q: "What is *not* a Competing Product?",
        a: "Explicitly carved out:\n- **Operating your own licensed store.**\n- **Building an unrelated product that reuses general programming knowledge, patterns, or techniques you gained from reading the Original Code.**\nReading our code does not restrict your career or your ability to work on other software. The restriction attaches to the code, not to you.",
      },
      {
        id: 71,
        q: "So can I build a competing quote app?",
        a: "Not one built on, or derived from, our Original Code, and not by using knowledge of our architecture, business logic, or design obtained through your access to it. That includes assisting a third party in building one.\nWhat you can do is covered in Q70.",
      },
      {
        id: 72,
        q: "Can I remove the `THIRD-PARTY-NOTICES` file?",
        a: "**No.** It identifies the third-party components in the product and their licences. You must retain it, and all embedded licence headers, in any deployment.",
      },
      {
        id: 73,
        q: "Who licenses the third-party components to me?",
        a: "Their respective rights holders do — directly, under their own terms, not under our agreement. We don't own them and give no warranty in respect of them.\nWhere a component's licence conflicts with our agreement in respect of that component, the component's own licence governs.",
      },
      {
        id: 74,
        q: "What if a component has a copyleft licence?",
        a: "If the `THIRD-PARTY-NOTICES` file identifies any component under GPL, AGPL, SSPL, or similar copyleft terms, you agree to comply with those terms for that component, including any source-availability obligation they impose on your deployment.\nOur IP indemnity does not cover claims arising from your failure to comply with a third-party component's licence terms.",
      },
      {
        id: 75,
        q: "Why does my copy contain embedded purchaser information?",
        a: "Each licensed copy is watermarked with traceability data — your name and email, License ID, purchase date, delivered version, and invoice reference — placed in documentation and metadata files.\nWe embed and process this on the basis of our legitimate interest in protecting our intellectual property and detecting unauthorised distribution. It is used for one purpose only: identifying the original licensee if an unauthorised copy is found. It is not used for marketing and is not shared with third parties except to enforce our rights or comply with law. Details are in our Privacy Policy.",
      },
      {
        id: 76,
        q: "What happens if my copy is leaked or shared?",
        a: "If code traced to your package is found shared, published, or redistributed in breach of the agreement, we may take any or all of the following:\n- **Terminate your licence immediately**, without a cure period\n- **Decline to sell you any future FIDE Labs product, licence, renewal, or upgrade**, and close associated accounts or repository access\n- **Withhold any refund** otherwise available\n- **Issue infringement notices** to hosting providers, repositories, package registries, marketplaces, and search engines\n- **Pursue legal remedies**, including injunctive relief, damages, an account of profits, and recovery of enforcement costs\nWhere the watermark identifies your package as the source, that is treated as evidence the disclosure originated with you, unless you can show it happened despite your compliance with the confidentiality and restriction terms.\n**Practically:** private repo, access limited to people who need it, access removed when they leave. Doing those three things is what protects you here.",
      },
      {
        id: 77,
        q: "What are my confidentiality obligations?",
        a: "The Original Code is our confidential information. You must apply reasonable technical and organisational measures to protect it — at minimum: private repositories with need-to-know access, confidentiality obligations on everyone granted access, and prompt removal of access when someone no longer needs it.\nThis obligation survives termination and continues for as long as the Original Code remains non-public. Where the code becomes public through your breach or negligence, the obligation continues indefinitely.",
      },
      {
        id: 78,
        q: "What happens if I breach the agreement?",
        a: "Most breaches: written notice describing the breach, and **30 days to cure**. Cure it and no further action follows.\n**Immediate termination without a cure period** applies to: redistributing, publishing, reselling, sharing, or sublicensing the source; uploading it to a public repository; listing it on a marketplace; running it multi-tenant or on a client store; building a competing product; or failing to pay the licence fee.",
      },
      {
        id: 79,
        q: "Can my repository access be suspended while you investigate?",
        a: "Yes, in limited circumstances. Where we have reasonable grounds to suspect a breach of the restrictions or confidentiality terms, we may set your repository access to **read-only** while we investigate, on written notice setting out the grounds.\nSuspension does not affect your right to keep running versions already delivered to you, does not extend your Update & Support Term, and will be lifted promptly if the suspicion isn't substantiated.",
      },
    ],
  },
  {
    slug: "updates-support-maintenance",
    title: "Updates, Technical Support & Maintenance",
    items: [
      {
        id: 80,
        q: "Are product updates included?",
        a: "**Yes** — 12 months of product updates from the License Issue Date, at no additional cost.",
      },
      {
        id: 81,
        q: "What types of updates are included?",
        a: "During your active term:\n- Critical bug fixes — defects preventing core functionality from operating as documented\n- Security patches\n- Shopify compatibility updates\n- Minor version upgrades\n- New feature releases, where we choose to issue them",
      },
      {
        id: 82,
        q: "Are major new versions included?",
        a: "**Not necessarily.** Major new versions may be offered separately at our discretion.",
      },
      {
        id: 83,
        q: "Will the software stay compatible with future Shopify updates?",
        a: "**Compatibility updates are provided only while your Update & Support Term is active.**\nShopify changes its platform, APIs, and requirements regularly. During your term, we issue compatibility updates for those changes. **After your term expires, we are under no obligation to make the software compatible with any Shopify platform change** — whether announced before or after expiry.\nStaying compatible with future Shopify releases may therefore require renewing your term, or purchasing a new major version if one is offered.\nYour perpetual right to run the versions delivered to you is unaffected — but a version that's fallen behind Shopify's platform **may cease to function correctly**. Please plan for this.",
      },
      {
        id: 84,
        q: "Is technical support included?",
        a: "**Yes** — standard technical support for 12 months from the License Issue Date.",
      },
      {
        id: 85,
        q: "What does support include?",
        a: "- Installation guidance\n- Configuration guidance\n- Documentation clarification\n- Product-related questions\n- Bug reporting and triage",
      },
      {
        id: 86,
        q: "What is *not* included in support?",
        a: "- Custom feature development\n- Shopify store setup\n- Shopify theme customization\n- Third-party integrations\n- Server administration\n- Database administration\n- Debugging modifications you have made\nThese may require a separate professional services engagement.",
      },
      {
        id: 87,
        q: "What if I modify the code and hit a problem?",
        a: "If the issue reproduces only in your modified code, support is limited to **confirming whether the same defect exists in the unmodified Original Code**. Troubleshooting or fixing issues introduced by your own modifications is outside standard support.",
      },
      {
        id: 88,
        q: "How do I contact support?",
        a: "Email [support@fidelabs.io](mailto:support@fidelabs.io), business hours GMT+5:30. Include:\n- License ID\n- Delivered Version\n- Purchase email address\n- Description of the issue, with reproduction steps, screenshots, and logs where relevant\n[§10, §23]",
      },
      {
        id: 89,
        q: "What's the target response time?",
        a: "**Within two (2) business days** for a first response.",
      },
      {
        id: 90,
        q: "Is that guaranteed?",
        a: "**No.** Published response times are targets to help set expectations. They are not contractual commitments and do not constitute an SLA. Any binding SLA would require a separate written agreement.",
      },
      {
        id: 91,
        q: "Do I keep receiving updates after my term expires?",
        a: "**No.** You stop receiving product updates, security patches, compatibility updates, bug fixes, new feature releases, and technical support. You may continue using the software under your perpetual licence.",
      },
      {
        id: 92,
        q: "Can I keep using the software after support expires?",
        a: "**Yes.** Your perpetual licence lets you continue operating every version delivered during your active term. Support expiry does not terminate your right to use the software.",
      },
      {
        id: 93,
        q: "How do I renew?",
        a: "Pay the applicable annual renewal fee, before or after your current term expires. We'll invite renewal at least 30 days before expiry. Updates and support are restored for the renewed period. See Q22 for late renewals.",
      },
      {
        id: 94,
        q: "Is renewal automatic?",
        a: "**No.** Renewal is optional and is never charged automatically.",
      },
      {
        id: 95,
        q: "Can I request new features?",
        a: "**Yes** — and they're welcome. We're not obliged to implement any particular request, and roadmap decisions remain at our discretion. Note that submitting a suggestion grants us the licence described in Q57.",
      },
      {
        id: 96,
        q: "Are future features guaranteed?",
        a: "**No.** We may continue improving the software, but the agreement does not guarantee the development or release of any specific future feature, enhancement, or roadmap item.",
      },
    ],
  },
  {
    slug: "refunds-termination-legal",
    title: "Refunds, Termination & Legal",
    items: [
      {
        id: 97,
        q: "When is my purchase considered delivered?",
        a: "**Delivery is complete the moment we first grant you access to the repository**, or otherwise first make the Software available to you for download.\nNo physical shipment, installation, or activation is required, and delivery does not depend on whether you subsequently download, deploy, or use the software. Your 14-day refund window (Q99) runs from this moment.",
      },
      {
        id: 98,
        q: "Is my purchase refundable?",
        a: "**Generally no.** This is downloadable source code, and once repository access has been granted it cannot be returned.",
      },
      {
        id: 99,
        q: "Are there any exceptions?",
        a: "**Yes — three specific cases, within 14 days of Delivery:**\n1. **Duplicate payment**\n2. **Failure to grant repository access**\n3. **The Software fails to perform its core documented functions** — quote capture, quote management, and email notification — as described in the Documentation, despite reasonable troubleshooting, and we cannot resolve it within 14 days of you reporting it\nIf one of these applies to you, contact [support@fidelabs.io](mailto:support@fidelabs.io) with your License ID and invoice number.",
      },
      {
        id: 100,
        q: "What is *not* eligible for a refund?",
        a: "- Change of mind\n- No longer needing the software\n- Purchasing the wrong licence\n- Insufficient technical knowledge to deploy it\n- Not having a Shopify Partner account or hosting environment ready\n- Finding another solution\n- Expectations that are not documented functions\nRequests made **more than 14 days after Delivery** will not be considered.",
      },
      {
        id: 101,
        q: "What if I bought through a payment platform?",
        a: "If your purchase went through a third-party merchant of record, their refund policy may also apply, and where it is more generous than ours, it prevails.",
      },
      {
        id: 102,
        q: "Anything I should do before buying?",
        a: "Yes — and we'd genuinely rather you asked first than requested a refund later. Before purchasing:\n- Read the documentation and confirm the feature set matches what you need\n- Confirm your intended use is permitted (see Q38, Q39, Q66)\n- Make sure you have somewhere to host it and the technical capability to deploy it\nEmail [support@fidelabs.io](mailto:support@fidelabs.io) with any questions before you buy.",
      },
      {
        id: 103,
        q: "Are renewal and reinstatement fees refundable?",
        a: "**No**, once the renewed period has begun.",
      },
      {
        id: 104,
        q: "Can my licence be terminated?",
        a: "**Yes**, for material breach — with a 30-day cure period where the breach is curable, or immediately for the categories listed in Q78.",
      },
      {
        id: 105,
        q: "What must I do if my licence is terminated?",
        a: "Within **10 business days**:\n1. Stop all use of the Software, in every Production and Non-Production environment\n2. Remove it from every store, server, and environment you control\n3. Delete all copies of the Original Code — including forks, branches, local clones, archives, and backups. Copies in immutable backup systems may expire on their normal cycle, but in any event **within 12 months** of termination, and must not be restored into use\n4. **Provide a written certification**, signed by an authorised representative, confirming you've done all of the above and identifying each repository, environment, and storage system from which deletion occurred, plus any immutable backup still holding copies and its expiry date\nYour modifications are of no further use once the Original Code is deleted — the right to run them within the Software ends with the licence.",
      },
      {
        id: 106,
        q: "Which obligations survive termination?",
        a: "Definitions, fees, restrictions, intellectual property, traceability, confidentiality, warranty disclaimer, limitation of liability, indemnities, the effect of termination, assignment, governing law, and the general provisions all survive.",
      },
      {
        id: 107,
        q: "Can I terminate voluntarily?",
        a: "**Yes** — stop using the Software and comply with the deletion obligations in Q105. Voluntary termination does not entitle you to a refund.",
      },
      {
        id: 108,
        q: "What law governs the agreement?",
        a: "**The laws of India**, without regard to conflict-of-laws rules. The UN Convention on Contracts for the International Sale of Goods does not apply.",
      },
      {
        id: 109,
        q: "Where are disputes resolved?",
        a: "**The courts of Hyderabad, Telangana, India** have exclusive jurisdiction.\nBefore filing a claim, both parties will attempt in good faith to resolve the dispute through discussion between senior representatives for 30 days. This doesn't prevent either party seeking urgent injunctive relief to protect intellectual property or confidential information.",
      },
      {
        id: 110,
        q: "Is there a warranty?",
        a: 'The Software is provided **"as is" and "as available"**, without warranty of any kind, express or implied. We don\'t warrant uninterrupted or error-free operation, suitability for any requirement specific to your business, or continued compatibility with future Shopify versions. We give no warranty in respect of third-party components.\nNothing excludes any warranty or right that cannot be excluded under applicable law.',
      },
      {
        id: 111,
        q: "Is FIDE Labs liable for business losses?",
        a: "Neither party is liable for indirect, incidental, special, punitive, or consequential damages, or for lost profits, revenue, data, or business interruption.\nOur total aggregate liability is capped at **the greater of the total licence fee you paid, or amounts paid in the twelve months preceding the event** giving rise to the claim.\nThese limits don't apply to your payment obligations, your breach of the restrictions or confidentiality terms, your indemnity obligations, or any liability that can't be limited by law.",
      },
      {
        id: 112,
        q: "Do you indemnify me against IP claims?",
        a: "**Yes, within limits.** We will defend you against a third-party claim that the **unmodified Original Code**, used as the agreement permits, infringes that party's copyright, trademark, or trade secret rights, and pay damages finally awarded or agreed in settlement.\nIt does not cover: your modifications; combination with anything we didn't supply; third-party components (including your failure to comply with their licence terms); continued use after we tell you to stop; or use outside the licence scope.\nIf a claim arises we may, at our option, obtain the right for you to continue, modify the code to be non-infringing, or terminate and refund a pro-rated portion of fees paid. Our liability under this is subject to the cap in Q111.",
      },
      {
        id: 113,
        q: "What am I indemnifying FIDE Labs against?",
        a: "Third-party claims arising from your deployment and operation of the Software, your modifications, your use in breach of the agreement or applicable law, your handling of personal data, and claims by merchants or their end customers relating to your deployment.",
      },
      {
        id: 114,
        q: "Where can I read the complete License Agreement?",
        a: "The complete agreement is included with your purchase and forms part of the product documentation. Read it before purchasing or deploying. Where anything in this FAQ conflicts with the agreement, **the agreement governs**.",
      },
    ],
  },
  {
    slug: "general-product-technical",
    title: "General Product & Technical Questions",
    items: [
      {
        id: 115,
        q: "Do I need Shopify development experience?",
        a: "Working familiarity with Shopify app development is recommended to install, configure, customize, and maintain the source code. This is a source-code product, not a one-click install.\nIf you need implementation help beyond the documentation, engage your own developers, or ask us whether professional services are available.",
      },
      {
        id: 116,
        q: "Can I use my own hosting infrastructure?",
        a: "**Yes.** The agreement doesn't prescribe a hosting provider. Deploy on any infrastructure compatible with the product's technical requirements. Refer to the installation documentation for supported deployment requirements. You are responsible for your own hosting, database, backups, monitoring, and security.",
      },
      {
        id: 117,
        q: "Is installation and configuration documentation included?",
        a: "**Yes** — installation, deployment, configuration, and setup guidance, plus API and webhook references.",
      },
      {
        id: 118,
        q: "Can I report bugs?",
        a: "**Yes**, and please do. Include reproduction steps, screenshots, logs, and your License ID. Bug reporting and triage are covered by standard support during your active term.",
      },
      {
        id: 119,
        q: "How do I know my copy is legitimate?",
        a: "Every legitimate purchase has a unique License ID, licensed purchaser information, official delivery from FIDE Labs, and embedded traceability metadata. If you've obtained a copy any other way, it isn't licensed and you have no right to use it.",
      },
      {
        id: 120,
        q: "Where do I get help?",
        a: "In order:\n1. Installation documentation\n2. Technical documentation\n3. This FAQ\n4. Standard technical support at [support@fidelabs.io](mailto:support@fidelabs.io), if your Update & Support Term is active\nFor formal legal notices: [legal@fidelabs.io](mailto:legal@fidelabs.io).",
      },
    ],
  },
];

export const totalFaqCount = faqCategories.reduce((sum, c) => sum + c.items.length, 0);
