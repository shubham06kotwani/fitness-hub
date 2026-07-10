function Contact() {
  return (
    <main className="flex-1 bg-[#050505] px-4 py-16 text-slate-100 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Contact</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Visit Sky Gym and start your journey</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Stop by for a tour, talk with our team, or book your first session with one of our coaches.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-sm transition hover:-translate-y-1 hover:border-amber-400/40">
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <ul className="mt-6 space-y-4 text-slate-400">
            <li>📍 123, MG Road, Bengaluru, Karnataka</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ support@skygym.in</li>
          </ul>
          <a href="/" className="mt-8 inline-flex rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-400">
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}

export default Contact;
