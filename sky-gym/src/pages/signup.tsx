import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.png";
import { readCurrentUser, readUsers, saveCurrentUser, saveUsers, type AuthRole } from "../auth";

function SignUp() {
  const navigate = useNavigate();
  const [role, setRole] = useState<AuthRole>("User");
  const [name, setName] = useState("");
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

    if (!name || !email || !password) {
      setMessage("Please complete every field before creating your account.");
      return;
    }

    const users = readUsers();
    const alreadyExists = users.some((user) => user.email.toLowerCase() === email.toLowerCase());

    if (alreadyExists) {
      setMessage("That email already exists. Please sign in instead.");
      return;
    }

    const newUser = { name, email, password, role };
    const updatedUsers = [...users, newUser];
    saveUsers(updatedUsers);
    saveCurrentUser(newUser);
    navigate("/dashboard");
  };

  return (
    <main className="flex-1 bg-[radial-gradient(circle_at_top_left,_rgba(244,114,182,0.22),_transparent_30%),linear-gradient(135deg,_#0f172a_0%,_#111827_100%)] px-4 py-16 text-slate-900 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-between bg-slate-950 p-8 text-white lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-400">Join Sky Gym</p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Start your next fitness chapter with confidence.</h1>
            <p className="mt-4 text-lg text-slate-300">
              Pick your role, create your account, and get access to training plans, classes, and premium gym perks.
            </p>
          </div>

          <div className="mt-8 space-y-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <img src={heroImage} alt="Sky Gym brand" className="h-16 w-16 rounded-full border border-white/20 object-cover" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-300">What you unlock</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li>• Flexible membership options and class access</li>
                <li>• Role-based dashboards for members and admins</li>
                <li>• A premium training space designed for progress</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-8 sm:p-10 lg:p-12">
          <h2 className="text-3xl font-semibold text-slate-900">Create Account</h2>
          <p className="mt-2 text-slate-600">Register as a member or admin and access your dashboard instantly.</p>
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
              <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-pink-500"
                placeholder="Your name"
              />
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
                placeholder="Create password"
              />
            </div>
            <button className="w-full rounded-full bg-pink-500 px-5 py-3 font-semibold text-white transition hover:bg-pink-600">
              Create Account
            </button>
          </form>
          {message ? <p className="mt-4 text-sm text-rose-500">{message}</p> : null}
          <p className="mt-5 text-sm text-slate-500">
            Already have an account? <a href="/signin" className="font-semibold text-pink-600">Sign in</a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
