function Classes() {
  const classes = [
    {
      title: "Strength Lab",
      time: "06:00 AM",
      description: "Build power, endurance, and confidence with coached strength circuits.",
    },
    {
      title: "HIIT Burn",
      time: "12:00 PM",
      description: "Fast-paced interval training designed to push your limits and boost cardio.",
    },
    {
      title: "Mobility Flow",
      time: "06:30 PM",
      description: "Improve flexibility, posture, and recovery through guided movement sessions.",
    },
  ];

  return (
    <main className="flex-1 bg-[#050505] px-4 py-16 text-slate-100 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Classes</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Train with expert-led programs</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            From strength to recovery, our classes bring structure, energy, and excitement to every workout.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {classes.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-sm transition hover:-translate-y-1 hover:border-amber-400/40">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">{item.time}</p>
              <h2 className="mt-3 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-4 text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Classes;
