import { Link } from "react-router-dom";

const footerLinks = {
  Explore: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ],

  Services: [
    {
      name: "Influencer Marketing",
      path: "/services",
    },
    {
      name: "Digital Marketing",
      path: "/services",
    },
    {
      name: "Creative Production",
      path: "/services",
    },
    {
      name: "Events & Activations",
      path: "/services",
    },
    {
      name: "Content Strategy",
      path: "/services",
    },
    {
      name: "Strategy & Execution",
      path: "/services",
    },
  ],
};

const socials = [
  {
    name: "Instagram",
    short: "IG",
    href: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    short: "in",
    href: "https://linkedin.com",
  },
  {
    name: "Twitter",
    short: "X",
    href: "https://twitter.com",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#050B14] text-white">

      {/* Background glow */}
      <div
        className="pointer-events-none absolute -right-48 -top-48 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-48 -left-48 h-[400px] w-[400px] rounded-full bg-indigo-600/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* =========================
            CTA
        ========================= */}
        <div className="border-b border-white/10 py-20 sm:py-24 lg:py-28">

          <div className="max-w-4xl">

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              Let's create something meaningful
            </p>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              Have an idea?
              <br />

              <span className="text-slate-500">
                Let's make it happen.
              </span>
            </h2>

            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#050B14] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
            >
              Start a project

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>

          </div>

        </div>

        {/* =========================
            MAIN FOOTER
        ========================= */}
        <div className="grid gap-14 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:py-20">

          {/* Brand */}
          <div className="max-w-sm">

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold transition-transform duration-300 group-hover:rotate-6">
                S
              </div>

              <div className="flex flex-col leading-none">
                <strong className="text-sm tracking-[0.14em]">
                  THE SOCIAL
                </strong>

                <span className="mt-1 text-xs tracking-[0.35em] text-slate-400">
                  LANE
                </span>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              We build bold digital experiences, powerful brands,
              and meaningful connections that move businesses
              forward.
            </p>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-3">

              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
                >
                  {social.short}
                </a>
              ))}

            </div>

          </div>

          {/* Explore */}
          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Explore
            </h3>

            <ul className="mt-6 space-y-3">

              {footerLinks.Explore.map((link) => (
                <li key={`${link.path}-${link.name}`}>

                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Services
            </h3>

            <ul className="mt-6 space-y-3">

              {footerLinks.Services.map((link) => (
                <li key={link.name}>

                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Let's Talk
            </h3>

            <a
              href="mailto:hello@thesociallane.com"
              className="mt-6 block break-all text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-blue-400"
            >
              hello@thesociallane.com
            </a>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Mumbai, India
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-slate-600">
              Available for new projects
            </p>

          </div>

        </div>

        {/* =========================
            BOTTOM BAR
        ========================= */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {currentYear} The Social Lane.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <Link
              to="/"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy
            </Link>

            <Link
              to="/"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;