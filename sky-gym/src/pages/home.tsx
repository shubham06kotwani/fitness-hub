type Testimonial = {
  _id?: string;
  name: string;
  role: string;
  quote: string;
};

type Plan = {
  name: string;
  price: string;
  perks: string[];
};

type Trainer = {
  name: string;
  role: string;
  bio: string;
};

const fallbackTestimonials: Testimonial[] = [
  {
    quote: "The atmosphere is premium, the coaching is sharp, and every session feels intentional.",
    name: "Aarav M.",
    role: "Pro Member",
  },
  {
    quote: "I finally found a gym that feels motivating, clean, and genuinely focused on progress.",
    name: "Riya K.",
    role: "Member since 2024",
  },
  {
    quote: "The classes are structured, energetic, and perfect for building strength without the chaos.",
    name: "Nikhil V.",
    role: "Performance Coach",
  },
];

const fallbackPlans: Plan[] = [
  { name: "Starter", price: "₹1,499", perks: ["Gym access", "2 classes/week", "Recovery lounge"] },
  { name: "Pro", price: "₹2,999", perks: ["Unlimited classes", "Coach check-ins", "Nutrition guide"] },
  { name: "Elite", price: "₹4,499", perks: ["Priority booking", "Personal training", "Recovery suite"] },
];

const fallbackTrainers: Trainer[] = [
  { name: "Neeraj Nathani", role: "Strength & Conditioning", bio: "Builds athletic power with smart, measurable training and disciplined coaching." },
  { name: "Gyan Vishwakarma", role: "HIIT Specialist", bio: "Turns every session into a fast, focused, high-energy performance boost." },
  { name: "Shakti Singh Tomar", role: "Mobility Coach", bio: "Helps members improve flexibility, recovery, and balanced movement every day." },
];

import { useEffect, useState } from "react";

function Home() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);
  const [plans, setPlans] = useState<Plan[]>(fallbackPlans);
  const [trainers, setTrainers] = useState<Trainer[]>(fallbackTrainers);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);
  const [loadingContent, setLoadingContent] = useState(true);

  const features = [
    { title: "Elite Coaching", text: "Expert trainers guide every session with precision, purpose, and calm confidence." },
    { title: "Premium Facilities", text: "A refined training environment with modern strength zones and recovery spaces." },
    { title: "Flexible Memberships", text: "Choose a plan that fits your schedule, ambitions, and everyday lifestyle." },
  ];

  useEffect(() => {
    const controller = new AbortController();
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

    const loadContent = async () => {
      try {
        const [testimonialsResponse, plansResponse, trainersResponse] = await Promise.all([
          fetch(`${apiUrl}/api/testimonials`, { signal: controller.signal }),
          fetch(`${apiUrl}/api/plans`, { signal: controller.signal }),
          fetch(`${apiUrl}/api/trainers`, { signal: controller.signal }),
        ]);

        if (testimonialsResponse.ok) {
          const testimonialData = (await testimonialsResponse.json()) as Testimonial[];
          if (Array.isArray(testimonialData) && testimonialData.length > 0) {
            setTestimonials(testimonialData);
          }
        }

        if (plansResponse.ok) {
          const planData = (await plansResponse.json()) as Plan[];
          if (Array.isArray(planData) && planData.length > 0) {
            setPlans(planData);
          }
        }

        if (trainersResponse.ok) {
          const trainerData = (await trainersResponse.json()) as Trainer[];
          if (Array.isArray(trainerData) && trainerData.length > 0) {
            setTrainers(trainerData);
          }
        }
      } catch {
        setTestimonials(fallbackTestimonials);
        setPlans(fallbackPlans);
        setTrainers(fallbackTrainers);
      } finally {
        setLoadingTestimonials(false);
        setLoadingContent(false);
      }
    };

    loadContent();

    return () => controller.abort();
  }, []);

  const galleryImages = [
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
  ];

  return (
    <main className="flex-1 bg-[#050505] text-slate-100">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.22),_transparent_34%),linear-gradient(135deg,_#020202_0%,_#111111_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
              Transform your fitness journey
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              A refined home for strength, discipline, and real progress.
            </h1>
            <p className="mb-8 text-lg text-slate-300">
              Discover premium coaching, modern training zones, and a motivating community designed for serious results.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="/plans" className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-amber-400">
                Join Now
              </a>
              <a href="/classes" className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-slate-100 transition hover:border-amber-400 hover:text-amber-300">
                Explore Classes
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300">
              <div>
                <p className="text-2xl font-semibold text-white">24/7</p>
                <p>Access</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">15+</p>
                <p>Classes weekly</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">4.9/5</p>
                <p>Member rating</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-[2rem] border border-white/10 bg-black/40 p-3 shadow-2xl backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
              alt="Modern gym interior"
              className="h-[320px] w-full rounded-[1.5rem] object-cover"
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {galleryImages.slice(1).map((image) => (
                <img key={image} src={image} alt="Sky Gym training space" className="h-32 w-full rounded-[1.2rem] object-cover" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-10 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Why Sky Gym</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Built for performance, comfort, and consistency</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((card) => (
            <div key={card.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
              <h3 className="mb-2 text-xl font-semibold text-white">{card.title}</h3>
              <p className="text-slate-300">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-10 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Memberships</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Choose a plan that fits your pace</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {loadingContent ? (
            <div className="rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] p-8 text-sm text-slate-300 lg:col-span-3">
              Loading membership options...
            </div>
          ) : (
            plans.map((plan) => (
              <div key={plan.name} className="rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-sm transition hover:-translate-y-1 hover:border-amber-400/40">
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-400">Perfect for daily progress</p>
                <p className="mt-4 text-4xl font-bold text-white">{plan.price}</p>
                <p className="mt-1 text-sm text-slate-400">per month</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-300">
                  {plan.perks.map((perk) => (
                    <li key={perk}>• {perk}</li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mb-10 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Meet the team</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Coaches who keep you moving forward</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {loadingContent ? (
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 text-sm text-slate-300 lg:col-span-3">
              Loading trainers...
            </div>
          ) : (
            trainers.map((trainer) => (
              <div key={trainer.name} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-sm transition hover:-translate-y-1 hover:bg-white/10">
                <h3 className="text-xl font-semibold text-white">{trainer.name}</h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.25em] text-amber-400">{trainer.role}</p>
                <p className="mt-3 text-sm text-slate-300">{trainer.bio}</p>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mb-10 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Testimonials</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">What our members are saying</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {loadingTestimonials ? (
            <div className="rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] p-8 text-sm text-slate-300 lg:col-span-3">
              Loading testimonials...
            </div>
          ) : (
            testimonials.map((testimonial) => (
              <div key={testimonial._id || testimonial.name} className="rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-sm">
                <p className="text-sm leading-7 text-slate-300">“{testimonial.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/20 text-sm font-semibold text-amber-300">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-24 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] px-8 py-12 text-center text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Ready to begin?</p>
          <h2 className="mt-3 text-3xl font-semibold">Step into a gym built for your goals.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Join Sky Gym today and experience a space designed for strength, recovery, and real progress.
          </p>
          <a href="/contact" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400">
            Book a Visit
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
