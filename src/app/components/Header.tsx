import { Button } from "./ui/button";
import { Menu, Download } from "lucide-react";

export function Header() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0F172A]/80 backdrop-blur-md border-b border-[rgba(148,163,184,0.1)] z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#06B6D4] flex items-center justify-center">
            <span className="text-white font-bold text-lg">AK</span>
          </div>
          <span className="font-semibold text-[#E5E7EB] text-lg">
            Ashwin Karthikeyan
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-[#94A3B8] hover:text-[#6366F1] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex bg-[#6366F1] hover:bg-[#5558E3] text-white">
            <Download className="h-4 w-4 mr-2" />
            Resume
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-[#E5E7EB] hover:bg-[#1E293B]">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
