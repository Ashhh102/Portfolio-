import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        "Python",
        "C",
        "C++",
        "Java",
        "JavaScript",
        "SQL",
      ],
      color: "bg-[#6366F1]/20 text-[#6366F1] hover:bg-[#6366F1]/30 border-[#6366F1]/30",
    },
    {
      category: "Web Technologies",
      skills: [
        "HTML5",
        "CSS3",
        "React JS",
        "Django",
        "MongoDB",
      ],
      color: "bg-[#06B6D4]/20 text-[#06B6D4] hover:bg-[#06B6D4]/30 border-[#06B6D4]/30",
    },
    {
      category: "Machine Learning & Data Science",
      skills: [
        "TensorFlow",
        "NumPy",
        "Matplotlib",
        "Machine Learning",
        "Time Series Forecasting",
      ],
      color: "bg-[#8B5CF6]/20 text-[#8B5CF6] hover:bg-[#8B5CF6]/30 border-[#8B5CF6]/30",
    },
    {
      category: "Tools & Technologies",
      skills: [
        "Git",
        "Zoho Books",
        "Zoho Mail",
        "Zoho People",
        "ERP Systems",
        "SAP ERP (Exposure)",
      ],
      color: "bg-[#F59E0B]/20 text-[#F59E0B] hover:bg-[#F59E0B]/30 border-[#F59E0B]/30",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#E5E7EB] mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, data-driven solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-[#1E293B] border-[rgba(148,163,184,0.1)]">
              <h3 className="text-xl font-semibold text-[#E5E7EB] mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className={`${category.color} transition-colors cursor-default border`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
