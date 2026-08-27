import Container from "./Container";

function Loading({
  fullScreen = false,
  size = "md",
  text = "Loading...",
}) {
  const sizes = {
    sm: "h-5 w-5 border-2",
    md: "h-8 w-8 border-2",
    lg: "h-12 w-12 border-[3px]",
  };

  return (
    <div
      className={[
        "flex items-center justify-center",
        fullScreen ? "min-h-screen w-full bg-[#050B14]" : "py-12",
      ].join(" ")}
      role="status"
      aria-label={text}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className={[
            "animate-spin rounded-full border-blue-500 border-t-transparent",
            sizes[size] || sizes.md,
          ].join(" ")}
        />

        {text && (
          <span className="text-xs font-medium tracking-wide text-slate-500">
            {text}
          </span>
        )}
      </div>
    </div>
  );
}

export default Loading;