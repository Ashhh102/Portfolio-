import { Card } from "./ui/card";
import { Award } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      title: "SAP Business Analyst Professional Certificate",
      issuer: "Coursera",
      icon: "🏆",
    },
    {
      title: "Basic Principles of Design",
      issuer: "IBM SkillBuild",
      icon: "🎨",
    },
    {
      title: "SEO with Squarespace",
      issuer: "Coursera",
      icon: "🔍",
    },
    {
      title: "Journey to Cloud: Envisioning Your Solution",
      issuer: "IBM",
      icon: "☁️",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#E5E7EB] mb-4">
            Certifications
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 bg-[#1E293B] border-[rgba(148,163,184,0.1)] hover:border-[#6366F1]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#6366F1]/10 group"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="h-16 w-16 rounded-full bg-[#6366F1]/10 flex items-center justify-center text-3xl group-hover:bg-[#6366F1]/20 transition-colors">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[#E5E7EB] mb-1 text-sm">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8]">{cert.issuer}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
