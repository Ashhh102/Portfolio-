import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Ashwin.Karthikeyan2005@gmail.com",
      href: "mailto:Ashwin.Karthikeyan2005@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "#",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/ashwin-karthikeyan-94b96a28b",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Ashhh102",
      href: "https://github.com/Ashhh102",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#E5E7EB] mb-4">
            Contact Me
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Let's discuss opportunities in AI, ML, or analytics projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-6 rounded-xl bg-[#1E293B] hover:bg-[#334155] transition-colors border border-[rgba(148,163,184,0.1)] hover:border-[#6366F1]/30"
              >
                <div className="h-12 w-12 rounded-full bg-[#6366F1]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-[#6366F1]" />
                </div>
                <div>
                  <p className="text-sm text-[#94A3B8]">{info.label}</p>
                  <p className="font-medium text-[#E5E7EB] text-sm">{info.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        <Card className="p-8 bg-[#1E293B] border-[rgba(148,163,184,0.1)]">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-[#E5E7EB]">
                  Your Name
                </label>
                <Input id="name" placeholder="John Doe" className="bg-[#0F172A] border-[rgba(148,163,184,0.2)] text-[#E5E7EB] placeholder:text-[#94A3B8]" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-[#E5E7EB]">
                  Your Email
                </label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-[#0F172A] border-[rgba(148,163,184,0.2)] text-[#E5E7EB] placeholder:text-[#94A3B8]" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-[#E5E7EB]">
                Subject
              </label>
              <Input id="subject" placeholder="Project Collaboration" className="bg-[#0F172A] border-[rgba(148,163,184,0.2)] text-[#E5E7EB] placeholder:text-[#94A3B8]" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-[#E5E7EB]">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or opportunity..."
                rows={6}
                className="bg-[#0F172A] border-[rgba(148,163,184,0.2)] text-[#E5E7EB] placeholder:text-[#94A3B8]"
              />
            </div>

            <Button size="lg" className="w-full md:w-auto bg-[#6366F1] hover:bg-[#5558E3] text-white">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
