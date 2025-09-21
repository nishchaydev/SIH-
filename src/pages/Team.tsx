import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Github, Linkedin, Mail, Users, Code, Lightbulb, Award } from "lucide-react";
import { Link } from "react-router-dom";
import backgroundImage from "@/assets/background-landscape.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Nishchay Gupta",
      role: "Team Lead & Full Stack Developer",
      skills: ["React", "Node.js", "Architecture", "Backend Integration"],
      description: "Leads development, backend integration & overall architecture",
      avatar: "👨‍💻"
    },
    {
      name: "Pratibha Shah",
      role: "UI/UX Designer & Research Analyst",
      skills: ["UI/UX Design", "User Research", "Figma", "Domain Analysis"],
      description: "Designs user flows & conducts domain research",
      avatar: "👩‍🎨"
    },
    {
      name: "Nikhil Pal",
      role: "Backend Developer & Presentation Lead",
      skills: ["Python", "Backend Development", "Presentation", "Content Management"],
      description: "Supports backend dev and manages presentation/content",
      avatar: "👨‍🔬"
    },
    {
      name: "Nisheeka Chavahan",
      role: "Frontend Developer & AI/ML Enthusiast",
      skills: ["React", "Frontend Development", "Machine Learning", "AI Integration"],
      description: "Builds frontend and experiments with ML integration",
      avatar: "👩‍💻"
    },
    {
      name: "Priyanshi Pawar",
      role: "Database & API Integration Engineer",
      skills: ["Database Design", "API Development", "Data Schemas", "INGRES Integration"],
      description: "Manages data schemas and API connectivity with INGRES",
      avatar: "🛡️"
    },
    {
      name: "Mahak Bhagel",
      role: "Security & QA Engineer",
      skills: ["Security", "Quality Testing", "Backend Security", "QA Processes"],
      description: "Ensures secure backend and conducts quality testing",
      avatar: "🗄️"
    }
  ];

  const projectFeatures = [
    {
      icon: <Code className="w-6 h-6 text-blue-600" />,
      title: "Modern Tech Stack",
      description: "Built with React, TypeScript, Vite, and Tailwind CSS for optimal performance"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-600" />,
      title: "AI-Powered Chatbot",
      description: "Intelligent virtual assistant for groundwater data queries with multilingual support"
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "User-Centric Design",
      description: "Mobile-responsive design with intuitive navigation and accessibility features"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: "Hackathon Ready",
      description: "Developed for Smart India Hackathon 2025 with focus on real-world impact"
    }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Water-themed overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-800/30 to-teal-900/20"></div>
      
      {/* Water ripple effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6 relative z-10">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <Button variant="outline" size="sm" className="bg-card-overlay border-card-border text-foreground hover:bg-primary hover:text-primary-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <img 
            src="/assets/logo1.png" 
            alt="IN-GRES Logo" 
            className="h-12 md:h-16 w-auto"
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            Team Syntax Error
          </h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow-md mb-6">
            Smart India Hackathon 2025 - Groundwater Resource Estimation System
          </p>
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">Problem Statement ID: 25066</span>
          </div>
        </div>

        {/* Project Overview */}
        <Card className="bg-content-overlay border-content-border backdrop-blur-sm mb-12">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              🌊 INGRES AI Assistant
            </h2>
            <p className="text-lg text-foreground text-center mb-8 leading-relaxed">
              An AI-driven ChatBOT for INGRES (India Groundwater Resource Estimation System) 
              that enables users to easily query groundwater data, access historical assessments, 
              and obtain instant insights without navigating complex datasets.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectFeatures.map((feature, index) => (
                <div key={index} className="text-center p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/20">
                  <div className="flex justify-center mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Team Members */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 drop-shadow-lg">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-content-overlay border-content-border backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-foreground/80 mb-4 leading-relaxed">{member.description}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-2">
                    <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact & Links */}
        <Card className="bg-content-overlay border-content-border backdrop-blur-sm">
          <div className="p-6 md:p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Repository</h3>
                <Button variant="outline" className="w-full">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Live Demo</h3>
                <Button variant="outline" className="w-full">
                  <Code className="w-4 h-4 mr-2" />
                  Try the App
                </Button>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Contact</h3>
                <Button variant="outline" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Team
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Team;
