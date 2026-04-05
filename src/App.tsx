type Benefit = {
  title: string;
  description: string;
};

type Feature = {
  title: string;
  description: string;
};

type Plan = {
  name: string;
  price: string;
  description: string;
  cta: string;
  featured?: boolean;
  features: string[];
};

type Faq = {
  question: string;
  answer: string;
};

const benefits: Benefit[] = [
  {
    title: 'Single source of truth',
    description:
      'Unify roadmap decisions, sprint priorities, and release notes in one workspace your whole team can trust.',
  },
  {
    title: 'Faster execution cycles',
    description:
      'Remove delivery friction with lightweight workflows that keep product, engineering, and leadership aligned.',
  },
  {
    title: 'Clear stakeholder visibility',
    description:
      'Share executive-ready updates instantly with live progress views, risk signals, and delivery health metrics.',
  },
  {
    title: 'Confident forecasting',
    description:
      'Use historical velocity and workload trends to set timelines you can stand behind.',
  },
];

const features: Feature[] = [
  {
    title: 'Roadmaps that stay current',
    description:
      'Connect strategy to execution with timeline, now-next-later, and objective-based roadmap views.',
  },
  {
    title: 'Delivery insights in real time',
    description:
      'Track cycle time, blocked work, and throughput with dashboards built for product and engineering leaders.',
  },
  {
    title: 'Built-in async collaboration',
    description:
      'Capture decisions, feedback, and approvals directly in context so teams stay aligned across time zones.',
  },
  {
    title: 'Enterprise-grade controls',
    description:
      'SSO, role-based access, and audit trails give IT and compliance teams the confidence to scale.',
  },
];

const plans: Plan[] = [
  {
    name: 'Basic',
    price: '$29',
    description: 'For early-stage teams bringing structure to product delivery.',
    cta: 'Start with Basic',
    features: ['Up to 5 users', 'Core planning boards', '2 integrations', 'Weekly reporting digest', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$79',
    description: 'For growing product organizations shipping across multiple squads.',
    cta: 'Choose Pro',
    featured: true,
    features: [
      'Up to 25 users',
      'Advanced roadmaps + dependencies',
      'Unlimited integrations',
      'Custom KPI dashboards',
      'Priority support',
    ],
  },
  {
    name: 'Business',
    price: '$149',
    description: 'For scaling companies needing security, governance, and service guarantees.',
    cta: 'Talk to Sales',
    features: ['Unlimited users', 'SSO + SCIM', 'Audit logs + access policies', 'Dedicated success manager', '99.9% uptime SLA'],
  },
];

const faqs: Faq[] = [
  {
    question: 'Can we migrate from spreadsheets or another tool?',
    answer:
      'Yes. Our onboarding team provides import templates and guided migration support so you can transition without disrupting active work.',
  },
  {
    question: 'Do you offer annual billing?',
    answer:
      'Yes. Annual plans include a 15% discount and can be activated from your billing settings at any time.',
  },
  {
    question: 'Is Northstar suitable for cross-functional teams?',
    answer:
      'Absolutely. Product, engineering, design, and leadership teams use shared views with role-based permissions to stay aligned.',
  },
  {
    question: 'What support is included?',
    answer:
      'All plans include responsive email support. Pro includes priority routing, and Business includes a dedicated success manager.',
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-mist text-slate-900">
      <header className="border-b border-slate-200/70 bg-white/95 backdrop-blur">
        <div className="section-shell flex h-16 items-center justify-between">
          <a href="#" className="text-base font-semibold tracking-tight text-ink">
            Northstar
          </a>
          <a
            href="#pricing"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          >
            View pricing
          </a>
        </div>
      </header>

      <main>
        <section className="section-shell py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-600">
              Product Operations Platform
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Plan with clarity. Ship with confidence.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Northstar helps modern SaaS teams align strategy with execution, reduce delivery risk, and communicate progress without the noise.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex min-w-40 items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-soft transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
              >
                Start free trial
              </a>
              <a
                href="#features"
                className="inline-flex min-w-40 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
              >
                See product tour
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="benefits-title" className="section-shell pb-20 sm:pb-24">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
            <h2 id="benefits-title" className="section-title">
              Built for teams that value precision over process overhead
            </h2>
            <p className="section-copy">
              Every workflow is designed to reduce context-switching and improve delivery predictability as your organization scales.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article key={benefit.title} className="rounded-xl border border-slate-100 bg-slate-50/60 p-5">
                  <h3 className="text-base font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features" aria-labelledby="features-title" className="section-shell pb-20 sm:pb-24">
          <h2 id="features-title" className="section-title text-center">
            Everything you need to run product delivery at scale
          </h2>
          <p className="section-copy mx-auto text-center">
            Northstar combines planning, execution, and reporting into a focused workspace your team will actually adopt.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" aria-labelledby="pricing-title" className="section-shell pb-20 sm:pb-24">
          <h2 id="pricing-title" className="section-title text-center">
            Pricing designed to grow with your team
          </h2>
          <p className="section-copy mx-auto text-center">
            Transparent monthly pricing with no hidden fees. Upgrade when your process and team complexity increase.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`flex h-full flex-col rounded-2xl border p-6 shadow-soft ${
                  plan.featured
                    ? 'border-slate-900 bg-slate-900 text-white'
                    : 'border-slate-200 bg-white text-slate-900'
                }`}
                aria-label={`${plan.name} plan`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-lg font-semibold ${plan.featured ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                  {plan.featured && (
                    <span className="rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-xs font-medium text-white">
                      Recommended
                    </span>
                  )}
                </div>
                <p className={`mt-3 text-sm leading-6 ${plan.featured ? 'text-slate-200' : 'text-slate-600'}`}>{plan.description}</p>
                <p className="mt-5 flex items-baseline gap-2">
                  <span className={`text-4xl font-semibold tracking-tight ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.featured ? 'text-slate-300' : 'text-slate-500'}`}>per month</span>
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className={`mt-1 h-1.5 w-1.5 rounded-full ${plan.featured ? 'bg-slate-200' : 'bg-slate-500'}`} />
                      <span className={plan.featured ? 'text-slate-100' : 'text-slate-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 ${
                    plan.featured
                      ? 'bg-white text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-300'
                      : 'border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:text-slate-900 focus-visible:ring-slate-300'
                  }`}
                >
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq-title" className="section-shell pb-20 sm:pb-24">
          <h2 id="faq-title" className="section-title text-center">
            Frequently asked questions
          </h2>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-soft">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="cursor-pointer list-none pr-8 text-sm font-medium text-slate-900 marker:content-none">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section-shell pb-20 sm:pb-24">
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center shadow-soft sm:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Ready to bring more predictability to product delivery?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Join teams replacing status meetings and spreadsheet planning with a focused operating system for product execution.
            </p>
            <a
              href="#pricing"
              className="mt-8 inline-flex min-w-44 items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-soft transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
            >
              Start your free trial
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="section-shell flex flex-col gap-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Northstar Labs. All rights reserved.</p>
          <nav aria-label="Footer links" className="flex gap-4">
            <a className="hover:text-slate-900" href="#">
              Privacy
            </a>
            <a className="hover:text-slate-900" href="#">
              Terms
            </a>
            <a className="hover:text-slate-900" href="#faq-title">
              Support
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default App;
