import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Ashhh102", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ashwin-karthikeyan-94b96a28b", label: "LinkedIn" },
    { icon: Mail, href: "mailto:Ashwin.Karthikeyan2005@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-[#0F172A] text-white py-12 px-4 border-t border-[rgba(148,163,184,0.1)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#06B6D4] flex items-center justify-center">
                <span className="text-white font-bold text-lg">AK</span>
              </div>
              <span className="font-semibold text-lg text-[#E5E7EB]">Ashwin Karthikeyan</span>
            </div>
            <p className="text-[#94A3B8] text-sm">
              AI & Machine Learning Enthusiast | Business Analytics Student with a keen interest in Data Science
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#E5E7EB]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-[#94A3B8] hover:text-[#6366F1] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#94A3B8] hover:text-[#6366F1] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-[#94A3B8] hover:text-[#6366F1] transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#94A3B8] hover:text-[#6366F1] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#E5E7EB]">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="h-10 w-10 rounded-full bg-[#1E293B] hover:bg-[#334155] flex items-center justify-center transition-colors hover:border hover:border-[#6366F1]"
                  >
                    <Icon className="h-5 w-5 text-[#E5E7EB]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(148,163,184,0.1)] pt-8 text-center">
          <p className="text-sm text-[#94A3B8]">© 2026 P R Ashwin Karthikeyan</p>
          <p className="text-xs text-[#94A3B8] mt-1">Designed and built by Ashwin Karthikeyan</p>
        </div>
      </div>
    </footer>
  );
}
