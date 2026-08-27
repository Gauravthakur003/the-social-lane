function Container({
  children,
  className = "",
  size = "default",
  as: Component = "div",
}) {
  const sizes = {
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
    narrow: "max-w-5xl",
    compact: "max-w-4xl",
    full: "max-w-none",
  };

  return (
    <Component
      className={`mx-auto w-full px-5 sm:px-6 lg:px-8 ${sizes[size] || sizes.default} ${className}`}
    >
      {children}
    </Component>
  );
}

export default Container;