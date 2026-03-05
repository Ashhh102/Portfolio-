import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Student Research Intern",
      organization: "National Institute of Technology Tiruchirappalli (NIT Trichy)",
      period: "June 2025 – July 2025",
      description:
        "Worked on an AI-based Sales Forecasting System using BiLSTM with Attention architecture for product demand prediction. Performed data preprocessing, feature engineering, and evaluated model performance using MAE, RMSE, MAPE, and R² metrics.",
      achievements: [
        "Developed BiLSTM with Attention model for sales forecasting",
        "Performed advanced data preprocessing and feature engineering",
        "Evaluated model performance using MAE, RMSE, MAPE, and R² metrics",
        "Achieved significant accuracy in product demand prediction",
      ],
    },
    {
      type: "work",
      title: "Frontend Development Intern",
      organization: "Technoble Consulting Services Pvt Ltd",
      period: "June 2024 – July 2024",
      description:
        "Contributed to front-end development for a web and mobile application named Bestabe. Worked with Zoho Books, Zoho Mail, and Zoho People modules and gained exposure to ERP and SAP ERP solutions.",
      achievements: [
        "Developed front-end for Bestabe web and mobile application",
        "Integrated Zoho Books, Zoho Mail, and Zoho People modules",
        "Gained hands-on exposure to ERP and SAP ERP solutions",
        "Collaborated with cross-functional teams on product development",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#0F172A]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#E5E7EB] mb-4">
            Experience
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Professional journey in AI, Machine Learning, and Web Development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-[#334155] last:pb-0">
              <div className="absolute left-0 top-0 -translate-x-1/2 h-12 w-12 rounded-full bg-[#1E293B] border-4 border-[#334155] flex items-center justify-center">
                {exp.type === "work" ? (
                  <Briefcase className="h-5 w-5 text-[#6366F1]" />
                ) : (
                  <GraduationCap className="h-5 w-5 text-[#06B6D4]" />
                )}
              </div>
              
              <div className="ml-4 bg-[#1E293B] p-6 rounded-xl border border-[rgba(148,163,184,0.1)] hover:border-[#6366F1]/30 transition-colors">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-[#E5E7EB]">
                      {exp.title}
                    </h3>
                    <p className="text-[#6366F1] font-medium">
                      {exp.organization}
                    </p>
                  </div>
                  <span className="text-sm text-[#94A3B8] bg-[#334155] px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-[#94A3B8] mb-3">{exp.description}</p>
                
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="text-sm text-[#94A3B8] flex items-start"
                    >
                      <span className="text-[#6366F1] mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
