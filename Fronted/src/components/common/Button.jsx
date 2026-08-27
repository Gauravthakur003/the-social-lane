import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  type = "button",
  disabled = false,
}) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-[#126BFF] text-white shadow-lg shadow-blue-500/20 hover:-translate-y-1 hover:bg-[#0958D9] hover:shadow-xl hover:shadow-blue-500/30",

    secondary:
      "border border-slate-200 bg-white text-slate-900 hover:-translate-y-1 hover:border-blue-500/30 hover:text-[#126BFF] hover:shadow-lg",

    dark:
      "bg-[#0A1628] text-white hover:-translate-y-1 hover:bg-[#111F35] hover:shadow-xl",

    ghost:
      "bg-transparent text-slate-700 hover:bg-blue-50 hover:text-[#126BFF]",

    outline:
      "border border-blue-500/30 bg-transparent text-[#126BFF] hover:-translate-y-1 hover:bg-blue-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-3.5 text-sm",
    xl: "px-7 py-4 text-base",
  };

  const classes = [
    baseStyles,
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className,
  ].join(" ");

  const content = (
    <>
      <span>{children}</span>

      {icon && (
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight size={15} strokeWidth={2} />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}

export default Button;