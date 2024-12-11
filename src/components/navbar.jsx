import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { title: "HOME", href: "#home" },
  { title: "ABOUT US", href: "#about" },
  { title: "HOW TO BUY", href: "#how-to-buy" },
  { title: "TOKENOMICS", href: "#tokenomics" },
  { title: "GALLERY", href: "#gallery" },
  { title: "BUY TOKEN", href: "#how-to-buy" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems.map((item) => item.href.substring(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // Close mobile menu on navigation
    }
  };

  return (
    <div className="fixed flex justify-center w-full align-center mt-5  items-center z-50  ">
      <header className=" top-0 left-0 right-0  bg-[#FFFFFF1A]  border-[#DEDEDE78] rounded-lg  backdrop-blur-md p-5 transition-all "
      style={{
        fontFamily: "Squada One",
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "21.14px",
      }}>
        <div className="flex items-center justify-between md:space-x-[400px] space-x-[270px] sm:space-x-[260px] rounded-lg">
          <div className="w-10 h-10  overflow-hidden lg:hidden">
            <img
              src="/Group 587.png"
              alt="Logo"
              width={32}
              height={32}
              className="object-cover "
            />
          </div>
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle navigation menu</span>
          </button>
        </div>

        <nav
          className={`hidden lg:flex lg:gap-8 items-center ${
            mobileMenuOpen ? "hidden" : ""
          }`}
        >
          <div href="/" className="flex items-center">
            <div className="w-9 h-9  overflow-hidden">
              <img
                src="/Group 587.png"
                alt="Logo"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          </div>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href.substring(1));
              }}
              className={`relative px-4 py-2  transition-colors ${
                activeSection === item.href.substring(1)
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.title}
              {activeSection === item.href.substring(1) && (
                <span className="absolute -bottom-5 left-0 h-1 w-full bg-[#DEDEDE78]"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Right Nav Icon (Mobile Menu Toggle) */}
        {mobileMenuOpen && (
          <div className="absolute top-[69.5px]  left-0 w-full bg-[#FFFFFF1A] backdrop-blur-[28.8px]  text-white p-6 lg:hidden z-50">
            <nav className="flex flex-col gap-4 items-center">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  className="text-lg"
                  onClick={() => scrollToSection(item.href.substring(1))}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
