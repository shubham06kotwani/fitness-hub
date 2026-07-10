import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.png";
import { demoAccounts, readCurrentUser, readUsers, saveCurrentUser, saveUsers, type AuthRole } from "../auth";

function SignIn() {
  const navigate = useNavigate();
  const [role, setRole] = useState<AuthRole>("User");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (readCurrentUser()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const users = readUsers();

    const account = users.find((user) => user.email === email && user.password === password && user.role === role);
    const demoAccount = demoAccounts[role];

    if (account || (email === demoAccount.email && password === demoAccount.password)) {
      const signedInUser = account ?? {
        name: role === "Admin" ? "Sky Gym Admin" : "Sky Gym Member",
        email,
        password,
        role,
      };

      saveCurrentUser(signedInUser);
      saveUsers([...users.filter((user) => user.email !== signedInUser.email), signedInUser]);
      navigate("/dashboard");
      return;
    }

    setMessage("Invalid credentials. Try the demo account or create a new account.");
  };

  return (
    <main className="flex-1 bg-[radial-gradient(circle_at_top_left,_rgba(244,114,182,0.25),_transparent_30%),linear-gradient(135deg,_#0f172a_0%,_#111827_100%)] px-4 py-16 text-slate-900 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-between bg-slate-950 p-8 text-white lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-400">Sky Gym</p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Welcome back to your training space.</h1>
            <p className="mt-4 text-lg text-slate-300">
              Sign in to access your classes, benefits, and a premium fitness experience built around your goals.
            </p>
          </div>

          <div className="mt-8 space-y-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <img src={heroImage} alt="Sky Gym brand" className="h-16 w-16 rounded-full border border-white/20 object-cover" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-300">Why members love it</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li>• 24/7 access and premium recovery zones</li>
                <li>• Expert coaching and live class schedules</li>
                <li>• A community built for strength and confidence</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-8 sm:p-10 lg:p-12">
          <h2 className="text-3xl font-semibold text-slate-900">Member / Admin Sign In</h2>
          <p className="mt-2 text-slate-600">Use your role-specific account to continue your journey.</p>
          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Role</label>
              <select
                value={role}
                onChange={(event) => setRole(event.target.value as AuthRole)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-pink-500"
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-pink-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-pink-500"
                placeholder="Enter password"
              />
            </div>
            <button className="w-full rounded-full bg-pink-500 px-5 py-3 font-semibold text-white transition hover:bg-pink-600">
              Sign In
            </button>
          </form>
          {message ? <p className="mt-4 text-sm text-rose-500">{message}</p> : null}
          <p className="mt-5 text-sm text-slate-500">
            New here? <a href="/signup" className="font-semibold text-pink-600">Create an account</a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
