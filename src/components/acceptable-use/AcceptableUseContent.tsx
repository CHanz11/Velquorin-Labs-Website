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
    <div className="mb-5 flex items-center gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-[9px] font-semibold text-violet-600">
        {number}
      </span>

      <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
        {title}
      </h2>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-7 text-slate-600"
        >
          <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AcceptableUseContent() {
  return (
    <section className="relative border-b border-slate-200 bg-white">
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[15%] top-0 h-[500px] w-[500px] rounded-full bg-violet-100/40 blur-[140px]" />
        <div className="absolute right-[5%] top-[35%] h-[420px] w-[420px] rounded-full bg-indigo-50/60 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                Acceptable Use
              </p>

              <nav aria-label="Acceptable Use Policy sections">
                <ul className="space-y-3">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex items-start gap-3 text-xs text-slate-600 transition-colors hover:text-violet-600"
                      >
                        <span className="w-5 shrink-0 text-[9px] text-slate-400 transition-colors group-hover:text-violet-500">
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
          <div className="min-w-0">
            {/* Intro */}
            <div className="mb-12 rounded-2xl border border-violet-200 bg-violet-50/40 p-6 shadow-sm sm:p-7">
              <p className="text-sm leading-7 text-slate-600">
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
              className="scroll-mt-28 border-b border-slate-200 pb-10"
            >
              <SectionHeading number="01" title="Purpose of This Policy" />

              <div className="space-y-4 text-sm leading-7 text-slate-600">
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
            <article
              id="permitted-use"
              className="scroll-mt-28 border-b border-slate-200 py-10"
            >
              <SectionHeading number="02" title="Permitted Use" />

              <p className="text-sm leading-7 text-slate-600">
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
            <article
              id="prohibited-use"
              className="scroll-mt-28 border-b border-slate-200 py-10"
            >
              <SectionHeading number="03" title="Prohibited Activities" />

              <p className="text-sm leading-7 text-slate-600">
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
            <article
              id="ai-use"
              className="scroll-mt-28 border-b border-slate-200 py-10"
            >
              <SectionHeading number="04" title="AI & Automated Systems" />

              <div className="space-y-4 text-sm leading-7 text-slate-600">
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
            <article
              id="security"
              className="scroll-mt-28 border-b border-slate-200 py-10"
            >
              <SectionHeading number="05" title="Security & System Abuse" />

              <p className="text-sm leading-7 text-slate-600">
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
            <article
              id="spam"
              className="scroll-mt-28 border-b border-slate-200 py-10"
            >
              <SectionHeading
                number="06"
                title="Spam & Unwanted Communications"
              />

              <div className="space-y-4 text-sm leading-7 text-slate-600">
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
            <article
              id="data"
              className="scroll-mt-28 border-b border-slate-200 py-10"
            >
              <SectionHeading number="07" title="Data & Privacy" />

              <p className="text-sm leading-7 text-slate-600">
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

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Additional information about our handling of personal
                information is available in our{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-violet-600 transition-colors hover:text-violet-700"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </article>

            {/* 08 */}
            <article
              id="intellectual-property"
              className="scroll-mt-28 border-b border-slate-200 py-10"
            >
              <SectionHeading number="08" title="Intellectual Property" />

              <div className="space-y-4 text-sm leading-7 text-slate-600">
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
            <article
              id="third-party"
              className="scroll-mt-28 border-b border-slate-200 py-10"
            >
              <SectionHeading number="09" title="Third-Party Services" />

              <div className="space-y-4 text-sm leading-7 text-slate-600">
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
            <article
              id="enforcement"
              className="scroll-mt-28 border-b border-slate-200 py-10"
            >
              <SectionHeading number="10" title="Enforcement" />

              <div className="space-y-4 text-sm leading-7 text-slate-600">
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

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Enforcement decisions may consider the nature, severity,
                duration, and impact of the activity, as well as applicable
                contractual and legal requirements.
              </p>
            </article>

            {/* 11 */}
            <article
              id="reporting"
              className="scroll-mt-28 border-b border-slate-200 py-10"
            >
              <SectionHeading number="11" title="Reporting Violations" />

              <p className="text-sm leading-7 text-slate-600">
                If you believe that Velquorin Labs services are being used in
                violation of this policy, please contact us with sufficient
                information for us to review the issue. Please do not send
                sensitive information unless it is necessary for the report.
              </p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-medium text-violet-700 transition-colors hover:border-violet-300 hover:bg-violet-100"
                >
                  Report an Issue →
                </Link>
              </div>
            </article>

            {/* 12 */}
            <article
              id="changes"
              className="scroll-mt-28 border-b border-slate-200 py-10"
            >
              <SectionHeading number="12" title="Changes to This Policy" />

              <div className="space-y-4 text-sm leading-7 text-slate-600">
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
            <article id="contact" className="scroll-mt-28 pt-10">
              <SectionHeading number="13" title="Contact Us" />

              <p className="text-sm leading-7 text-slate-600">
                If you have questions about this Acceptable Use Policy or need
                to report potential misuse of Velquorin Labs services, please
                contact us through our Contact page.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-medium text-violet-700 transition-colors hover:border-violet-300 hover:bg-violet-100"
                >
                  Contact Velquorin Labs →
                </Link>

                <Link
                  href="/terms-of-service"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-violet-300 hover:text-violet-700"
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