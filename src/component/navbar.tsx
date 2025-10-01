import { useState } from "react";

interface NavBarProps {
  className?: string;
  image?: string;
  title?: string;
  buttons: {
    label: React.ReactNode | string;
    action: () => void;
    className?: string;
  }[];
  buttonsAlignment?: "right" | "center"; // For tablet and desktop only
}

export function NavBar({
  className,
  image,
  title,
  buttons,
  buttonsAlignment = "right"
}: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 px-2 md:px-8 lg:px-32 w-full shadow z-50 ${className || ""}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        
        {/* Logo + Title (always left) */}
        <div className="flex gap-2 items-center">
          {image && (
            <img
              className="hidden md:block h-[50px] w-auto my-2"
              src={image}
              alt={`${title}'s Logo`}
            />
          )}
          <h1 className="my-4 md:my-0 font-bold tracking-tight text-base md:text-lg lg:text-xl">
            {title}
          </h1>
        </div>

        {/* Desktop/Tablet Buttons */}
        <div
        className={`hidden md:flex gap-4 ${
            buttonsAlignment === "center"
            ? "absolute left-1/2 -translate-x-1/2 z-10"
            : "ml-auto"
        }`}
        >
        {buttons.map((btn, i) => (
            <button
            key={i}
            onClick={btn.action}
            className={`px-4 py-2 rounded-xl transition cursor-pointer ${btn.className || ""}`}
            >
            {btn.label}
            </button>
        ))}
        </div>


        {/* Mobile Menu Toggle (always right) */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-2xl font-bold rounded-lg hover:bg-white/10"
          >
            {mobileOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-2 bg-inherit text-inherit">
          {buttons.map((btn, i) => (
            <button
              key={`${btn.label}-${i}`}
              onClick={() => {
                setMobileOpen(false);
                btn.action();
              }}
              className="block w-full text-center py-2"
            >
              {btn.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
