import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearCurrentUser, readCurrentUser } from "../auth";

function Dashboard() {
  const navigate = useNavigate();
  const user = readCurrentUser();
  const [formState, setFormState] = useState({ name: "", role: "", quote: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [navigate, user]);

  const roleLabel = useMemo(() => (user?.role === "Admin" ? "Admin Dashboard" : "Member Dashboard"), [user]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");

    try {
      const response = await fetch("http://localhost:5000/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) throw new Error("Unable to save testimonial");

      setFormState({ name: "", role: "", quote: "" });
      setStatus("Testimonial submitted successfully.");
    } catch {
      setStatus("Unable to submit testimonial right now.");
    }
  };

  if (!user) {
    return null;
  }

  return (
    <main className="flex-1 bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-600">Welcome back</p>
            <h1 className="mt-3 text-4xl font-bold">{roleLabel}</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              {user.role === "Admin"
                ? "You have access to manage trainers, classes, and member updates."
                : "You can view your plans, upcoming classes, and progress from one place."}
            </p>
          </div>
          <button
            onClick={() => {
              clearCurrentUser();
              navigate("/signin");
            }}
            className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-pink-500 hover:text-pink-600"
          >
            Sign out
          </button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            { title: user.role === "Admin" ? "Manage Classes" : "Booked Classes", detail: user.role === "Admin" ? "Update schedules and coach availability." : "Your next session is at 6:30 PM." },
            { title: user.role === "Admin" ? "Member Insights" : "Membership Status", detail: user.role === "Admin" ? "Track active memberships and renewals." : "Premium plan active until August 2026." },
            { title: user.role === "Admin" ? "Trainer Notes" : "Trainer Updates", detail: user.role === "Admin" ? "Review progress notes from coaches." : "Your trainer has scheduled a mobility session." },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.detail}</p>
            </div>
          ))}
        </div>

        {user.role === "Admin" && (
          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Add a testimonial</h2>
            <p className="mt-2 text-sm text-slate-600">Publish a new member review that will appear on the homepage.</p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <input
                type="text"
                value={formState.name}
                onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                placeholder="Member name"
                required
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none ring-0"
              />
              <input
                type="text"
                value={formState.role}
                onChange={(event) => setFormState({ ...formState, role: event.target.value })}
                placeholder="Role or affiliation"
                required
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none ring-0"
              />
              <textarea
                value={formState.quote}
                onChange={(event) => setFormState({ ...formState, quote: event.target.value })}
                placeholder="Write the testimonial"
                required
                rows={4}
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none ring-0"
              />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="rounded-full bg-pink-600 px-5 py-3 font-semibold text-white transition hover:bg-pink-700"
                >
                  Publish testimonial
                </button>
                {status && <p className="text-sm text-slate-600">{status}</p>}
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}

export default Dashboard;
