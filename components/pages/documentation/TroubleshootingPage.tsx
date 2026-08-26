"use client";

import DocPageShell from "./DocPageShell";
import Callout from "./Callout";
import DocTable from "./DocTable";
import DocOrderedList from "./DocOrderedList";
import IssueCard, { Code } from "./IssueCard";

const TOC_LINKS = [
  { href: "#purpose-and-scope", label: "Purpose and scope" },
  { href: "#prerequisites", label: "Prerequisites" },
  { href: "#how-to-use-this-guide", label: "How to use this guide" },
  { href: "#quick-diagnostic-index", label: "Quick diagnostic index" },
  { href: "#troubleshooting-reference", label: "Troubleshooting reference" },
  { href: "#post-installation-verification", label: "Post-installation verification" },
  { href: "#qa-observations", label: "QA observations" },
  { href: "#escalation-and-support", label: "Escalation and support" },
  { href: "#appendix-a", label: "Appendix A — Commands" },
];

const H2 = { scrollMarginTop: "110px", fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "800" as const, fontSize: "26px", letterSpacing: "-0.9px", margin: "38px 0px 14px", color: "rgb(13, 21, 38)" };
const H3 = { fontFamily: "\"Bricolage Grotesque\", sans-serif", fontWeight: "700" as const, fontSize: "17px", letterSpacing: "-0.4px", margin: "26px 0px 10px", color: "rgb(13, 21, 38)" };
const P = { fontSize: "14.5px", lineHeight: "1.75", color: "rgb(55, 65, 81)", margin: "0px 0px 14px", maxWidth: "720px" };
const UL = { margin: "4px 0px 14px", padding: "0px 0px 0px 18px", display: "flex", flexDirection: "column" as const, gap: "9px" };
const LI = { fontSize: "14.5px", lineHeight: "1.7", color: "rgb(55, 65, 81)" };

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={UL}>
      {items.map((item) => (
        <li key={item} style={LI}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TroubleshootingPage() {
  return (
    <DocPageShell
      breadcrumbCategory="Help"
      title="Troubleshooting Guide"
      subtitle="Diagnostic and resolution procedures for issues commonly encountered when installing, configuring, and validating the FIDE Request Quote & Hide Price Source Code Edition."
      readTime="12 min read"
      tocLinks={TOC_LINKS}
    >
      <h2 id="purpose-and-scope" data-doc-head="1" style={H2}>1. Purpose and Scope</h2>
      <p style={P}>
        This guide provides diagnostic and resolution procedures for issues commonly encountered when installing, configuring, and validating the FIDE Request Quote &amp; Hide Price Source Code Edition.
      </p>
      <h3 style={H3}>1.1 In scope</h3>
      <BulletList
        items={[
          "Local environment preparation and dependency installation.",
          "Environment variable and configuration file setup.",
          "Database provisioning and Prisma bootstrap.",
          "Shopify Partner app linking, tunnelling, and authentication.",
          "Post-installation verification of the running application.",
        ]}
      />
      <h3 style={H3}>1.2 Out of scope</h3>
      <BulletList
        items={[
          "Custom code modifications made by the buyer after delivery.",
          "Third-party hosting, DNS, and infrastructure faults.",
          "Shopify platform outages and upstream API incidents.",
          "Theme conflicts introduced by unrelated apps or custom theme code.",
        ]}
      />
      <h3 style={H3}>1.3 Intended audience</h3>
      <p style={P}>
        Developers and technical implementers responsible for installing the source code in a local development environment and preparing it for deployment. Working familiarity with Node.js, npm, Git, and the Shopify CLI is assumed.
      </p>

      <h2 id="prerequisites" data-doc-head="1" style={H2}>2. Prerequisites</h2>
      <p style={P}>
        Confirm every item below before beginning installation. A significant proportion of reported issues trace back to an unmet prerequisite rather than a defect in the source code.
      </p>
      <DocTable
        headers={["Requirement", "Notes", "Verification command"]}
        rows={[
          ["Node.js", "Use the version stated in the Installation Guide.", "node -v"],
          ["npm", "Bundled with Node.js.", "npm -v"],
          ["Git", "Required for version control and delivery handling.", "git --version"],
          ["Shopify CLI", "Used for app linking and the development server.", "shopify version"],
          ["Shopify Partner account", "Required to create and link the Partner app.", "Partner Dashboard access"],
          ["Shopify development store", "Target store for installation and testing.", "Store admin access"],
          ["PostgreSQL database", "A reachable instance with a valid connection string.", "DATABASE_URL"],
          ["Environment variables", "All values in .env populated before first start.", "cat .env"],
          ["Project path", "Must not contain spaces in any directory name.", "Inspect the absolute path"],
        ]}
      />

      <h2 id="how-to-use-this-guide" data-doc-head="1" style={H2}>3. How to Use This Guide</h2>
      <p style={P}>
        Each issue is recorded under a unique reference so it can be cited precisely in support requests. Quote the reference (for example, DB-001) when contacting the development team.
      </p>
      <DocTable
        headers={["Prefix", "Category", "Covers"]}
        rows={[
          ["ENV", "Environment and dependencies", "Node, npm, shell behaviour, package installation"],
          ["CFG", "Configuration files", ".env values and Shopify TOML configuration"],
          ["DB", "Database and Prisma", "Connection, migration, and client generation"],
          ["SHP", "Shopify platform", "App linking, tunnelling, and authentication"],
        ]}
      />
      <p style={P}>Severity indicates the effect on installation progress:</p>
      <DocTable
        headers={["Severity", "Definition"]}
        rows={[
          ["High", "Installation cannot proceed until the issue is resolved."],
          ["Medium", "Installation is blocked at a specific step but a defined workaround exists."],
          ["Low", "Cosmetic or informational; installation continues unaffected."],
        ]}
      />

      <h2 id="quick-diagnostic-index" data-doc-head="1" style={H2}>4. Quick Diagnostic Index</h2>
      <p style={P}>Locate the observed symptom in the left column and go to the corresponding reference in Section 5.</p>
      <DocTable
        headers={["Observed symptom", "Reference", "Category"]}
        rows={[
          ["Warnings printed during package installation", "ENV-001", "Environment"],
          ["Ampersand chaining rejected by the shell", "ENV-002", "Environment"],
          ["Application will not start; no environment file present", "CFG-001", "Configuration"],
          ["Database connection string not configured", "CFG-002", "Configuration"],
          ["Startup fails due to a missing staging configuration file", "CFG-003", "Configuration"],
          ["Startup fails due to a missing app proxy section", "CFG-004", "Configuration"],
          ["Prisma migration or client generation fails", "DB-001", "Database"],
          ["The setup script is not available", "DB-002", "Database"],
          ["The Prisma command is not recognised", "DB-003", "Database"],
          ["Partner app cannot be linked", "SHP-001", "Shopify"],
          ["Tunnel address is unreachable", "SHP-002", "Shopify"],
          ["Repeated authentication prompts", "SHP-003", "Shopify"],
        ]}
      />

      <h2 id="troubleshooting-reference" data-doc-head="1" style={H2}>5. Troubleshooting Reference</h2>

      <h3 style={H3}>5.1 Environment and dependencies</h3>
      <IssueCard
        id="ENV-001"
        title="Warnings during package installation"
        severity="Low"
        symptom="Warning messages are printed to the terminal while dependencies are being installed."
        cause="Advisory notices emitted by third-party packages, typically relating to deprecated transitive dependencies."
        resolution="Continue with the installation. These warnings are informational and do not prevent the packages from being installed correctly."
        verification="Installation completes and the node_modules directory is created."
        notes="Report the output only if installation terminates with an error rather than a warning."
      />
      <IssueCard
        id="ENV-002"
        title="Command chaining rejected in PowerShell"
        severity="Low"
        symptom="A command that chains two operations with an ampersand pair is rejected by the shell."
        cause="Older versions of Windows PowerShell do not support the ampersand chaining operator used in the documented commands."
        resolution={
          <>
            Run each command separately, in the documented order.
            <Code lines={["npx prisma generate", "npx prisma migrate deploy"]} />
          </>
        }
        verification="Each command completes independently without a syntax error."
        notes="Alternatively, run the commands in Command Prompt, Git Bash, or Windows Terminal."
      />

      <h3 style={H3}>5.2 Configuration</h3>
      <IssueCard
        id="CFG-001"
        title="Environment file missing"
        severity="High"
        symptom="The application does not start and reports that required configuration is unavailable."
        cause="The environment file has not been created from the supplied template."
        resolution={
          <>
            Copy the supplied example file and populate every required value before starting the application:
            <Code lines={["cp .env.example .env"]} />
            Refer to the Installation Guide for the meaning of each variable.
          </>
        }
        verification="The .env file exists in the project root and no placeholder values remain."
        notes="Never commit the populated .env file to version control."
      />
      <IssueCard
        id="CFG-002"
        title="Database connection string not configured"
        severity="High"
        symptom="The application cannot establish a connection to the database."
        cause="The DATABASE_URL variable is absent, empty, or contains a placeholder value."
        resolution={
          <>
            Set a valid PostgreSQL connection string in the .env file:
            <Code lines={['DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"']} />
            Confirm the host is reachable from the machine running the application and that the credentials are correct.
          </>
        }
        verification="Prisma commands connect to the database without a connection error."
        notes="Managed database providers may require SSL parameters to be appended to the connection string."
      />
      <IssueCard
        id="CFG-003"
        title="Staging configuration file missing"
        severity="High"
        symptom="Startup fails because an expected Shopify application configuration file is not present."
        cause="The staging configuration file was not created or was excluded during transfer."
        resolution="Verify that all required configuration files are present in the project root as listed in the Installation Guide, and recreate any that are missing."
        verification="All required configuration files are present and the application proceeds past the startup check."
      />
      <IssueCard
        id="CFG-004"
        title="App proxy section missing"
        severity="High"
        symptom="The application fails to start, or storefront requests are not routed correctly."
        cause="The app proxy section is absent from the Shopify application configuration file."
        resolution="Add the app proxy section to the Shopify application configuration file using the values given in the Installation Guide, then restart the development server."
        verification="The application starts and storefront proxy requests resolve successfully."
        notes="The proxy prefix and subpath must match the values registered for the app in the Partner Dashboard."
      />

      <h3 style={H3}>5.3 Database and Prisma</h3>
      <IssueCard
        id="DB-001"
        title="Prisma bootstrap fails"
        severity="High"
        symptom="Migration or client generation terminates with an error before completing."
        cause="The absolute path to the project directory contains one or more spaces."
        resolution={
          <>
            Move the project to a path that contains no spaces in any directory name, then run the commands again:
            <Code lines={["npx prisma generate", "npx prisma migrate deploy"]} />
          </>
        }
        verification="Both commands complete successfully and the Prisma client is generated."
        notes="Paths under user profile directories often contain spaces. A short root-level path is recommended."
      />
      <IssueCard
        id="DB-002"
        title="Setup script unavailable"
        severity="Medium"
        symptom="The setup script cannot be executed."
        cause="The script is not defined in the current package configuration."
        resolution={
          <>
            Run the underlying commands directly, in this order:
            <Code lines={["npx prisma generate", "npx prisma migrate deploy"]} />
          </>
        }
        verification="The database schema is applied and the Prisma client is generated."
      />
      <IssueCard
        id="DB-003"
        title="Prisma command not recognised"
        severity="Medium"
        symptom="The shell reports that the Prisma command cannot be found."
        cause="The Prisma CLI is not installed globally and is therefore not on the system path."
        resolution={
          <>
            Invoke the locally installed CLI through npx rather than calling it directly:
            <Code lines={["npx prisma generate", "npx prisma migrate deploy"]} />
          </>
        }
        verification="The commands execute and report the Prisma version in use."
        notes="A global installation is not required and is not recommended, as it can diverge from the project version."
      />

      <h3 style={H3}>5.4 Shopify platform</h3>
      <IssueCard
        id="SHP-001"
        title="Partner app cannot be linked"
        severity="High"
        symptom="The application cannot be linked to a Shopify Partner app."
        cause="The session is authenticated against the wrong account, or the wrong Partner organisation is selected."
        resolution={
          <>
            Sign in with the correct Partner account, confirm the intended organisation is selected, and run the link command again:
            <Code lines={["npm run config:link"]} />
          </>
        }
        verification="The link completes and the configuration file is populated with the correct application identifier."
        notes="Where an account has access to several organisations, confirm the selection carefully at the prompt."
      />
      <IssueCard
        id="SHP-002"
        title="Tunnel address unreachable"
        severity="Medium"
        symptom="The generated tunnel address does not load in the browser."
        cause="The tunnel session has expired or was terminated with the development server."
        resolution={
          <>
            Restart the development server to establish a new tunnel:
            <Code lines={["npm run dev"]} />
            Use the newly generated address; the previous one is no longer valid.
          </>
        }
        verification="The new address loads the application and the embedded admin renders."
        notes="Tunnel addresses are temporary and change on each restart. Do not treat them as a fixed URL."
      />
      <IssueCard
        id="SHP-003"
        title="Repeated authentication prompts"
        severity="Medium"
        symptom="The user is returned to the login prompt repeatedly and the session does not persist."
        cause="The authentication session has expired, or it was established against a tunnel address that is no longer current."
        resolution={
          <>
            Stop the development server, start it again, and complete authentication once more:
            <Code lines={["npm run dev"]} />
            If the loop persists, clear the browser session for the store domain and repeat.
          </>
        }
        verification="Authentication completes once and the session persists across page navigation."
        notes="This condition frequently accompanies SHP-002. Resolve the tunnel first."
      />

      <h2 id="post-installation-verification" data-doc-head="1" style={H2}>6. Post-Installation Verification</h2>
      <p style={P}>
        Complete every check below before treating the installation as fully verified. Record the outcome against each item. Any failed check should be investigated using Section 5 or raised with the development team.
      </p>
      <DocTable
        headers={["Ref", "Check", "Expected result", "Outcome"]}
        rows={[
          ["V-01", "Dashboard", "The dashboard loads without error.", ""],
          ["V-02", "Quote List", "Existing quote requests are listed.", ""],
          ["V-03", "Quote Settings", "Settings load and can be saved.", ""],
          ["V-04", "Settings page", "The settings page renders in full.", ""],
          ["V-05", "Quote Form Builder", "The builder loads and fields can be edited.", ""],
          ["V-06", "Theme App Extension", "The extension appears and functions in the storefront.", ""],
          ["V-07", "Database connection", "Records are read and written successfully.", ""],
          ["V-08", "Email templates", "Templates render and test messages are dispatched.", ""],
          ["V-09", "Browser console", "No errors are reported in the console.", ""],
          ["V-10", "Server logs", "No unhandled exceptions are recorded at startup.", ""],
        ]}
      />

      <h2 id="qa-observations" data-doc-head="1" style={H2}>7. QA Observations</h2>
      <p style={{ ...P, fontWeight: 600, color: "rgb(13, 21, 38)" }}>
        During Fresh Installation QA validation, minor gaps were identified in the installation documentation and project configuration. The developer reviewed the installation jointly with QA and confirmed that the Installation Guide would be updated to include the missing steps. After the required configuration updates were applied, the application started successfully.
      </p>
      <p style={{ ...P, fontWeight: 600, color: "rgb(13, 21, 38)" }}>
        The QA validation confirmed that the installation could be completed after the identified configuration and documentation gaps were addressed. Functional verification should be recorded separately against the Post-Installation Verification checklist in Section 6.
      </p>
      <Callout
        borderColor="rgb(199, 210, 254)"
        background="rgb(240, 243, 255)"
        accentColor="rgb(47, 84, 235)"
        label="NOTE"
        icon={(
          <>
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
            <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
          </>
        )}
      >
        No defects in the application source code were identified during this validation cycle. All observations related to documentation completeness and local environment configuration.
      </Callout>

      <h2 id="escalation-and-support" data-doc-head="1" style={H2}>8. Escalation and Support</h2>
      <h3 style={H3}>8.1 Before raising a request</h3>
      <p style={P}>
        Complete the following self-checks. They resolve the majority of reported issues and, where they do not, they produce the information required to diagnose the problem.
      </p>
      <DocOrderedList
        items={[
          "Confirm every prerequisite in Section 2 is satisfied.",
          "Re-read the relevant section of the Installation Guide in full.",
          "Verify that all environment variables are present and correctly valued.",
          "Review the terminal output and server logs for the first error, not the last.",
          "Search the Quick Diagnostic Index in Section 4 for a matching symptom.",
        ]}
      />
      <h3 style={H3}>8.2 Information to include</h3>
      <p style={P}>Requests that omit this information cannot be triaged and will be returned for clarification.</p>
      <DocTable
        headers={["Item", "Detail required"]}
        rows={[
          ["Issue reference", "The reference from Section 5, where one applies."],
          ["Product version", "The version of the source code in use."],
          ["Operating system and shell", "For example, Windows 11 with PowerShell."],
          ["Runtime versions", "Output of node -v and npm -v."],
          ["Step reached", "The exact step in the Installation Guide at which the issue occurred."],
          ["Terminal output", "The complete error output as text, not as a partial excerpt."],
          ["Screenshots", "Screens showing the error state, where it is visible in the interface."],
          ["Actions already taken", "The resolutions already attempted and their outcome."],
        ]}
      />
      <h3 style={H3}>8.3 Contact</h3>
      <DocTable
        headers={["Support channel", "Detail"]}
        rows={[
          ["Support channel", "[Support email address]"],
          ["Hours of operation", "[Business hours and time zone]"],
          ["Target first response", "[Response target]"],
          ["Support entitlement", "As defined in the Commercial License Agreement."],
        ]}
      />
      <h3 style={H3}>Scope of support</h3>
      <p style={P}>
        Support covers the source code as delivered. Issues arising from buyer modifications, third-party hosting, or unrelated theme and app conflicts fall outside the scope of support, although guidance may be offered at the discretion of the development team.
      </p>

      <h2 id="appendix-a" data-doc-head="1" style={H2}>Appendix A — Command Reference</h2>
      <DocTable
        headers={["Command", "Purpose"]}
        rows={[
          ["npm install", "Install project dependencies."],
          ["npm run config:link", "Link the project to a Shopify Partner app."],
          ["npm run dev", "Start the development server and establish a tunnel."],
          ["npx prisma generate", "Generate the Prisma client from the schema."],
          ["npx prisma migrate deploy", "Apply pending migrations to the database."],
          ["cp .env.example .env", "Create the environment file from the supplied template."],
          ["node -v", "Report the installed Node.js version."],
          ["npm -v", "Report the installed npm version."],
        ]}
      />
    </DocPageShell>
  );
}
