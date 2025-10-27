import React from "react";

interface FooterSection {
  title: string;
  content: React.ReactNode;
}

interface FooterSubLogo {
  image: React.ReactNode;
  onClick: () => void;
}

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  logo: string;
  sub_logos?: FooterSubLogo[];
  texts: FooterSection[];
}

export default function Footer({
  logo,
  sub_logos = [],
  texts,
  className = "",
  ...rest
}: FooterProps) {
  return (
    <footer
      {...rest}
      className={`w-full border-t border-gray-700 bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-32 ${className}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-10">
        
        <div className="flex flex-col items-center md:items-start space-y-6">
          <img src={logo} alt="Footer logo" className="w-40 object-contain" />

          {sub_logos.length > 0 && (
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {sub_logos.map((sub, i) => (
                <button
                  key={i}
                  onClick={sub.onClick}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                >
                  {typeof sub.image === "string" ? (
                    <img
                      src={sub.image}
                      alt={`sub-logo-${i}`}
                      className="w-8 h-8 object-contain"
                    />
                  ) : (
                    sub.image
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-3 gap-6 text-center md:text-left`}>
          {texts.map((section, i) => (
            <div key={i} className="space-y-3">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <div className="text-gray-400 text-sm">{section.content}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-white pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}
