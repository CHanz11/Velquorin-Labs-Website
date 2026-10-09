
import Link from "next/link";

const sections = [
  { id: "what-are-cookies", number: "01", title: "What Are Cookies?" },
  { id: "how-we-use", number: "02", title: "How We May Use Cookies" },
  { id: "cookie-types", number: "03", title: "Types of Cookies" },
  { id: "essential", number: "04", title: "Essential Cookies" },
  { id: "preferences", number: "05", title: "Preference Cookies" },
  { id: "analytics", number: "06", title: "Analytics Cookies" },
  { id: "third-party", number: "07", title: "Third-Party Technologies" },
  { id: "choices", number: "08", title: "Your Cookie Choices" },
  { id: "browser-controls", number: "09", title: "Browser Controls" },
  { id: "signals", number: "10", title: "Privacy Signals" },
  { id: "retention", number: "11", title: "Cookie Retention" },
  { id: "changes", number: "12", title: "Changes to This Policy" },
  { id: "contact", number: "13", title: "Contact Us" },
];

function SectionHeading({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="cookie-policy-section-heading">
      <span className="cookie-policy-section-number">{number}</span>

      <h2 className="cookie-policy-section-title">{children}</h2>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="cookie-policy-bullet-list">
      {items.map((item) => (
        <li key={item} className="cookie-policy-bullet-item">
          <span className="cookie-policy-bullet-dot" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CookiePolicyContent() {
  const articleClass = "cookie-policy-article";
  const contentClass = "cookie-policy-article-body";

  return (
    <section className="cookie-policy-content-section">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="cookie-policy-content-background"
      >
        <div className="cookie-policy-content-glow" />
      </div>

      <div className="cookie-policy-content-container">
        {/* Table of contents */}
        <aside className="cookie-policy-sidebar">
          <div className="cookie-policy-sidebar-inner">
            <p className="cookie-policy-sidebar-title">
              Cookie Policy
            </p>

            <nav aria-label="Cookie Policy sections">
              <ul className="cookie-policy-sidebar-list">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="cookie-policy-sidebar-link"
                    >
                      <span className="cookie-policy-sidebar-number">
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
        <div className="cookie-policy-main">
          {/* Introduction */}
          <div className="cookie-policy-intro">
            <p className="cookie-policy-intro-text">
              This Cookie Policy explains how Velquorin Labs may use cookies
              and similar technologies on our website. It should be read
              together with our Privacy Policy, which explains more broadly how
              we collect, use, and protect personal information.
            </p>
          </div>

          {/* 01 */}
          <article
            id="what-are-cookies"
            className={`${articleClass} cookie-policy-article-first`}
          >
            <SectionHeading number="01">
              What Are Cookies?
            </SectionHeading>

            <div className={contentClass}>
              <p>
                Cookies are small text files or pieces of information that a
                website may store on your browser or device when you visit it.
                They can help websites remember information about your visit
                and provide certain functionality.
              </p>

              <p>
                Similar technologies may include local storage, pixels, tags,
                scripts, or other technologies that perform related functions.
                In this policy, we may refer to these technologies collectively
                as &quot;cookies.&quot;
              </p>
            </div>
          </article>

          {/* 02 */}
          <article id="how-we-use" className={articleClass}>
            <SectionHeading number="02">
              How We May Use Cookies
            </SectionHeading>

            <div className={contentClass}>
              <p>
                Velquorin Labs may use cookies where they are necessary to
                operate our website or where we introduce features that benefit
                from remembering preferences, understanding website usage, or
                supporting integrations.
              </p>

              <p>
                Depending on the technologies enabled on our website, cookies
                may help us:
              </p>

              <BulletList
                items={[
                  "Operate and secure website functionality",
                  "Remember website or interface preferences",
                  "Understand how visitors interact with our website",
                  "Identify technical problems and improve performance",
                  "Support integrations with services used by the website",
                ]}
              />
            </div>
          </article>

          {/* 03 */}
          <article id="cookie-types" className={articleClass}>
            <SectionHeading number="03">
              Types of Cookies
            </SectionHeading>

            <div className={contentClass}>
              <p>
                Cookies can be categorized according to their purpose and how
                long they remain on a device.
              </p>

              <BulletList
                items={[
                  "Session cookies — generally expire when you close your browser",
                  "Persistent cookies — may remain on your device for a defined period or until removed",
                  "First-party cookies — placed by the website you are visiting",
                  "Third-party cookies — placed or controlled by an external service provider",
                ]}
              />

              <p>
                The particular cookies present on the Velquorin Labs website
                may change as website features and integrations evolve.
              </p>
            </div>
          </article>

          {/* 04 */}
          <article id="essential" className={articleClass}>
            <SectionHeading number="04">
              Essential Cookies
            </SectionHeading>

            <div className={contentClass}>
              <p>
                Essential cookies are used when necessary for core website
                functions, security, network management, or features that you
                specifically request.
              </p>

              <p>
                Because these technologies are necessary for the website or
                requested functionality to operate, they may not always be
                subject to optional cookie preferences.
              </p>
            </div>
          </article>

          {/* 05 */}
          <article id="preferences" className={articleClass}>
            <SectionHeading number="05">
              Preference Cookies
            </SectionHeading>

            <div className={contentClass}>
              <p>
                Preference or functionality cookies can allow a website to
                remember choices you make, such as interface settings or other
                preferences, so those choices do not need to be selected again
                on every visit.
              </p>

              <p>
                Velquorin Labs may use these technologies if website features
                requiring saved preferences are introduced.
              </p>
            </div>
          </article>

          {/* 06 */}
          <article id="analytics" className={articleClass}>
            <SectionHeading number="06">
              Analytics Cookies
            </SectionHeading>

            <div className={contentClass}>
              <p>
                Analytics technologies can help website operators understand
                how visitors use a website, such as which pages are visited,
                how visitors navigate between pages, and whether technical
                errors occur.
              </p>

              <p>
                If Velquorin Labs introduces analytics technologies that use
                non-essential cookies or similar tracking technologies, we may
                provide appropriate information and choices where required by
                applicable law.
              </p>
            </div>
          </article>

          {/* 07 */}
          <article id="third-party" className={articleClass}>
            <SectionHeading number="07">
              Third-Party Technologies
            </SectionHeading>

            <div className={contentClass}>
              <p>
                Some website features may rely on third-party services such as
                hosting providers, embedded content, payment services,
                analytics providers, security services, or other integrations.
              </p>

              <p>
                These providers may use their own cookies or similar
                technologies when their services are enabled. Their use of
                information is governed by their own privacy and cookie
                practices.
              </p>

              <p>
                We aim to evaluate third-party services before integrating them
                into our website and to provide additional disclosures where
                appropriate.
              </p>
            </div>
          </article>

          {/* 08 */}
          <article id="choices" className={articleClass}>
            <SectionHeading number="08">
              Your Cookie Choices
            </SectionHeading>

            <div className={contentClass}>
              <p>
                Where optional cookies require a choice or consent under
                applicable law, Velquorin Labs may provide controls that allow
                you to accept, reject, or manage those cookies.
              </p>

              <p>
                Rejecting optional cookies should not prevent access to basic
                website content, although some optional functionality may work
                differently or become unavailable.
              </p>

              <p>
                We may update our cookie controls as the technologies used on
                the website change.
              </p>
            </div>
          </article>

          {/* 09 */}
          <article id="browser-controls" className={articleClass}>
            <SectionHeading number="09">
              Browser Controls
            </SectionHeading>

            <div className={contentClass}>
              <p>
                Most web browsers provide settings that allow you to view,
                block, restrict, or delete cookies. The available controls and
                instructions vary by browser and device.
              </p>

              <p>
                Blocking all cookies may affect the operation of websites or
                prevent certain features from functioning as intended.
              </p>

              <p>
                You can review your browser&apos;s privacy or cookie settings
                for information about the controls available to you.
              </p>
            </div>
          </article>

          {/* 10 */}
          <article id="signals" className={articleClass}>
            <SectionHeading number="10">
              Privacy Signals
            </SectionHeading>

            <div className={contentClass}>
              <p>
                Some browsers and privacy tools can transmit preference signals,
                including signals intended to communicate choices regarding
                certain forms of tracking or data sharing.
              </p>

              <p>
                Our response to these signals may depend on the technologies
                used by our website and applicable legal requirements. As our
                website evolves, we may update this policy to explain how
                supported privacy signals are handled.
              </p>
            </div>
          </article>

          {/* 11 */}
          <article id="retention" className={articleClass}>
            <SectionHeading number="11">
              Cookie Retention
            </SectionHeading>

            <div className={contentClass}>
              <p>
                The length of time a cookie remains on your device depends on
                its purpose and configuration. Some cookies last only for a
                browser session, while others may remain for a longer period.
              </p>

              <p>
                Where Velquorin Labs controls cookie retention periods, we aim
                to retain cookies only for as long as reasonably necessary for
                their intended purpose.
              </p>
            </div>
          </article>

          {/* 12 */}
          <article id="changes" className={articleClass}>
            <SectionHeading number="12">
              Changes to This Cookie Policy
            </SectionHeading>

            <div className={contentClass}>
              <p>
                We may update this Cookie Policy as our website, technologies,
                service providers, or legal obligations change.
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
            className="cookie-policy-contact-article"
          >
            <SectionHeading number="13">
              Contact Us
            </SectionHeading>

            <div className="cookie-policy-contact-body">
              <p>
                If you have questions about this Cookie Policy or how
                Velquorin Labs uses cookies and similar technologies, please
                contact us through our Contact page.
              </p>

              <div className="cookie-policy-contact-actions">
                <Link
                  href="/contact"
                  className="cookie-policy-contact-link cookie-policy-contact-link-primary"
                >
                  Contact Velquorin Labs →
                </Link>

                <Link
                  href="/privacy-policy"
                  className="cookie-policy-contact-link cookie-policy-contact-link-secondary"
                >
                  Read Privacy Policy →
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
