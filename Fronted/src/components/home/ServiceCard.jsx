import {
  ArrowUpRight,
  Megaphone,
  Settings,
  Sparkles,
  Target,
  Users,
  UsersRound,
} from "lucide-react";
const iconMap = {
  users: Users,
  megaphone: Megaphone,
  sparkles: Sparkles,
  "users-round": UsersRound,
  settings: Settings,
  target: Target,
};

function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon] || Sparkles;

  return (
    <article
      className="group relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl transition-all duration-500 group-hover:bg-blue-500/10"
      />

      {/* Top */}
      <div className="relative z-10 flex items-start justify-between">
        <span className="text-sm font-bold tracking-[0.2em] text-blue-600">
          {service.number}
        </span>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 group-hover:border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white">
          <Icon
            size={21}
            strokeWidth={1.7}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-12 flex-1">
        <h3 className="text-2xl font-bold tracking-tight text-[#06111f] transition-colors duration-300 group-hover:text-blue-600">
          {service.title}
        </h3>

        <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
          {service.description}
        </p>
      </div>

      {/* Tags */}
      <div className="relative z-10 mt-8 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-medium text-slate-500 transition-colors duration-300 group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
        <span className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
          EXPLORE SERVICE
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
          <ArrowUpRight
            size={18}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </div>

      {/* Large background number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-7 -right-3 text-[8rem] font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-blue-50"
      >
        {service.number}
      </span>
    </article>
  );
}

export default ServiceCard;