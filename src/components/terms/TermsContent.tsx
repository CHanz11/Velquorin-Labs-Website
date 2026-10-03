import Link from "next/link";

const sections = [
  { id: "acceptance", number: "01", title: "Acceptance of Terms" },
  { id: "services", number: "02", title: "Our Services" },
  { id: "eligibility", number: "03", title: "Eligibility" },
  { id: "responsibilities", number: "04", title: "User Responsibilities" },
  { id: "acceptable-use", number: "05", title: "Acceptable Use" },
  { id: "ai-services", number: "06", title: "AI-Powered Services" },
  { id: "client-content", number: "07", title: "Client Content and Data" },
  { id: "third-party", number: "08", title: "Third-Party Services" },
  { id: "intellectual-property", number: "09", title: "Intellectual Property" },
  { id: "payments", number: "10", title: "Payments and Subscriptions" },
  { id: "termination", number: "11", title: "Suspension and Termination" },
  { id: "availability", number: "12", title: "Service Availability" },
  { id: "disclaimers", number: "13", title: "Disclaimers" },
  { id: "liability", number: "14", title: "Limitation of Liability" },
  { id: "indemnification", number: "15", title: "Indemnification" },
  { id: "changes", number: "16", title: "Changes to These Terms" },
  { id: "governing-law", number: "17", title: "Governing Law" },
  { id: "contact", number: "18", title: "Contact Us" },
];

function SectionHeading({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 text-[10px] font-medium text-violet-300">
        {number}
      </span>

      <h2 className="text-xl font-semibold tracking-tight text-white">
        {children}
      </h2>
    </div>
  );
}

