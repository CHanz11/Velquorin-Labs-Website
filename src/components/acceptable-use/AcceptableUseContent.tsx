import Link from "next/link";

const sections = [
  { id: "purpose", number: "01", title: "Purpose of This Policy" },
  { id: "permitted-use", number: "02", title: "Permitted Use" },
  { id: "prohibited-use", number: "03", title: "Prohibited Activities" },
  { id: "ai-use", number: "04", title: "AI & Automated Systems" },
  { id: "security", number: "05", title: "Security & System Abuse" },
  { id: "spam", number: "06", title: "Spam & Unwanted Communications" },
  { id: "data", number: "07", title: "Data & Privacy" },
  {
    id: "intellectual-property",
    number: "08",
    title: "Intellectual Property",
  },
  { id: "third-party", number: "09", title: "Third-Party Services" },
  { id: "enforcement", number: "10", title: "Enforcement" },
  { id: "reporting", number: "11", title: "Reporting Violations" },
  { id: "changes", number: "12", title: "Changes to This Policy" },
  { id: "contact", number: "13", title: "Contact Us" },
];

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="acceptable-use-section-heading">
      <span className="acceptable-use-section-number">{number}</span>
      <h2 className="acceptable-use-section-title">{title}</h2>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="acceptable-use-bullet-list">
      {items.map((item) => (
        <li key={item} className="acceptable-use-bullet-item">
          <span className="acceptable-use-bullet-dot" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AcceptableUseContent() {
  return (
    <section className="acceptable-use-content-section">
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="acceptable-use-content-background"
      >
        <div className="acceptable-use-content-glow acceptable-use-content-glow-primary" />
        <div className="acceptable-use-content-glow acceptable-use-content-glow-secondary" />
      </div>

      <div className="acceptable-use-content-container">
        <div className="acceptable-use-content-layout">
          {/* Table of contents */}
          <aside className="acceptable-use-sidebar">
            <div className="acceptable-use-sidebar-inner">
              <p className="acceptable-use-sidebar-title">
                Acceptable Use
              </p>

              <nav aria-label="Acceptable Use Policy sections">
                <ul className="acceptable-use-sidebar-list">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="acceptable-use-sidebar-link"
                      >
                        <span className="acceptable-use-sidebar-number">
                          {section.number}
                        </span>
                        <span>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Policy content */}
          <div className="acceptable-use-main">
            {/* Introduction */}
            <div className="acceptable-use-intro">
              <p className="acceptable-use-body-text">
                This Acceptable Use Policy describes the rules for accessing
                and using Velquorin Labs websites, AI solutions, automation
                systems, digital services, and related technology. It is
                intended to help protect our users, customers, systems, and
                third parties from misuse, abuse, and unlawful activity.
              </p>
            </div>

            {/* 01 */}
            <article
              id="purpose"
              className="acceptable-use-article acceptable-use-article-first"
            >
              <SectionHeading number="01" title="Purpose of This Policy" />

              <div className="acceptable-use-prose">
                <p>
                  Velquorin Labs provides AI-powered and digital solutions
                  designed to help businesses communicate with customers,
                  automate workflows, collect information, and improve digital
                  operations.
                </p>

                <p>
                  You must use our website and services responsibly, lawfully,
                  and in a way that does not harm Velquorin Labs, our
                  customers, other users, or third parties.
                </p>
              </div>
            </article>

            {/* 02 */}
            <article id="permitted-use" className="acceptable-use-article">
              <SectionHeading number="02" title="Permitted Use" />

              <p className="acceptable-use-body-text">
                You may use Velquorin Labs services for legitimate business,
                professional, and other lawful purposes in accordance with
                applicable agreements and policies.
              </p>

              <BulletList
                items={[
                  "Providing customer support and business information through AI chatbots.",
                  "Automating legitimate business workflows and operational processes.",
                  "Collecting customer inquiries, leads, or form submissions with appropriate notice and consent.",
                  "Creating and maintaining business websites and digital experiences.",
                  "Using custom AI solutions for lawful business purposes.",
                ]}
              />
            </article>

            {/* 03 */}
            <article id="prohibited-use" className="acceptable-use-article">
              <SectionHeading number="03" title="Prohibited Activities" />

              <p className="acceptable-use-body-text">
                You may not use Velquorin Labs services to engage in,
                facilitate, promote, or support unlawful, harmful, fraudulent,
                abusive, or deceptive activity.
              </p>

              <BulletList
                items={[
                  "Violating applicable laws, regulations, court orders, or legal rights.",
                  "Committing or facilitating fraud, scams, impersonation, or deceptive practices.",
                  "Harassing, threatening, exploiting, or harming another person or organization.",
                  "Distributing malware, malicious code, phishing content, or other harmful software.",
                  "Attempting to gain unauthorized access to accounts, systems, networks, or data.",
                  "Using our services to infringe intellectual property, privacy, confidentiality, or other legal rights.",
                  "Using the services to intentionally generate or distribute illegal content.",
                ]}
              />
            </article>

            {/* 04 */}
            <article id="ai-use" className="acceptable-use-article">
              <SectionHeading number="04" title="AI & Automated Systems" />

              <div className="acceptable-use-prose">
                <p>
                  Velquorin Labs services may include artificial intelligence,
                  conversational AI, automated workflows, data analysis, and
                  other automated functionality.
                </p>

                <p>
                  You are responsible for configuring and using these systems
                  appropriately for your business and for reviewing important
                  outputs before relying on them where human judgment is
                  necessary.
                </p>
              </div>

              <BulletList
                items={[
                  "Do not intentionally use AI features to create unlawful, fraudulent, malicious, or harmful content.",
                  "Do not misrepresent AI-generated output as professional advice when qualified professional review is required.",
                  "Do not use automated systems to impersonate individuals deceptively or mislead users about material facts.",
                  "Do not intentionally bypass safeguards, access controls, usage limits, or security mechanisms.",
                ]}
              />
            </article>

            {/* 05 */}
            <article id="security" className="acceptable-use-article">
              <SectionHeading number="05" title="Security & System Abuse" />

              <p className="acceptable-use-body-text">
                You must not interfere with the security, availability,
                integrity, or normal operation of Velquorin Labs systems or
                services.
              </p>

              <BulletList
                items={[
                  "Attempting unauthorized access to servers, databases, accounts, APIs, or infrastructure.",
                  "Introducing viruses, malware, malicious scripts, or destructive code.",
                  "Conducting unauthorized vulnerability scanning, penetration testing, or security testing.",
                  "Circumventing authentication, access restrictions, subscription limits, or technical safeguards.",
                  "Intentionally overloading, disrupting, or degrading our infrastructure or services.",
                ]}
              />
            </article>

            {/* 06 */}
            <article id="spam" className="acceptable-use-article">
              <SectionHeading
                number="06"
                title="Spam & Unwanted Communications"
              />

              <div className="acceptable-use-prose">
                <p>
                  Our services must not be used to send unlawful spam,
                  unsolicited bulk communications, abusive messages, or
                  deceptive marketing communications.
                </p>

                <p>
                  If you use automated communication features, you are
                  responsible for obtaining any consent required by applicable
                  law and for providing appropriate unsubscribe or opt-out
                  mechanisms where required.
                </p>
              </div>
            </article>

            {/* 07 */}
            <article id="data" className="acceptable-use-article">
              <SectionHeading number="07" title="Data & Privacy" />

              <p className="acceptable-use-body-text">
                You are responsible for ensuring that information submitted to
                or processed through your use of our services is collected and
                used lawfully.
              </p>

              <BulletList
                items={[
                  "Do not collect or process personal information without an appropriate legal basis where one is required.",
                  "Do not use our services to unlawfully obtain confidential, private, or sensitive information.",
                  "Provide appropriate privacy notices and obtain consent where required.",
                  "Protect account credentials, API keys, access tokens, and other authentication information.",
                ]}
              />

              <p className="acceptable-use-body-text acceptable-use-spaced-paragraph">
                Additional information about our handling of personal
                information is available in our{" "}
                <Link
                  href="/privacy-policy"
                  className="acceptable-use-inline-link"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </article>

            {/* 08 */}
            <article
              id="intellectual-property"
              className="acceptable-use-article"
            >
              <SectionHeading number="08" title="Intellectual Property" />

              <div className="acceptable-use-prose">
                <p>
                  You may not use Velquorin Labs services to knowingly violate
                  copyrights, trademarks, patents, trade secrets, or other
                  intellectual property rights.
                </p>

                <p>
                  You are responsible for ensuring that content, data,
                  documents, media, and other materials you provide for use
                  with our services may lawfully be used for the intended
                  purpose.
                </p>
              </div>
            </article>

            {/* 09 */}
            <article id="third-party" className="acceptable-use-article">
              <SectionHeading number="09" title="Third-Party Services" />

              <div className="acceptable-use-prose">
                <p>
                  Velquorin Labs services may connect with third-party
                  platforms, APIs, AI providers, payment services, email
                  systems, websites, or other external services.
                </p>

                <p>
                  Your use of third-party services may be subject to their own
                  terms, policies, restrictions, and acceptable use
                  requirements. You are responsible for complying with those
                  requirements when using an integration.
                </p>
              </div>
            </article>

            {/* 10 */}
            <article id="enforcement" className="acceptable-use-article">
              <SectionHeading number="10" title="Enforcement" />

              <div className="acceptable-use-prose">
                <p>
                  If we reasonably determine that use of our services violates
                  this policy, applicable law, or creates a material security
                  or operational risk, Velquorin Labs may take appropriate
                  action.
                </p>
              </div>

              <BulletList
                items={[
                  "Requesting that prohibited activity be stopped or corrected.",
                  "Restricting or suspending access to affected features or services.",
                  "Terminating access where permitted under applicable agreements.",
                  "Preserving information where reasonably necessary for security, fraud prevention, dispute resolution, or legal compliance.",
                  "Cooperating with lawful requests from appropriate authorities when legally required.",
                ]}
              />

              <p className="acceptable-use-body-text acceptable-use-spaced-paragraph">
                Enforcement decisions may consider the nature, severity,
                duration, and impact of the activity, as well as applicable
                contractual and legal requirements.
              </p>
            </article>

            {/* 11 */}
            <article id="reporting" className="acceptable-use-article">
              <SectionHeading number="11" title="Reporting Violations" />

              <p className="acceptable-use-body-text">
                If you believe that Velquorin Labs services are being used in
                violation of this policy, please contact us with sufficient
                information for us to review the issue. Please do not send
                sensitive information unless it is necessary for the report.
              </p>

              <div className="acceptable-use-action">
                <Link
                  href="/contact"
                  className="acceptable-use-action-link acceptable-use-action-primary"
                >
                  Report an Issue →
                </Link>
              </div>
            </article>

            {/* 12 */}
            <article id="changes" className="acceptable-use-article">
              <SectionHeading number="12" title="Changes to This Policy" />

              <div className="acceptable-use-prose">
                <p>
                  We may update this Acceptable Use Policy as our services,
                  technologies, security practices, or legal obligations
                  change.
                </p>

                <p>
                  When we update this policy, we may revise the &quot;Last
                  updated&quot; date shown on this page. Where appropriate or
                  legally required, we may provide additional notice about
                  material changes.
                </p>
              </div>
            </article>

            {/* 13 */}
            <article
              id="contact"
              className="acceptable-use-contact-article"
            >
              <SectionHeading number="13" title="Contact Us" />

              <p className="acceptable-use-body-text">
                If you have questions about this Acceptable Use Policy or need
                to report potential misuse of Velquorin Labs services, please
                contact us through our Contact page.
              </p>

              <div className="acceptable-use-contact-actions">
                <Link
                  href="/contact"
                  className="acceptable-use-action-link acceptable-use-action-primary"
                >
                  Contact Velquorin Labs →
                </Link>

                <Link
                  href="/terms-of-service"
                  className="acceptable-use-action-link acceptable-use-action-secondary"
                >
                  Read Terms of Service →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
