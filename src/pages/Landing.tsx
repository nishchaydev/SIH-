import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, MessageCircle, Users, Database, Shield, Code, Search, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import backgroundImage from "@/assets/background-landscape.jpg";

const Landing = () => {
  const teamMembers = [
    {
      name: "Nishchay Gupta",
      role: "Team Lead & Full Stack Developer",
      description: "Leads development, backend integration & overall architecture",
      icon: <Code className="w-6 h-6 text-blue-600" />
    },
    {
      name: "Pratibha Shah",
      role: "UI/UX Designer & Research Analyst",
      description: "Designs user flows & conducts domain research",
      icon: <Users className="w-6 h-6 text-green-600" />
    },
    {
      name: "Nikhil Pal",
      role: "Backend Developer & Presentation Lead",
      description: "Supports backend dev and manages presentation/content",
      icon: <Database className="w-6 h-6 text-purple-600" />
    },
    {
      name: "Nisheeka Chavahan",
      role: "Frontend Developer & AI/ML Enthusiast",
      description: "Builds frontend and experiments with ML integration",
      icon: <Search className="w-6 h-6 text-orange-600" />
    },
    {
      name: "Priyanshi Pawar",
      role: "Database & API Integration Engineer",
      description: "Manages data schemas and API connectivity with INGRES",
      icon: <Shield className="w-6 h-6 text-red-600" />
    },
    {
      name: "Mahak Bhagel",
      role: "Security & QA Engineer",
      description: "Ensures secure backend and conducts quality testing",
      icon: <Database className="w-6 h-6 text-cyan-600" />
    }
  ];

  const scrollToGEC = () => {
    document.getElementById('gec-overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Water-themed overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-800/30 to-teal-900/20"></div>
      
      {/* Water ripple effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/assets/logo1.png" 
              alt="IN-GRES Logo" 
              className="h-16 md:h-24 w-auto mx-auto mb-6"
            />
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl mb-6 leading-tight">
            AI-Driven ChatBOT for INGRES
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 drop-shadow-lg mb-8 leading-relaxed">
            Making groundwater data simple, visual, and accessible
          </p>
          
          {/* Quick Intro */}
          <p className="text-lg md:text-xl text-white/80 drop-shadow-md mb-12 max-w-3xl mx-auto leading-relaxed">
            Currently a frontend prototype. Backend integration with INGRES database will be added in the next phase.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/prototype">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Checkout Prototype
              </Button>
            </Link>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToGEC}
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
            >
              <Users className="w-6 h-6 mr-3" />
              Learn More
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-8 h-8 text-white/60" />
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span>Problem Statement ID: 25066</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Development of an AI-driven ChatBOT for INGRES as a Virtual Assistant
              </h2>
              <p className="text-lg text-white/80">
                Ministry of Jal Shakti | Smart India Hackathon 2025
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <p className="text-white/90 text-lg leading-relaxed text-center">
                To improve accessibility, it is proposed to develop an AI-driven ChatBOT for INGRES. 
                This intelligent virtual assistant will enable users to easily query groundwater data, 
                access historical and current assessments, and obtain instant insights without navigating complex datasets.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* GEC Overview Section */}
      <section id="gec-overview" className="py-20 relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                India-Groundwater Resource Estimation System (IN-GRES)
              </h2>
              <p className="text-lg text-white/80 mb-6">
                Click to Home Page → <a href="https://ingres.iith.ac.in/home" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">INGRES Official Site</a>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* What is GEC */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">What is GEC?</h3>
                <p className="text-white/90 leading-relaxed">
                  Groundwater assessment is carried out by CGWB + State/UT departments under GEC-2015 guidelines.
                </p>
                
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">It involves computing:</h4>
                  <ul className="space-y-2 text-white/90">
                    <li>• Annual Ground Water Recharge</li>
                    <li>• Annual Extractable Ground Water Resources</li>
                    <li>• Total Annual Ground Water Extraction</li>
                    <li>• Stage of Extraction (SoE)</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Stage of Extraction (SoE):</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex justify-between"><span className="text-green-300">Safe:</span><span className="text-white/80">&lt;70%</span></div>
                    <div className="flex justify-between"><span className="text-yellow-300">Semi-Critical:</span><span className="text-white/80">70-90%</span></div>
                    <div className="flex justify-between"><span className="text-orange-300">Critical:</span><span className="text-white/80">90-100%</span></div>
                    <div className="flex justify-between"><span className="text-red-300">Over-Exploited:</span><span className="text-white/80">&gt;100%</span></div>
                  </div>
                </div>
              </div>

              {/* About INGRES */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">About INGRES</h3>
                <p className="text-white/90 leading-relaxed">
                  A GIS-based software developed by CGWB & IIT Hyderabad for standardized groundwater assessment.
                </p>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Objectives:</h4>
                  <ul className="space-y-2 text-white/90">
                    <li>• Standardized platform (GEC-2015)</li>
                    <li>• Pan-India operationalization</li>
                    <li>• Dashboards + maps for reports</li>
                    <li>• State/District/Unit-wise categorization</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Remark:</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Dynamic groundwater = fresh water only (excludes saline/poor quality).
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section id="team-section" className="py-20 relative z-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Team Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-4">
              Meet the Team — Syntax Error
            </h2>
            <p className="text-lg md:text-xl text-white/80 drop-shadow-md">
              Smart India Hackathon 2025
            </p>
          </div>
          
        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                    {member.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-200 font-semibold mb-3">{member.role}</p>
                <p className="text-white/80 text-sm leading-relaxed mb-4">{member.description}</p>
                
                {/* Contact Links */}
                <div className="flex justify-center space-x-3 pt-4 border-t border-white/20">
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0 bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Users className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0 bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Code className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0 bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Database className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-white/80 text-lg drop-shadow-md">
            Prototype developed for Smart India Hackathon 2025 | Ministry of Jal Shakti
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
