import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Sparkles, Leaf } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "FinSight – AI Financial Assistant",
      description:
        "AI-powered financial assistant that analyzes income and expense data, categorizes spending trends, and identifies financial leaks.",
      features: [
        "LLM-based NLP for financial data analysis",
        "Interactive dashboards and financial insights",
        "Personalized savings recommendations",
      ],
      tags: ["AI", "NLP", "Machine Learning", "Python", "Data Analytics"],
      icon: Sparkles,
      iconColor: "text-[#6366F1]",
      iconBg: "bg-[#6366F1]/20",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "AgroPredict – Crop Disease Detection Model",
      description:
        "AI-driven agricultural platform designed to detect crop diseases early and provide preventive recommendations to farmers.",
      features: [
        "Machine learning-based image analysis",
        "Disease detection and diagnosis",
        "User-friendly web and mobile interface",
      ],
      tags: ["Computer Vision", "ML", "TensorFlow", "Python", "Agriculture"],
      icon: Leaf,
      iconColor: "text-[#06B6D4]",
      iconBg: "bg-[#06B6D4]/20",
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#E5E7EB] mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            AI-driven solutions solving real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden flex flex-col bg-[#1E293B] border-[rgba(148,163,184,0.1)] hover:border-[#6366F1]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#6366F1]/10"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`h-12 w-12 rounded-lg ${project.iconBg} flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${project.iconColor}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#E5E7EB] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#E5E7EB] mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-[#94A3B8] flex items-start">
                          <span className="text-[#6366F1] mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-[#6366F1]/30 text-[#94A3B8]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-[#6366F1]/30 text-[#94A3B8] hover:bg-[#6366F1]/10 hover:text-[#6366F1]">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-[#6366F1] hover:bg-[#5558E3] text-white">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
