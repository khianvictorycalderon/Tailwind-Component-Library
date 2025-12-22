import { useEffect, useState } from "react";

interface SidebarButton {
  label: React.ReactNode | string;
  action: () => void;
}

interface SideBarProps {
  buttons: SidebarButton[];
  buttonsClassName?: string;
  className?: string;
  hamburgerClassName?: string;
  footbar?: React.ReactNode | string; // optional footer
}

export function SideBar({
  buttons,
  buttonsClassName = "",
  className = "",
  hamburgerClassName = "",
  footbar,
}: SideBarProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const width = open ? "16rem" : "0rem";
    document.documentElement.style.setProperty("--sidebar-width", width);
  }, [open]);

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open sidebar"
          className={`fixed top-4 left-4 z-50 h-12 w-12 rounded-full bg-neutral-900 text-white text-2xl shadow-lg transition hover:scale-110 cursor-pointer ${hamburgerClassName}`}
        >
          ☰
        </button>
      )}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/50"
          aria-hidden
        />
      )}

      <aside
        className={`${className} fixed top-0 left-0 z-40 h-screen w-64 transition-transform duration-300 will-change-transform bg-neutral-900 text-white flex flex-col`}
        style={{
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        
        <button
          onClick={() => setOpen(false)}
          aria-label="Close sidebar"
          className="absolute top-4 right-4 text-2xl cursor-pointer"
        >
          ←
        </button>

        <nav className="mt-16 flex-1 flex flex-col gap-2 px-4 overflow-y-auto">
          {buttons.map((item, idx) => (
            <button
              key={idx}
              className={`w-full px-4 py-2 text-left rounded hover:bg-neutral-800 cursor-pointer ${buttonsClassName}`}
              onClick={() => {
                item.action();
                setOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {footbar && (
          <div className="px-4 py-4 text-sm border-t border-white/20">
            {footbar}
          </div>
        )}
      </aside>
    </>
  );
}