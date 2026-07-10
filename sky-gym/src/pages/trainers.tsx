function Trainers() {
  const trainers = [
    {
      name: "Neeraj Nathani",
      role: "Strength & Conditioning",
      bio: "Specializes in performance-based strength programming and athletic development.",
    },
    {
      name: "Gyan Vishwakarma",
      role: "HIIT Specialist",
      bio: "Helps members build endurance, energy, and confidence through high-intensity coaching.",
    },
    {
      name: "Shakti Singh Tomar",
      role: "Mobility Coach",
      bio: "Focuses on flexibility, recovery, and balanced movement for everyday strength.",
    },
  ];

  return (
    <main className="flex-1 bg-[#050505] px-4 py-16 text-slate-100 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Coaches</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Meet the team behind every session</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Our trainers bring experience, energy, and a personal touch to every workout.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-sm transition hover:-translate-y-1 hover:border-amber-400/40">
              <h2 className="text-2xl font-semibold">{trainer.name}</h2>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-amber-400">{trainer.role}</p>
              <p className="mt-4 text-slate-400">{trainer.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Trainers;
