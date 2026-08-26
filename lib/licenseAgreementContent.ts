// Verbatim static body of the FIDE Labs Commercial License Agreement
// (source: https://app.notion.com/p/Commercial-License-Agreement-3abae9544370806f8758c1498b7252fa).
// Only the two tables above this text (License Details, Licensee Information)
// and the Electronic Acceptance Record are generated per-order — everything
// below is identical for every customer and must not be edited here without
// updating the source-of-truth Notion doc first. Legal review of wording
// changes is the business's responsibility, not this codebase's.
//
// Lightweight markdown dialect understood by lib/licenseAgreementPdf.ts:
//   ### heading, #### subheading, **bold** inline, "- " bullet list,
//   "N. " numbered list, "| a | b |" table rows (a "---" row is the
//   header separator and is skipped).

export const LICENSE_AGREEMENT_BODY = String.raw`
**PLEASE READ THIS AGREEMENT CAREFULLY BEFORE USING THE SOFTWARE. BY PURCHASING, DOWNLOADING, ACCESSING THE REPOSITORY, OR DEPLOYING THE SOFTWARE, OR BY INDICATING ACCEPTANCE ELECTRONICALLY AT CHECKOUT, YOU AGREE TO BE LEGALLY BOUND BY THESE TERMS. IF YOU ARE ACCEPTING ON BEHALF OF A COMPANY, YOU CONFIRM YOU HAVE AUTHORITY TO BIND THAT COMPANY.**

### 1. Parties and Definitions

This Agreement is between **FIDE LAB (OPC) PRIVATE LIMITED**, a company registered at **901, 302, DSR Tranquil, Ayyappa Society, Madhapur, Hyderabad – 500081, Telangana, India** ("**FIDE Labs**", "**we**", "**us**"), and the person or company named in the Licensee Information block above ("**you**", "**Licensee**").

In this Agreement:

**"Product"** means the single FIDE Source Code product named in the License Details block. Each FIDE Labs product is licensed separately.

**"Software"** means the Product as supplied to you, comprising the Original Code, the Third-Party Components, and the Documentation.

**"Original Code"** means the source code, business logic, architecture, and design system authored by FIDE Labs and supplied as part of the Software. It does not include Third-Party Components.

**"Third-Party Components"** means open-source and third-party software incorporated into or required by the Software, including the packages identified in Schedule A and the THIRD-PARTY-NOTICES file. These are not owned by FIDE Labs and are licensed to you by their respective rights holders under their own terms.

**"Documentation"** means the guides, README, API and webhook reference, and other written materials supplied with the Software.

**"Delivery"** means the moment at which we first grant you access to the repository containing the Software, or otherwise first make the Software available to you for download. Section 14.1 applies.

**"Store"** means a single Shopify storefront identified by a unique .myshopify.com domain.

**"Production Deployment"** means an installation of the Software serving live traffic or processing real orders on a Store.

**"Non-Production Deployment"** means an installation used solely for development, testing, staging, or demonstration, which does not serve live customer traffic and does not process real orders.

**"Client Store"** means a Store owned or operated by a third party for whom you provide services, and which you do not own.

**"Marketplace"** means the Shopify App Store or any other application marketplace, plugin directory, theme store, template marketplace, or code marketplace.

**"Multi-Tenant Deployment"** means a single installation of the Software that serves two or more Stores that are not all owned or operated by you, whether as a hosted service, application, or otherwise.

**"Affiliate"** means an entity that you control, that controls you, or that is under common control with you, where control means ownership of more than 50% of voting equity.

**"License Tier"** means the tier named in the License Details block, with the scope set out in Schedule B.

**"Order Form"** means any written order, quotation, or purchase document issued by us and accepted by you in respect of the Software.

**"Update & Support Term"** means the 12-month period beginning on the Issue Date, as renewed under Section 11.

**"Modifications"** means any change, extension, or derivative work you make to the Original Code.

### 2. License Grant

Subject to your compliance with this Agreement and payment in full, we grant you a perpetual, non-exclusive, non-transferable, non-sublicensable, worldwide license to use, modify, and deploy the Software within the scope of your License Tier.

#### 2.1 License Tier

The Software is currently licensed on a single tier:

| Tier | Deployment scope | Status |
| --- | --- | --- |
| Commercial | One (1) Production Deployment, for one business | Available |

The full scope of the Commercial tier is set out in Schedule B.

We may release additional license tiers in future, including tiers permitting deployment on Client Stores or operation of the Software as a hosted multi-tenant service. No such tier is offered as at the date of this version, and this Agreement grants no rights beyond the Commercial tier. If we release a further tier, existing licensees may upgrade to it under Section 2.6.

#### 2.2 Common to all tiers

| Attribute | Detail |
| --- | --- |
| Production Deployments | One (1) |
| Non-Production Deployments | Up to three (3) |
| Transferable | No, except under Section 20 |
| Territory | Worldwide |
| Duration | Perpetual, subject to termination under Section 18 |
| Fee structure | One-time, per Product |

Non-Production Deployments do not consume license capacity. A Shopify development store, a staging store, and a local development environment are Non-Production Deployments. The moment an installation serves live customer traffic or processes real orders, it becomes a Production Deployment and consumes your capacity.

#### 2.3 Exceeding your tier

If you need more capacity than your license allows, you may purchase an additional license, or upgrade under Section 2.6 if a suitable tier is available. Deploying beyond your capacity is a breach of Section 6.

#### 2.4 What "lifetime" and "perpetual" mean

Your license is perpetual. Once purchased, your right to use, modify, and run the Software does not expire, and no further payment is required to keep running it.

Perpetual applies to the license, not to updates. Specifically:

- **You keep permanently:** the right to use and run the Software, including every version we released to you while your Update & Support Term was active.
- **You do not receive permanently:** new releases, patches, compatibility updates, or technical support after your Update & Support Term expires, unless you renew under Section 11.

**Your copies.** You are responsible for retaining your own copy of each version delivered to you. We are not obliged to provide, restore, or archive repository access after your Update & Support Term expires, and your perpetual rights under this Section are not conditional on our continuing to host any version.

Where any marketing, sales, or promotional statement conflicts with this Section, this Section governs.

#### 2.5 Per-Product scope

This license covers one Product. It grants no rights in any other FIDE Labs product, whether existing now or released later. Other products require their own licenses.

#### 2.6 Tier upgrades

If we release a higher license tier, you may upgrade to it by paying the difference between the fee you paid and the then-current fee for that tier. On upgrade:

- your deployment capacity changes to the new tier from the upgrade date;
- your Update & Support Term is **not** reset or extended, unless we agree otherwise in writing; and
- this Agreement continues to apply, with the new tier named in an updated License Details block or an amended Order Form.

Downgrades are not available and fees paid are not refundable on downgrade.

### 3. Fees and Payment

The License Fee is a one-time payment of USD 599, as stated in the License Details block and on your invoice.

- Fees are quoted and payable in USD unless your invoice states otherwise.
- Fees are exclusive of any taxes, duties, or withholdings. You are responsible for those, other than taxes on our income.
- Where your purchase is made through a third-party merchant of record, that provider is the seller of record for tax purposes and its terms apply to payment processing and, as set out in Section 14, may also apply to refunds.
- ZIP File access is granted after payment clears in full.
- We may change our published prices at any time. A price change does not affect a license already purchased.
- The annual renewal fee under Section 11 is separate from, and additional to, the one-time License Fee.

### 4. What You Receive

- Complete application source code, delivered via a ZIP File
- Installation and Deployment Guide
- Shopify Partner Setup Guide
- Configuration Guide
- API and Webhook Documentation
- FAQ, README, and license documentation
- A THIRD-PARTY-NOTICES file listing the Third-Party Components and their licenses
- Updates and support for the Update & Support Term, per Sections 10 and 11

### 5. Permitted Use

Within the scope of your license, you may:

- Run one Production Deployment, plus up to three Non-Production Deployments, under Section 2.2.
- Use the Software for your own business.
- Rebrand the application: change its name, colours, copy, logos, and email templates.
- Modify, extend, refactor, and study the Original Code, and add new features.
- Integrate third-party services.
- Disclose the source code to your employees and contractors who need it to work on your deployment, provided they are bound by confidentiality obligations at least as protective as Section 13. You remain responsible for their compliance.
- Disclose the source code to the owner of the Store licensed under this Agreement, provided they agree in writing to be bound by this Agreement and you provide us a copy of that agreement on request.

You own your Modifications. You do not own the Original Code they are built on, and your Modifications may only be used within the scope of this license.

### 6. Restrictions

You may not:

- Redistribute, resell, publish, or share the Original Code, or any portion of it, or any Modification derived in whole or in part from it, except as expressly permitted in Section 5.
- Upload the Original Code to any public or shared repository, package registry, gist, forum, or file-sharing service.
- Sell, license, rent, lease, or sublicense the Original Code or any Modification of it.
- **Publish, list, submit, or distribute the Software, or any rebranded or modified version of it, on any Marketplace.**
- **Operate the Software as a Multi-Tenant Deployment.**
- **Deploy the Software on any Client Store**, or otherwise deploy or operate it for the benefit of a third party's Store.
- Deploy the Software on a Store owned or operated by an Affiliate, without a separate license for that Store.
- Claim authorship or ownership of the Original Code.
- Remove, obscure, or alter copyright notices, license headers, the THIRD-PARTY-NOTICES file, or the traceability metadata described in Section 8.
- Deploy the Software beyond the capacity stated in Section 2.2.
- Build a Competing Product, as defined in Section 6.1.
- Use the Software in violation of applicable law or the Shopify Partner Program Agreement and API Terms.

Breach of this Section is a material breach and is handled under Section 18.

#### 6.1 Competing Product

A "Competing Product" is a product or service that meets all three of the following:

1. it incorporates, or is derived from, the Original Code;
2. its primary function is request-a-quote, hide-price, or equivalent quote-request functionality for e-commerce storefronts; and
3. it is offered, marketed, or made available to third parties as a product, app, template, or source-code package, whether for a fee or free of charge.

For clarity, neither of the following is a Competing Product: operating your own licensed Store; or building an unrelated product that reuses general programming knowledge, patterns, or techniques you gained from reading the Original Code.

#### 6.2 Circumvention and derivation

You may not circumvent, remove, disable, or work around any watermarking, license metadata, access control, or other protective measure in or applied to the Software.

You may not use knowledge of the Original Code's architecture, business logic, or design obtained through your access to it to develop, or to assist any third party in developing, a Competing Product.

Nothing in this Section limits your rights under Section 5, or any right you have under mandatory applicable law that cannot be excluded or restricted by contract, including any right of decompilation or analysis for interoperability purposes conferred by law.

### 7. Intellectual Property

#### 7.1 Original Code

All right, title, and interest in the Original Code, the product architecture and design system, the Documentation, FIDE Labs branding assets, and the original business logic remain the exclusive property of FIDE Labs. You receive only the license expressly granted in Section 2. Nothing in this Agreement transfers ownership.

#### 7.2 Third-Party Components

The Software incorporates Third-Party Components that FIDE Labs does not own. Those components remain the property of their respective rights holders and are licensed to you directly under their own license terms, not under this Agreement. Where a Third-Party Component's license conflicts with this Agreement in respect of that component, the component's own license governs.

Schedule A identifies the principal Third-Party Components. The authoritative list is the THIRD-PARTY-NOTICES file shipped with your package. You must retain that file and all embedded license headers in any deployment.

#### 7.2.1 Copyleft components

If the THIRD-PARTY-NOTICES file identifies any component licensed under the GNU General Public License, GNU Affero General Public License, Server Side Public License, or similar copyleft terms, you agree to comply with those terms in respect of that component, including any source-availability obligation they impose on your deployment. Our indemnity under Section 17.1 does not cover claims arising from your failure to comply with the terms of a Third-Party Component's license.

#### 7.3 Your Modifications

You own your Modifications and any original code you write. This ownership is subject to our continuing ownership of the Original Code, and does not entitle you to use, distribute, or license your Modifications outside the scope of Section 2.

#### 7.4 Feedback and contributions

If you provide us with suggestions, feature requests, bug reports, patches, pull requests, or code contributions relating to the Software, you grant us a perpetual, irrevocable, worldwide, royalty-free, sublicensable license to use, reproduce, modify, and incorporate them into the Software and into any other FIDE Labs product, without obligation of confidentiality, attribution, or payment. You confirm you hold the rights necessary to grant this license. You are not obliged to provide any contribution, and nothing in this Section requires you to disclose your Modifications to us.

### 8. Source Code Protection and Traceability

#### 8.1 Watermarking

Each package supplied is watermarked with information identifying the purchaser.

Embedded data may include your name and email address, the License ID, the License Tier, the purchase date, the Delivered Version, and the invoice or order reference. This data is placed in documentation and metadata files.

We embed and process this data on the basis of our legitimate interest in protecting our intellectual property and in detecting unauthorised distribution of the Software. We use it for one purpose only: identifying the original licensee if an unauthorised copy of the Software is found. It is not used for marketing and is not shared with third parties except as required to enforce our rights or to comply with law. Our handling of this data, including your rights in respect of it, is described in our Privacy Policy at [PRIVACY POLICY URL].

You may not remove, alter, or obfuscate this metadata. Section 6.2 applies.

#### 8.2 Consequences of unauthorised sharing

Each watermarked package is traceable to the licensee it was issued to. Where a watermarked package, or any part of the Original Code, is found to have been shared, published, redistributed, or otherwise made available in breach of Section 5 or Section 6, and the watermark or other evidence identifies your package as its source, we may take any or all of the following steps:

- **Terminate this license immediately**, without a cure period, under Section 18.2, with the consequences set out in Section 19;
- **Decline to sell you any future FIDE Labs product, license, renewal, or upgrade**, and close or refuse any account or repository access associated with you or your organisation;
- **Withhold any refund** otherwise available under Section 14;
- **Issue infringement notices** to hosting providers, source repositories, package registries, marketplaces, and search engines, identifying the infringing material;
- **Pursue any remedy available at law or in equity**, including injunctive relief under Section 18.3.1, damages, an account of profits, and recovery of our enforcement costs.

These steps are cumulative and are in addition to, not instead of, any other right or remedy we hold. Where the watermark identifies your package as the source of an unauthorised copy, it will be treated as evidence that the disclosure originated with you, unless you demonstrate that the disclosure occurred despite your compliance with Sections 5, 6, and 13.

### 9. License ID

Every purchase is assigned a License ID in the format. Quote it for support requests, purchase verification, version tracking, and renewals.

### 10. Support

Support is included for the duration of the Update & Support Term.

| Included | Not included |
| --- | --- |
| Installation and configuration guidance | Custom feature development |
| Documentation clarification | Shopify store or theme setup |
| Bug reporting and triage | Third-party integrations |
| Product-related questions | Server or database administration |
|  | Debugging your Modifications |

Support is provided by email at support@fidelabs.io during business hours in GMT+5:30. Our target first response time is 2 business days.

Target response times are goals, not contractual commitments, and do not constitute a service level agreement. Any binding SLA must be agreed separately in writing.

We do not support Modifications you have made. If a defect can only be reproduced in modified code, support is limited to confirming whether the same defect exists in the unmodified Original Code.

### 11. Updates, the Update & Support Term, and Renewal

#### 11.1 What is included

During the Update & Support Term you receive, at no additional cost:

- Critical bug fixes — defects that prevent core functionality from operating as documented
- Security patches
- Compatibility updates required by changes to the Shopify platform or API
- New feature releases and minor version upgrades, where we choose to issue them
- Technical support under Section 10

Major new versions may be offered separately at our discretion.

#### 11.2 Expiry

Compatibility updates are provided only while your Update & Support Term is active. Shopify changes its platform, APIs, and requirements from time to time, and those changes may affect how the Software operates.

We will issue compatibility updates for such changes during your Update & Support Term. After it expires, we are under no obligation to make the Software compatible with any Shopify platform change, whether announced before or after expiry. Continued compatibility with future Shopify releases may therefore require you to renew under Section 11.4, or to purchase a new major version if one is offered under Section 11.1.

Your perpetual right to run the versions delivered to you is unaffected by this Section, but a version that is no longer compatible with the Shopify platform may cease to function correctly, and Section 15 applies.

### 11.3 Expiry

The Update & Support Term is 12 months from the Issue Date. When it expires, and unless you renew:

- You keep the perpetual right to run every version you received during the Term. See Section 2.4.
- You stop receiving new releases, patches, and support.
- You are responsible for retaining your own copy of each version delivered to you.
- We are not obliged to maintain compatibility with Shopify platform changes released after expiry. Section 11.2 applies.

Expiry of the Update & Support Term does not terminate your license.

### 11.4 Renewal

You may renew for further 12-month periods at the then-current renewal fee, currently USD 149 per year. Renewal restores updates and support for the renewed period.

- Renewal is **optional** and is not charged automatically. We will invite renewal at least 30 days before your Term expires.
- **Non-payment of a renewal fee is not a breach of this Agreement and does not give rise to any right of termination.**
- Renewal fees are set as a percentage of the then-current list price and may change between renewal periods.
- A renewal purchased before expiry runs from the expiry date. A renewal purchased after a lapse runs from the purchase date, and we may charge a reinstatement fee of USD 99 in addition to the renewal fee.
- If your Term has lapsed for more than 3 months, we may require you to purchase a current license rather than renew.

### 12. Your Responsibilities

You are responsible for your deployment. Specifically:

- You must test the Software before putting it into production.
- You are the operator of your deployment. Where your deployment processes personal data of merchants or their customers, you are responsible for determining your role under applicable data protection law, publishing your own privacy notice, and meeting your obligations to data subjects.
- You must implement and keep operational any mandatory compliance webhooks required by Shopify, including the customer and shop data request and redaction webhooks, in any deployment you operate.
- You must maintain your own Shopify Partner account and comply with Shopify's terms. Nothing in this Agreement grants any right in or to Shopify's platform, APIs, or trademarks.
- You are responsible for your own hosting, database, backups, monitoring, and security.
- You must keep an accurate record of your Production Deployment.

**No data processing relationship.** We do not host your deployment and do not access or process personal data of merchants or their end customers in connection with it. We are not a processor or sub-processor of yours in respect of that data, and no data processing agreement is required under this Agreement. The only personal data we process in connection with this Agreement is your own contact and purchase information, as described in our Privacy Policy and in Section 8.

#### 12.1 Verification

On not less than 15 business days' written notice, and no more than twice in any 12-month period, you will provide a written statement listing each Store domain on which the Software is deployed, certified as accurate by an authorised representative.

Where we have reasonable grounds to suspect deployment beyond your licensed capacity, we may request supporting evidence, limited to Shopify store records for the relevant Stores. We will not request access to your servers, source repositories, or business records generally.

If verification shows you have exceeded your capacity, you must within 15 days either purchase the additional capacity at the then-current list price or remove the excess deployments. Doing so cures the breach for the purposes of Section 18.1.

### 13. Confidentiality

The Original Code is our confidential information. You must apply reasonable technical and organisational measures to prevent unauthorised access to it.

Reasonable measures include, at minimum: (a) storing the Original Code in private repositories with access limited to persons with a need to know; (b) binding each such person to confidentiality obligations at least as protective as this Section; and (c) promptly removing access when a person no longer requires it.

This obligation does not apply to information that is public through no fault of yours, that you already lawfully held, or that you are legally compelled to disclose (in which case, tell us first if you are permitted to).

This obligation survives termination and continues for as long as the Original Code remains non-public. Where the Original Code becomes public as a result of your breach of this Section or your negligence, this obligation continues indefinitely notwithstanding that publication, and Section 17.2 applies to claims arising from third-party use of the published code.

### 14. Refunds

#### 14.1 Delivery

Delivery is complete, and the Software is deemed fully delivered and accepted, at the moment we first grant you access to the ZIP File containing the Software or otherwise first make it available to you for download. No physical shipment, installation, or activation is required, and delivery does not depend on whether you subsequently download, deploy, or use the Software.

Because the Software is supplied as downloadable source code, it cannot be returned once access has been granted.

#### 14.2 Refunds

The Software is non-refundable once access has been granted, except in the specific cases set out in Section 14.3 or where a refund is required by applicable law.

#### 14.3 Limited refund cases

We will consider a refund request received within 14 days of Delivery in these cases only:

- Duplicate payment;
- Failure to grant link access; or
- The Software fails to perform its core documented functions — quote capture, quote management, and email notification — as described in the Documentation, despite reasonable troubleshooting, and we cannot resolve the issue within 14 days of you reporting it.

Requests made more than 14 days after Delivery will not be considered. Change of mind, insufficient technical knowledge, incorrect purchase choice, lack of a required Shopify Partner account or hosting environment, and unmet expectations that are not documented functions are not eligible.

Renewal fees, reinstatement fees, and upgrade fees are non-refundable once the renewed or upgraded period has begun.

Where your purchase was made through a third-party merchant of record, that provider's refund policy may also apply and, to the extent it is more generous, will prevail.

A refund of the License Fee terminates your license. Section 19 applies. We may withhold a refund otherwise available under this Section where Section 8.2 applies.

Nothing in this Section limits any non-waivable statutory refund right you may have under applicable law.

#### 15. Disclaimer of Warranty

THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SOFTWARE WILL OPERATE WITHOUT INTERRUPTION OR ERROR, THAT IT WILL MEET ANY REQUIREMENT SPECIFIC TO YOUR BUSINESS, OR THAT IT WILL REMAIN COMPATIBLE WITH FUTURE VERSIONS OF THE SHOPIFY PLATFORM. WE GIVE NO WARRANTY OF ANY KIND IN RESPECT OF THIRD-PARTY COMPONENTS.

YOU ARE RESPONSIBLE FOR VALIDATING THE SOFTWARE BEFORE DEPLOYING IT TO PRODUCTION.

Nothing in this Section excludes or limits any warranty, liability, or right that cannot be excluded or limited under applicable law. Where any exclusion in this Section is held unenforceable, it applies to the maximum extent permitted.

#### 16. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY IS LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES, OR FOR LOST PROFITS, LOST REVENUE, LOST DATA, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATING TO THIS AGREEMENT, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

OUR TOTAL AGGREGATE LIABILITY UNDER THIS AGREEMENT SHALL NOT EXCEED THE GREATER OF (A) THE TOTAL LICENSE FEE PAID BY YOU UNDER THIS AGREEMENT, OR (B) THE TOTAL AMOUNTS PAID BY YOU UNDER THIS AGREEMENT IN THE TWELVE MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.

These limits do not apply to: your payment obligations; your breach of Section 6 (Restrictions) or Section 13 (Confidentiality); your indemnity obligations under Section 17.2; or any liability that cannot be limited by law, including fraud, wilful misconduct, and death or personal injury caused by negligence.

Nothing in this Section excludes or limits any liability that cannot be excluded or limited under applicable law. Where any limitation in this Section is held unenforceable, it applies to the maximum extent permitted.

#### 17. Indemnification

##### 17.1 Our indemnity to you

We will defend you against a third-party claim alleging that the unmodified Original Code, used as permitted by this Agreement, infringes that third party's copyright, trademark, or trade secret rights, and we will pay damages finally awarded or agreed in settlement.

This indemnity does not apply to claims arising from: your Modifications; combination of the Software with anything not supplied by us; Third-Party Components, including any claim arising from your failure to comply with a Third-Party Component's license terms or attribution requirements; your continued use after we notify you to stop; or use outside the scope of this Agreement.

If a claim is made or we reasonably believe one is likely, we may at our option procure the right for you to continue using the Software, modify it to be non-infringing, or terminate the license and refund a pro-rated portion of the fees you paid.

**Our total liability under this Section is subject to, and counts towards, the cap in Section 16, notwithstanding anything in Section 16 to the contrary.**

##### 17.2 Your indemnity to us

You will defend and indemnify us against any third-party claim arising from: your deployment and operation of the Software; your Modifications; your use of the Software in breach of this Agreement or applicable law; your handling of personal data; and claims by merchants or their end customers relating to your deployment.

##### 17.3 Conditions

An indemnity applies only if the indemnified party gives prompt written notice of the claim, gives the indemnifying party sole control of the defence and settlement (except that no settlement admitting liability or imposing obligations on the indemnified party may be made without consent), and provides reasonable cooperation at the indemnifying party's expense.

#### 18. Breach, Suspension, and Termination

##### 18.1 Curable breach

If you breach this Agreement, we will give you written notice describing the breach. If the breach is capable of being cured and you cure it within 30 days, no further action follows. Deploying beyond your capacity is cured by purchasing the additional capacity or removing the excess deployment.

##### 18.2 Immediate termination

We may suspend support and terminate this license immediately, without a cure period, if you:

- redistribute, publish, resell, share, or sublicense the Original Code;
- upload it to a public repository;
- publish or list the Software on a Marketplace;
- operate the Software as a Multi-Tenant Deployment, or deploy it on a Client Store;
- build or release a Competing Product; or
- fail to pay the License Fee.

Section 8.2 sets out the additional consequences that may follow where an unauthorised copy of the Software is traced to your package.

##### 18.3 Remedies

On termination for breach we may, in addition to terminating: suspend support and repository access; withhold refunds; issue copyright infringement notices to hosting providers, repositories, registries, and marketplaces; and pursue any remedy available at law or in equity, including injunctive relief.

##### 18.3.1 Injunctive relief

You acknowledge that a breach of Section 6 or Section 13 would cause us irreparable harm not adequately remedied by damages, and agree that we may seek injunctive or other equitable relief in addition to any other remedy, without the necessity of posting a bond or other security where the court permits.

##### 18.4 Suspension pending investigation

Where we have reasonable grounds to suspect a breach of Section 6 or Section 13, Suspension under this Section does not affect your right to continue running versions already delivered to you, does not extend your Update & Support Term, and will be lifted promptly if the suspicion is not substantiated.

##### 18.5 Your right to terminate

You may terminate this Agreement at any time by ceasing use and complying with Section 19. Termination by you does not entitle you to a refund except under Section 14.

### 19. Effect of Termination

On termination for any reason, you must, within 10 business days:

1. Stop all use of the Software, including all Production and Non-Production Deployments.
2. Remove the Software from every Store, server, and environment you control.
3. Delete all copies of the Original Code in your possession or control, including forks, branches, local clones, archives, and backups, except copies in immutable backup systems, which must be deleted on their normal expiry cycle and in any event within 12 months of termination, and which must not be restored into use.
4. Provide a written certification, signed by an authorised representative, confirming that you have complied with paragraphs 1 to 3, identifying each repository, environment, and storage system from which deletion occurred, and identifying any immutable backup system in which copies remain together with its scheduled expiry date.

Your Modifications are of no further use to you once the Original Code is deleted; the right to run them within the Software ends with the license.

Termination does not entitle you to a refund except as set out in Section 14, and does not relieve you of amounts already owed. Breach of this Section is subject to the remedies in Sections 8.2 and 18.3, including injunctive relief under Section 18.3.1.

**Survival.** Sections 1, 3, 6, 7, 8, 13, 15, 16, 17, 19, 20, 21, and 22 survive termination.

### 20. Assignment and Change of Control

You may not assign or transfer this Agreement, or the license granted under it, without our prior written consent. Consent will not be unreasonably withheld where the transfer is to a purchaser of all or substantially all of your business or assets, provided the transferee agrees in writing to be bound by this Agreement and the Licensed Store record is updated accordingly.

We may assign this Agreement in full, without your consent, to a successor in connection with a merger, acquisition, corporate reorganisation, or sale of all or substantially all of our assets. Your license and your rights under it survive any such transaction unchanged. We will notify you of any assignment.

Any attempted assignment in breach of this Section is void.

### 21. Governing Law and Dispute Resolution

This Agreement is governed by the laws of India, without regard to its conflict-of-laws rules. The United Nations Convention on Contracts for the International Sale of Goods does not apply.

The courts of Hyderabad, Telangana, India have exclusive jurisdiction over any dispute arising out of or relating to this Agreement, and both parties submit to that jurisdiction.

Before filing a claim, the parties will attempt in good faith to resolve the dispute through discussion between senior representatives for 30 days. This does not prevent either party from seeking urgent injunctive relief at any time, in any court of competent jurisdiction, to protect intellectual property or confidential information.

### 22. General

**Business use.** You confirm that you are acquiring and using the Software wholly or mainly for purposes relating to your trade, business, craft, or profession, and not as a consumer. Where any provision of this Agreement is unenforceable against a consumer under applicable law, that provision applies to the maximum extent permitted.

**Entire agreement.** This Agreement, together with the invoice, Schedule A, Schedule B, and any Order Form, is the entire agreement between us on this subject and supersedes all prior discussions, proposals, marketing statements, and representations.

**Order of precedence.** If there is a conflict, this Agreement prevails over any purchase order, vendor terms, marketing page, or other document. Where an Order Form expressly amends a specific section of this Agreement, the Order Form prevails for that section only.

**Amendments.** Changes to this Agreement must be in writing and agreed by both parties, including by electronic acceptance. We may update the standard form of this license for future releases; the version delivered with your purchase, identified by the Agreement Version at the head of this document, governs your purchase.

**Waiver.** A failure to enforce any provision is not a waiver of it.

**Severability.** If any provision is held unenforceable, it will be limited or severed to the minimum extent necessary, and the rest of the Agreement remains in force.

**Notices.** Notices to you go to the email in the Licensee Information block. Notices to us go to support@fidelabs.io and, where formal service is required, to the registered address in Section 1. Email notice is deemed received on the next business day.

**Independent contractors.** Nothing here creates a partnership, joint venture, employment, or agency relationship.

**Force majeure.** Neither party is liable for delay or failure caused by events beyond its reasonable control, excluding payment obligations.

**Export and sanctions.** You confirm you are not located in, and will not deploy the Software from, a country subject to comprehensive trade sanctions, and that you are not on any restricted-party list.

### 23. Contact

For licensing questions, purchase verification, tier upgrades, renewals, or support, contact us at support@fidelabs.io. Include your License ID, License Tier, Delivered Version, purchase email, and a description of the issue.

For formal legal notices, contact support@fidelabs.io.

### Acceptance

This Agreement is accepted either by electronic acceptance at checkout, or by signature below. Electronic acceptance is recorded against your License ID together with the Agreement Version, the date and time of acceptance, and your purchase reference, and has the same effect as signature.

Signature is required only for Enterprise and negotiated orders.

### Schedule A — Third-Party Components

The Software incorporates third-party packages that FIDE Labs does not own. Each is licensed to you by its rights holder under its own terms, as set out in Section 7.2.

The authoritative list of Third-Party Components and their license identifiers is the THIRD-PARTY-NOTICES file included in the root of the repository supplied to you. That file is generated from the actual production dependency tree of the Delivered Version named in the License Details block. Where this Schedule and the THIRD-PARTY-NOTICES file differ, the file governs.

The principal components are:

| Component | Purpose |
| --- | --- |
| React | UI framework |
| React Router | Routing |
| Prisma | Database ORM and client |
| Shopify Polaris | Admin UI component library |
| Shopify App Bridge | Embedded app integration |

For the license identifier applicable to each component above, and for the complete list of all production dependencies including transitive dependencies, refer to THIRD-PARTY-NOTICES.

You must retain the THIRD-PARTY-NOTICES file and all embedded license headers in any deployment. Section 7.2.1 applies to any component licensed under copyleft terms.

### Schedule B — License Tiers

The Commercial tier is a one-time fee per Product, carries a perpetual license under Section 2.4, and includes a 12-month Update & Support Term renewable under Section 11.4.

| | Commercial |
| --- | --- |
| Status | Available |
| Fee (one-time) | USD 599 |
| Annual renewal | USD 149 |
| Production Deployments | 1 |
| Non-Production Deployments | 3 |
| Own business use | Yes |
| Client Stores | No |
| Affiliate Stores | No — separate license required per Store |
| Multi-Tenant Deployment | No |
| Marketplace listing | No |
| Source disclosure to client | Employees, contractors, and the licensed Store owner only |
| Support | Standard — 2 business day target first response |
| Resale of source code | No |

#### B.1 Scope

One Production Deployment, on one Store, for one business. "One business" means you, the single legal entity named in the Licensee Information block. It does not include your Affiliates, and it does not include Client Stores.

If you operate more than one Store yourself, each Store needs its own license. If you wish to deploy the Software on a Store you do not own, or to operate it as a hosted service for other merchants, or to list it on a Marketplace, this license does not permit it — contact us at support@fidelabs.io to discuss whether a suitable license is available.

Copyright © 2026 FIDE LAB (OPC) PRIVATE LIMITED. All rights reserved.

Unauthorised copying, redistribution, or commercial reuse of the Original Code without written permission is prohibited.
`.trim();
