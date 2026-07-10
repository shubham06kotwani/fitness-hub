function Plans() {
  const plans = [
    {
      name: "Starter",
      price: "₹1,499",
      description: "Perfect for getting started with a consistent routine.",
      features: ["Gym access", "2 classes/week", "Recovery lounge", "Locker room access"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "₹2,999",
      description: "For members who want more structure and coaching support.",
      features: ["Unlimited classes", "Coach check-ins", "Nutrition guide", "Priority booking"],
      highlight: true,
    },
    {
      name: "Elite",
      price: "₹4,499",
      description: "The full experience for serious performance goals.",
      features: ["Personal training", "Recovery suite", "VIP events", "Custom progress plan"],
      highlight: false,
    },
  ];

  return (
    <main className="flex-1 bg-[#050505] px-4 py-16 text-slate-100 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Memberships</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Choose the plan that fits your goals</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Whether you are just beginning or training at a high level, Sky Gym offers flexible memberships designed around your journey.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                plan.highlight
                  ? "border-amber-400/60 bg-[#121212] text-white"
                  : "border-white/10 bg-[#0d0d0d] text-slate-100"
              }`}
            >
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              <p className={`mt-3 text-sm ${plan.highlight ? "text-slate-300" : "text-slate-400"}`}>
                {plan.description}
              </p>
              <p className="mt-6 text-4xl font-bold">{plan.price}</p>
              <p className={`mt-1 text-sm ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                per month
              </p>
              <ul className={`mt-8 space-y-3 text-sm ${plan.highlight ? "text-slate-300" : "text-slate-400"}`}>
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <a
                href="/contact"
                className={`mt-8 inline-flex rounded-full px-5 py-3 font-semibold transition ${
                  plan.highlight
                    ? "bg-amber-400 text-slate-950 hover:bg-amber-300"
                    : "bg-white text-slate-950 hover:bg-amber-400"
                }`}
              >
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Plans;