export default function TermsContent() {
  return (
    <section className="border-b border-slate-800 bg-[#050817]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:px-10 lg:py-24">
        {/* Table of contents */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-slate-500">
            Terms of Service
          </p>

          <nav aria-label="Terms of Service sections">
            <ul className="space-y-2.5">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group flex items-start gap-2 text-xs leading-5 text-slate-500 transition-colors hover:text-violet-300"
                  >
                    <span className="w-5 shrink-0 text-slate-600 group-hover:text-violet-400">
                      {section.number}
                    </span>

                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Terms */}
        <div className="min-w-0">
          {/* Introduction */}
          <div className="mb-10 rounded-2xl border border-slate-800 bg-[#0b1023]/70 p-6 sm:p-7">
            <p className="text-sm leading-7 text-slate-400">
              These Terms of Service (&quot;Terms&quot;) govern your access to
              and use of the Velquorin Labs website and the services we provide.
              By accessing our website, communicating with us about a project,
              or using our services, you agree to these Terms.
            </p>
          </div>

          {/* 01 */}
          <article
            id="acceptance"
            className="scroll-mt-28 border-b border-slate-800 py-9 first:pt-0"
          >
            <SectionHeading number="01">Acceptance of Terms</SectionHeading>

            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>
                By accessing or using the Velquorin Labs website or services,
                you acknowledge that you have read, understood, and agree to be
                bound by these Terms.
              </p>

              <p>
                If you are using our services on behalf of a company,
                organization, or other entity, you represent that you have the
                authority to accept these Terms on its behalf.
              </p>

              <p>
                If you do not agree with these Terms, you should not use our
                services.
              </p>
            </div>
          </article>

          {/* 02 */}
          <article
            id="services"
            className="scroll-mt-28 border-b border-slate-800 py-9"
          >
            <SectionHeading number="02">Our Services</SectionHeading>

            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>
                Velquorin Labs develops and provides digital and AI-powered
                solutions for businesses. Depending on the project or service,
                our work may include:
              </p>

              <ul className="space-y-2 pl-1">
                {[
                  "AI chatbots and conversational AI experiences",
                  "AI automation and business workflow solutions",
                  "Conversational forms and information collection systems",
                  "Website design, development, and maintenance",
                  "Custom AI and digital solutions",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p>
                Specific features, deliverables, timelines, pricing, and other
                project requirements may be described separately in a proposal,
                agreement, order, subscription, or other written arrangement.
              </p>
            </div>
          </article>

          {/* 03 */}
          <article
            id="eligibility"
            className="scroll-mt-28 border-b border-slate-800 py-9"
          >
            <SectionHeading number="03">Eligibility</SectionHeading>

            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>
                You may use our services only if you are legally able to enter
                into a binding agreement under applicable law.
              </p>

              <p>
                If you use Velquorin Labs on behalf of a business or
                organization, you are responsible for ensuring that your use is
                authorized by that organization.
              </p>
            </div>
          </article>

          {/* 04 */}
          <article
            id="responsibilities"
            className="scroll-mt-28 border-b border-slate-800 py-9"
          >
            <SectionHeading number="04">User Responsibilities</SectionHeading>

            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>
                You are responsible for the information, instructions, content,
                credentials, permissions, and other materials you provide to us
                in connection with our services.
              </p>

              <p>You agree to:</p>

              <ul className="space-y-2 pl-1">
                {[
                  "Provide information that is accurate to the best of your knowledge",
                  "Maintain appropriate rights and permissions for content you provide",
                  "Use our services in accordance with applicable laws and regulations",
                  "Protect account credentials and other access information where applicable",
                  "Notify us of suspected unauthorized access or misuse involving your account or project",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* 05 */}
          <article
            id="acceptable-use"
            className="scroll-mt-28 border-b border-slate-800 py-9"
          >
            <SectionHeading number="05">Acceptable Use</SectionHeading>

            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>
                You may not use our website, systems, or services for unlawful,
                abusive, fraudulent, harmful, or unauthorized activities.
              </p>

              <p>
                You must not attempt to interfere with the security, operation,
                availability, or integrity of our systems or use our services
                in a way that violates the rights of others.
              </p>

              <p>
                Additional rules may be described in a separate Acceptable Use
                Policy where applicable.
              </p>
            </div>
          </article>

          {/* 06 */}
          <article
            id="ai-services"
            className="scroll-mt-28 border-b border-slate-800 py-9"
          >
            <SectionHeading number="06">AI-Powered Services</SectionHeading>

            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>
                Some Velquorin Labs services use artificial intelligence,
                machine learning, automation, or third-party AI technologies to
                generate responses, analyze information, assist workflows, or
                perform automated tasks.
              </p>

              <p>
                AI-generated results may occasionally be incomplete, inaccurate,
                outdated, or unsuitable for a particular purpose. You are
                responsible for reviewing AI-generated information before
                relying on it for important business, legal, financial,
                operational, or other decisions.
              </p>

              <p>
                Features and results may also depend on third-party AI providers
                and other technologies outside our direct control.
              </p>
            </div>
          </article>

          {/* 07 */}
          <article
            id="client-content"
            className="scroll-mt-28 border-b border-slate-800 py-9"
          >
            <SectionHeading number="07">Client Content and Data</SectionHeading>

            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>
                You retain your rights in content, information, and materials
                that you provide to Velquorin Labs, subject to any separate
                agreement between you and us.
              </p>

              <p>
                You grant us the permissions reasonably necessary to access,
                process, store, transmit, modify, or otherwise use that content
                to provide, maintain, secure, and improve the services you
                request.
              </p>

              <p>
                You are responsible for ensuring that you have the rights and
                lawful authority required to provide such information to us.
              </p>
            </div>
          </article>

          {/* 08 */}
          <article
            id="third-party"
            className="scroll-mt-28 border-b border-slate-800 py-9"
          >
            <SectionHeading number="08">Third-Party Services</SectionHeading>

            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>
                Our services may integrate with or depend on third-party
                platforms, APIs, hosting providers, payment processors, AI
                providers, email services, analytics tools, or other external
                technologies.
              </p>

              <p>
                Third-party services are governed by their own terms, policies,
                availability, and security practices. Velquorin Labs does not
                control those third-party services.
              </p>
            </div>
          </article>

          {/* 09 */}
          <article
            id="intellectual-property"
            className="scroll-mt-28 border-b border-slate-800 py-9"
          >
            <SectionHeading number="09">Intellectual Property</SectionHeading>

            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>
                The Velquorin Labs name, branding, website design, original
                website content, software components, documentation, and other
                materials created or owned by Velquorin Labs may be protected
                by intellectual property laws.
              </p>

              <p>
                Unless we provide written permission or a separate agreement
                states otherwise, you may not copy, reproduce, distribute,
                modify, sell, license, or commercially exploit our proprietary
                materials.
              </p>

              <p>
                Ownership and licensing terms for custom client projects may be
                defined separately in the applicable project agreement.
              </p>
            </div>
          </article>

          {/* 10 */}
          <article
            id="payments"
            className="scroll-mt-28 border-b border-slate-800 py-9"
          >
            <SectionHeading number="10">
              Payments and Subscriptions
            </SectionHeading>

            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>
                Certain Velquorin Labs services may require payment, recurring
                subscriptions, or project-based fees. Pricing and payment terms
                will be presented before you purchase or subscribe to the
                applicable service.
              </p>

              <p>
                You are responsible for providing valid payment information and
                paying applicable charges when due.
              </p>

              <p>
                Subscription features, usage limits, billing periods,
                cancellation terms, refunds, and renewals may vary by service
                and may be described during checkout or in a separate
                agreement.
              </p>
            </div>
          </article>

          {/* 11 */}
          <article
            id="termination"
            className="scroll-mt-28 border-b border-slate-800 py-9"
          >
            <SectionHeading number="11">
              Suspension and Termination
            </SectionHeading>

            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>
                We may suspend, restrict, or terminate access to a service where
                reasonably necessary to protect our systems, users, third
                parties, or business operations, or where these Terms or
                applicable law have been violated.
              </p>

              <p>
                Where appropriate, we may provide notice or an opportunity to
                address the issue before termination.
              </p>

              <p>
                Provisions that by their nature should continue after
                termination may remain in effect.
              </p>
            </div>
          </article>

          {/* 12 */}
          <article
            id="availability"
            className="scroll-mt-28 border-b border-slate-800 py-9"
          >
            <SectionHeading number="12">Service Availability</SectionHeading>

            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>
                We work to provide reliable services, but we do not guarantee
                that every service will always be uninterrupted, error-free, or
                continuously available.
              </p>

              <p>
                Services may be temporarily unavailable because of maintenance,
                updates, technical problems, security events, third-party
                outages, or circumstances beyond our reasonable control.
              </p>
            </div>
          </article>

          {/* 13 */}
          <article
            id="disclaimers"
            className="scroll-mt-28 border-b border-slate-800 py-9"
          >
            <SectionHeading number="13">Disclaimers</SectionHeading>

            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>
                To the extent permitted by applicable law, our website and
                services are provided on an &quot;as is&quot; and &quot;as
                available&quot; basis unless otherwise expressly agreed in
                writing.
              </p>

              <p>
                We do not guarantee that our services will meet every
                requirement, produce a particular business result, or be free
                from all errors, interruptions, or security risks.
              </p>
            </div>
          </article>

          {/* 14 */}
          <article
            id="liability"
            className="scroll-mt-28 border-b border-slate-800 py-9"
          >
            <SectionHeading number="14">
              Limitation of Liability
            </SectionHeading>

            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>
                To the maximum extent permitted by applicable law, Velquorin
                Labs will not be liable for indirect, incidental, special,
                consequential, exemplary, or punitive damages arising from or
                related to your use of our website or services.
              </p>

              <p>
                Nothing in these Terms excludes or limits liability where doing
                so would be prohibited by applicable law.
              </p>
            </div>
          </article>

          {/* 15 */}
          <article
            id="indemnification"
            className="scroll-mt-28 border-b border-slate-800 py-9"
          >
            <SectionHeading number="15">Indemnification</SectionHeading>

            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>
                To the extent permitted by applicable law, you agree to be
                responsible for claims, losses, liabilities, or expenses
                resulting from your unlawful misuse of our services, violation
                of these Terms, or infringement of another person&apos;s rights.
              </p>
            </div>
          </article>

          {/* 16 */}
          <article
            id="changes"
            className="scroll-mt-28 border-b border-slate-800 py-9"
          >
            <SectionHeading number="16">Changes to These Terms</SectionHeading>

            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>
                We may update these Terms from time to time as our services,
                technologies, business practices, or legal obligations change.
              </p>

              <p>
                When we make updates, we may revise the &quot;Last
                updated&quot; date displayed on this page. Where required, we
                may provide additional notice of material changes.
              </p>
            </div>
          </article>

          {/* 17 */}
          <article
            id="governing-law"
            className="scroll-mt-28 border-b border-slate-800 py-9"
          >
            <SectionHeading number="17">Governing Law</SectionHeading>

            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>
                These Terms will be governed by applicable law, subject to any
                mandatory legal rights or protections that apply based on your
                location or the nature of the services provided.
              </p>

              <p>
                Additional governing-law or dispute-resolution terms may be
                specified in a separate written agreement for particular
                services or projects.
              </p>
            </div>
          </article>

          {/* 18 */}
          <article id="contact" className="scroll-mt-28 pt-9">
            <SectionHeading number="18">Contact Us</SectionHeading>

            <div className="space-y-5 text-sm leading-7 text-slate-400">
              <p>
                If you have questions about these Terms of Service or would
                like to discuss a service-related matter, please contact
                Velquorin Labs through our Contact page.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-violet-500/40 bg-violet-500/5 px-5 py-2.5 text-xs font-medium text-violet-300 transition hover:border-violet-400 hover:bg-violet-500/10 hover:text-violet-200"
              >
                Contact Velquorin Labs →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}