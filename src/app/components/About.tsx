import { GraduationCap, Brain, TrendingUp, Database } from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Computer Science",
      description: "B.Tech in Computer Science and Business Systems (CSBS)",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Deep learning, neural networks, and intelligent systems",
    },
    {
      icon: TrendingUp,
      title: "Business Analytics",
      description: "Data-driven insights and business intelligence",
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Time series forecasting and predictive modeling",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#E5E7EB] mb-4">About Me</h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Focused on the intersection of technology, data analytics, and business intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#1E293B] hover:bg-[#334155] transition-colors group border border-[rgba(148,163,184,0.1)]"
              >
                <div className="h-12 w-12 rounded-lg bg-[#6366F1]/10 flex items-center justify-center mb-4 group-hover:bg-[#6366F1]/20 transition-colors">
                  <Icon className="h-6 w-6 text-[#6366F1]" />
                </div>
                <h3 className="font-semibold text-[#E5E7EB] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#94A3B8] text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <Card className="p-8 bg-[#1E293B] border-[rgba(148,163,184,0.1)]">
              <p className="text-lg text-[#94A3B8] leading-relaxed mb-4">
                I am currently pursuing a Bachelor of Technology in Computer Science and Business Systems (CSBS) at R.M.K Engineering College. My academic journey focuses on the intersection of technology, data analytics, and business intelligence.
              </p>
              <p className="text-lg text-[#94A3B8] leading-relaxed">
                I have a strong interest in Artificial Intelligence, Machine Learning, Business Analytics, and Data Science. I enjoy building AI-driven solutions and analytics models that transform raw data into meaningful insights and support intelligent decision making. Through internships and projects, I have gained hands-on experience in machine learning model development, web application development, and data-driven systems.
              </p>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="p-8 bg-gradient-to-br from-[#6366F1]/10 to-[#06B6D4]/10 border-[#6366F1]/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-[#6366F1]/20 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-[#6366F1]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#E5E7EB]">Education</h3>
                </div>
              </div>
              <h4 className="text-[#E5E7EB] font-semibold mb-2">
                Bachelor of Technology
              </h4>
              <p className="text-[#06B6D4] mb-2">Computer Science and Business Systems</p>
              <p className="text-[#94A3B8] text-sm mb-3">R.M.K Engineering College</p>
              <div className="flex justify-between text-sm">
                <span className="text-[#94A3B8]">2023 - 2027</span>
                <span className="text-[#6366F1] font-semibold">CGPA: 7.39 / 10</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
