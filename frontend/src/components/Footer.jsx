import React, { useState } from "react";
import { Github, Twitter, Globe, ChevronUp, ChevronDown} from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const links = {
    explore: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how" },
      { name: "Pricing", href: "#pricing" },
      { name: "Demo", href: "#demo" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-t from-indigo-950/50 via-gray-950 to-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Mobile */}
        <div className="md:hidden space-y-4">
          {Object.entries(links).map(([section, items]) => (
            <div key={section} className="border-b border-gray-800 pb-4">
              <button
                onClick={() => toggle(section)}
                className="w-full flex justify-between items-center text-left py-3"
                aria-expanded={openSection === section}
                aria-controls={`${section}-links`}
              >
                <span className="text-white font-semibold capitalize">{section}</span>
                {openSection === section ? (
                  <ChevronUp size={20} className="text-gray-400" />
                ) : (
                  <ChevronDown size={20} className="text-gray-400" />
                )}
              </button>
              {openSection === section && (
                <ul id={`${section}-links`} className="mt-2 space-y-2 pl-2">
                  {items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-blue-400 text-sm transition block"
                        onClick={(e) => {
                          if (item.href.startsWith("#")) {
                            e.preventDefault();
                            document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Desktop */}
{/* Desktop */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 text-left">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo size="md" />
              <span className="text-xl font-bold text-white">VocalPoint</span>
            </div>
            <p className="text-gray-400 text-sm">
              The global voice data marketplace. Earn or scale with AI.
            </p>
          </div>

          {Object.entries(links).map(([key, items]) => (
            <div key={key}>
              <h3 className="text-white font-semibold mb-3 capitalize">{key}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-blue-400 text-sm transition block"
                      onClick={(e) => {
                        if (item.href.startsWith("#")) {
                          e.preventDefault();
                          document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} VocalPoint. All voices matter.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/vocalpoint"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-sky-400 transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://github.com/vocalpoint"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-gray-300 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://vocalpoint.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-green-400 transition-all hover:scale-110"
              aria-label="Website"
            >
              <Globe size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;