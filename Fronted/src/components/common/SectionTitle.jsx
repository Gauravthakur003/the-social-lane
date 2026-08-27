function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  const alignment = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div
      className={[
        "flex max-w-3xl flex-col",
        alignment[align] || alignment.left,
        className,
      ].join(" ")}
    >
      {eyebrow && (
        <span className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#126BFF]">
          {eyebrow}
        </span>
      )}

      {title && (
        <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0A1628] sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      )}

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;