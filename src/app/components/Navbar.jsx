"use client";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Armada",
      link: "/armada",
    },
    {
      name: "Cara Kerja",
      link: "/#cara-kerja",
    },
    {
      name: "Testimoni",
      link: "/#testimoni",
    },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}>SewaMobilin</span>
          </div>

          <div className="hidden md:flex space-x-16">
            {navLinks.map((item) => (
              <a key={item.name} href={`${item.link}`} className={`font-medium text-base transition-colors ${scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-yellow-300"}`}>
                {item.name}
              </a>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className={scrolled ? "text-gray-900" : "text-white"} /> : <Menu className={scrolled ? "text-gray-900" : "text-white"} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {["Home", "Armada", "Tentang", "Kontak"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-700 hover:text-blue-600 font-medium">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
