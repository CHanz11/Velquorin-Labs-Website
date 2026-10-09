const sections = [
  {
    number: "01",
    title: "Information We Collect",
    content: (
      <>
        <p>
          We may collect information that you provide directly to Velquorin
          Labs when you contact us, request information, inquire about our
          services, submit a form, or otherwise communicate with us.
        </p>

        <p>This information may include:</p>

        <ul>
          <li>Your name</li>
          <li>Email address</li>
          <li>Company or business name</li>
          <li>Project requirements and service interests</li>
          <li>Messages and other information you choose to provide</li>
        </ul>

        <p>
          We may also collect limited technical information when you visit our
          website, such as browser type, device information, referring pages,
          and general usage information when these technologies are enabled.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "How We Use Information",
    content: (
      <>
        <p>
          Velquorin Labs may use information we collect to operate our
          business, communicate with you, and provide or improve our services.
        </p>

        <p>We may use information to:</p>

        <ul>
          <li>Respond to inquiries and project requests</li>
          <li>Understand your business requirements</li>
          <li>Provide requested services and customer support</li>
          <li>Improve our website, products, and services</li>
          <li>Maintain the security and reliability of our systems</li>
          <li>Comply with applicable legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    number: "03",
    title: "AI-Powered Services",
    content: (
      <>
        <p>
          Velquorin Labs develops and provides AI-powered solutions that may
          process information in order to perform requested functions. These
          solutions may include AI chatbots, automation systems,
          conversational forms, and other custom AI experiences.
        </p>

        <p>
          Depending on the service, information may be processed by technology
          providers that help us operate AI, hosting, automation, analytics,
          communication, or related infrastructure.
        </p>

        <p>
          The information processed by a specific client solution may also be
          governed by agreements between Velquorin Labs and that client.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "How We Share Information",
    content: (
      <>
        <p>
          We do not sell personal information. We may share information with
          service providers when reasonably necessary to operate our website,
          deliver our services, maintain infrastructure, or support business
          operations.
        </p>

        <p>These providers may include services for:</p>

        <ul>
          <li>Website and cloud hosting</li>
          <li>AI and automation infrastructure</li>
          <li>Email and business communications</li>
          <li>Analytics and performance monitoring</li>
          <li>Payment processing when applicable</li>
        </ul>

        <p>
          We may also disclose information when required by applicable law,
          legal process, or when reasonably necessary to protect our rights,
          users, systems, or services.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Cookies and Similar Technologies",
    content: (
      <>
        <p>
          Our website may use cookies or similar technologies that are
          necessary for website functionality, security, preferences,
          analytics, or performance.
        </p>

        <p>
          If we introduce non-essential analytics, advertising, or other
          technologies that require consent, we may provide appropriate cookie
          controls where required.
        </p>

        <p>
          Additional information about our use of cookies will be available in
          our Cookie Policy.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Data Security",
    content: (
      <>
        <p>
          We use reasonable administrative, technical, and organizational
          measures designed to protect information against unauthorized
          access, loss, misuse, alteration, or disclosure.
        </p>

        <p>
          However, no method of transmitting or storing information can be
          guaranteed to be completely secure. We therefore cannot guarantee
          absolute security.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain information for as long as reasonably necessary to fulfill
          the purposes described in this Privacy Policy, provide our services,
          maintain appropriate business records, resolve disputes, enforce
          agreements, and comply with applicable legal obligations.
        </p>

        <p>
          Retention periods may vary depending on the type of information and
          the service involved.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Your Privacy Rights",
    content: (
      <>
        <p>
          Depending on where you live, applicable privacy laws may provide
          rights relating to your personal information. These may include the
          ability to request access, correction, deletion, restriction, or
          other actions concerning your information.
        </p>

        <p>
          Certain rights may be subject to legal exceptions, verification
          requirements, or other limitations under applicable law.
        </p>

        <p>
          You may contact us if you would like to make a privacy-related
          request.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "International Data Processing",
    content: (
      <>
        <p>
          Velquorin Labs may use technology and service providers located in
          different countries. As a result, information may be processed or
          stored outside the country where it was originally collected.
        </p>

        <p>
          Where required, we take appropriate steps designed to protect
          information when it is transferred internationally.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Third-Party Services and Links",
    content: (
      <>
        <p>
          Our website or services may contain links to or integrations with
          third-party websites, platforms, or services.
        </p>

        <p>
          Their privacy practices are governed by their own policies.
          Velquorin Labs is not responsible for the privacy practices or
          content of third-party services that we do not control.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Children's Privacy",
    content: (
      <>
        <p>
          Velquorin Labs&apos; website and business services are not intended
          for children, and we do not knowingly seek to collect personal
          information from children through this website.
        </p>

        <p>
          If we learn that information from a child has been collected in a
          manner that requires removal under applicable law, we will take
          appropriate steps to address it.
        </p>
      </>
    ),
  },
  {
    number: "12",
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy as our business, services,
          technologies, or legal obligations change.
        </p>

        <p>
          When we make changes, we may update the &quot;Last updated&quot;
          date displayed on this page. We encourage visitors to review this
          policy periodically.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyContent() {
  return (
    <section className="privacy-content-section">
      <div className="privacy-content-container">
        <div className="privacy-content-layout">
          {/* Side navigation */}
          <aside className="privacy-content-sidebar">
            <div className="privacy-content-sidebar-inner">
              <p className="privacy-content-sidebar-title">
                Privacy Policy
              </p>

              <nav aria-label="Privacy Policy sections">
                <ul className="privacy-content-nav-list">
                  {sections.map((section) => (
                    <li key={section.number}>
                      <a href={`#section-${section.number}`}>
                        {section.number}. {section.title}
                      </a>
                    </li>
                  ))}

                  <li>
                    <a href="#contact-privacy">13. Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          {/* Policy content */}
          <div className="privacy-content-main">
            {/* Introduction */}
            <div className="privacy-content-intro">
              <p>
                Velquorin Labs respects your privacy. This policy describes
                the types of information we may collect, why we use it, when
                it may be shared, and the choices that may be available to
                you.
              </p>
            </div>

            {/* Privacy sections */}
            <div className="privacy-content-sections">
              {sections.map((section) => (
                <article
                  id={`section-${section.number}`}
                  key={section.number}
                  className="privacy-content-article"
                >
                  <div className="privacy-content-article-heading">
                    <span className="privacy-content-number">
                      {section.number}
                    </span>

                    <h2>{section.title}</h2>
                  </div>

                  <div className="privacy-content-article-body">
                    {section.content}
                  </div>
                </article>
              ))}

              {/* Contact */}
              <article
                id="contact-privacy"
                className="privacy-content-contact"
              >
                <div className="privacy-content-article-heading">
                  <span className="privacy-content-number">13</span>

                  <h2>Contact Us</h2>
                </div>

                <div className="privacy-content-contact-body">
                  <p>
                    If you have questions about this Privacy Policy or would
                    like to make a privacy-related request, please contact
                    Velquorin Labs through our Contact page.
                  </p>

                  <a
                    href="/contact"
                    className="privacy-content-contact-link"
                  >
                    Contact Velquorin Labs →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}