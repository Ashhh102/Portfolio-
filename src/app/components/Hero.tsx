import { Button } from "./ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0F172A] px-4 py-20 relative overflow-hidden">
      {/* Minimalistic background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-[#6366F1] rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-[#06B6D4] rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-[#06B6D4] font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-[#E5E7EB]">
              P R Ashwin Karthikeyan
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#94A3B8]">
              AI | Machine Learning | Business Analytics
            </h2>
          </div>
          
          <p className="text-lg text-[#94A3B8] leading-relaxed">
            Computer Science student specializing in Computer Science and Business Systems with a strong interest in Artificial Intelligence, Machine Learning, and Data Science. Passionate about developing intelligent systems and data-driven applications that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="group bg-[#6366F1] hover:bg-[#5558E3] text-white">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#6366F1] text-[#6366F1] hover:bg-[#6366F1] hover:text-white">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/Ashhh102"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-[#1E293B] hover:bg-[#334155] transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-[#E5E7EB]" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashwin-karthikeyan-94b96a28b"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-[#1E293B] hover:bg-[#334155] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-[#E5E7EB]" />
            </a>
            <a
              href="mailto:Ashwin.Karthikeyan2005@gmail.com"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-[#1E293B] hover:bg-[#334155] transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-[#E5E7EB]" />
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Minimalistic geometric background */}
          <div className="relative w-full aspect-square max-w-lg">
            {/* Outer rings */}
            <div className="absolute inset-0 rounded-full border border-[#6366F1]/10"></div>
            <div className="absolute inset-8 rounded-full border border-[#6366F1]/15"></div>
            <div className="absolute inset-16 rounded-full border border-[#06B6D4]/15"></div>
            <div className="absolute inset-24 rounded-full border border-[#06B6D4]/20"></div>
            
            {/* Center gradient circle */}
            <div className="absolute inset-32 rounded-full bg-gradient-to-br from-[#6366F1]/5 to-[#06B6D4]/5"></div>
            
            {/* Subtle corner accents */}
            <div className="absolute top-0 right-1/4 w-2 h-2 rounded-full bg-[#6366F1]"></div>
            <div className="absolute bottom-1/4 left-0 w-2 h-2 rounded-full bg-[#06B6D4]"></div>
            <div className="absolute top-1/3 right-0 w-1 h-1 rounded-full bg-[#6366F1]/50"></div>
            <div className="absolute bottom-0 left-1/3 w-1 h-1 rounded-full bg-[#06B6D4]/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
