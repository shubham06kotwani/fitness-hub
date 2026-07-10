function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-10 text-sm text-slate-400 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div className="max-w-md">
          <p className="text-lg font-semibold tracking-[0.25em] text-white">SKY GYM</p>
          <p className="mt-2 text-slate-400">
            Premium training, expert coaching, and a community built to help you perform at your best.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-white">Contact</p>
          <p>hello@skygym.com</p>
          <p>+91 876 543 2100</p>
        </div>
        <div className="space-y-2">
          <p className="text-white">Visit</p>
          <p>Delhi NCR</p>
          <p>Open daily • 5:00 AM to 11:00 PM</p>
        </div>
      </div>
      <p className="mt-8 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
        © {new Date().getFullYear()} Sky Gym. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
