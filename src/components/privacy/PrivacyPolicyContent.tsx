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
    <section className="border-b border-slate-800/80 bg-[#050817]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* Side navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                Privacy Policy
              </p>

              <nav aria-label="Privacy Policy sections">
                <ul className="space-y-3">
                  {sections.map((section) => (
                    <li key={section.number}>
                      <a
                        href={`#section-${section.number}`}
                        className="text-xs text-slate-500 transition-colors hover:text-violet-400"
                      >
                        {section.number}. {section.title}
                      </a>
                    </li>
                  ))}

                  <li>
                    <a
                      href="#contact-privacy"
                      className="text-xs text-slate-500 transition-colors hover:text-violet-400"
                    >
                      13. Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          {/* Policy */}
          <div className="max-w-3xl">
            <div className="mb-14 rounded-2xl border border-violet-500/20 bg-violet-500/[0.04] p-6 sm:p-8">
              <p className="text-sm leading-7 text-slate-400">
                Velquorin Labs respects your privacy. This policy describes
                the types of information we may collect, why we use it, when
                it may be shared, and the choices that may be available to
                you.
              </p>
            </div>

            <div className="space-y-0">
              {sections.map((section) => (
                <article
                  id={`section-${section.number}`}
                  key={section.number}
                  className="scroll-mt-28 border-b border-slate-800/80 py-10 first:pt-0"
                >
                  <div className="mb-5 flex items-start gap-4">
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/5 text-[10px] font-semibold text-violet-300">
                      {section.number}
                    </span>

                    <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-4 pl-0 text-sm leading-7 text-slate-400 sm:pl-12 [&_li]:relative [&_li]:pl-5 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[11px] [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-violet-500 [&_ul]:space-y-2">
                    {section.content}
                  </div>
                </article>
              ))}

              {/* Contact */}
              <article
                id="contact-privacy"
                className="scroll-mt-28 pt-10"
              >
                <div className="mb-5 flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/5 text-[10px] font-semibold text-violet-300">
                    13
                  </span>

                  <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    Contact Us
                  </h2>
                </div>

                <div className="space-y-4 text-sm leading-7 text-slate-400 sm:pl-12">
                  <p>
                    If you have questions about this Privacy Policy or would
                    like to make a privacy-related request, please contact
                    Velquorin Labs through our Contact page.
                  </p>

                  <a
                    href="/contact"
                    className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/5 px-5 py-2.5 text-xs font-semibold text-violet-300 transition hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-violet-200"
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