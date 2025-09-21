import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import backgroundImage from "@/assets/background-landscape.jpg";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Header Section */}
      <header className="flex items-center justify-between p-6 relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/assets/logo1.png" 
            alt="IN-GRES Logo" 
            className="h-16 w-auto"
          />
        </div>
        
        {/* Home Button */}
        <Button 
          variant="outline" 
          className="bg-card-overlay border-card-border text-foreground hover:bg-primary hover:text-primary-foreground"
        >
          Click to Home Page
        </Button>
      </header>

      {/* Main Title */}
      <div className="text-center mt-8 mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-normal text-white drop-shadow-lg">
          "INDIA-Groundwater Resource Estimation System (IN-GRES)"
        </h1>
      </div>

      {/* Main Content Card */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <Card className="bg-content-overlay border-content-border backdrop-blur-sm">
          <div className="p-8">
            {/* GEC Overview Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-foreground border-b-2 border-content-border pb-2 inline-block">
                GEC-Overview
              </h2>
            </div>

            {/* What is GEC Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 border-b border-content-border pb-2">
                What is GEC?
              </h3>
              
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Assessment of 'Dynamic Ground Water Resources of India' is carried out at periodical intervals jointly by the Central Ground Water Board (CGWB) and State/UT Ground Water Departments under the guidance of State Level Committee at State levels and under the overall supervision of Central Level Expert Group. Last assessment was carried out in 2017 and re-assessment of Dynamic Ground Water Resources of India, 2020 has been carried out based on the norms and guidelines of Ground Water Resource Estimation Committee (GEC-2015) methodology.
                </p>
                
                <p>
                  The assessment involves computation of Annual Ground Water Recharge and Annual Extractable Ground Water Resources, Total Annual Ground Water Extraction (utilization) and the percentage of utilization with respect to Annual Extractable Ground Water Resources (Stage of Extraction). The assessment units (blocks/taluks/mandals/tehsil/firkas etc.) are categorized based on the Stage of Extraction (SoE) i.e 'Safe' if SoE &lt; 70 %; 'Semi-critical if SoE&gt; 70 and &lt;= 90 %; 'Critical' if SoE&gt;90 and &lt;=100 % and 'Over-exploited' if SoE&gt; 100 %.
                </p>
                
                <p>
                  <strong>"INDIA-Groundwater Resource Estimation System (IN-GRES)"</strong> is a software/web based application developed by Central Ground Water Board (CGWB) in collaboration with Indian Institute of Technology-Hyderabad (IIT-H) for assessment of ground water resources.
                </p>
              </div>
            </div>

            {/* Objectives Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 border-b border-content-border pb-2">
                Objectives
              </h3>
              
              <ul className="space-y-2 text-foreground leading-relaxed">
                <li>• To provide common and standardized platform for Ground Water Resource Assessment for the entire country based on Ground Water Resource Estimation Committee-2015 (GEC-2015) methodology.</li>
                <li>• Pan-India operationalization (Joint assessment by CGWB and State Ground Water/ Nodal Departments).</li>
                <li>• Visibility dashboards allowing user to view the data/map and download reports.</li>
              </ul>
            </div>

            {/* IN-GRES Information Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 border-b border-content-border pb-2">
                IN-GRES provides the following information/data/map to the users:
              </h3>
              
              <ul className="space-y-2 text-foreground leading-relaxed">
                <li>• Dynamic Ground Water Resources of India, 2020 (India, State/UT, District, Assessment Units-wise) Annual Ground Water Recharge, Annual Extractable Ground Water Resources, Ground Water Extraction, Stage of Extraction and Categorization of the assessment units etc.</li>
                <li>• Thematic map (GIS) based on the Annual Ground Water Recharge, Annual Ground Water Extraction and categorization of assessment units etc.</li>
              </ul>
            </div>

            {/* Remark Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 border-b border-content-border pb-2">
                Remark
              </h3>
              
              <p className="text-foreground leading-relaxed">
                1. In the MIS datasheets, all the parameters (Annual Ground Water Recharge, Annual Extractable Ground Water Resources, and Ground Water Extraction etc.) are given under three components i.e Command (C), Non-Command (NC) and Poor Water Quality (PQ). However the dynamic ground water resources comprises of sum total of fresh water resources under Command(C)and Non-command(NC) components and excludes the resources under poor water quality (saline). So for all practical purposes fresh water resources are taken into consideration including categorization of assessment units.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-black/80 text-white px-6 py-3">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-8">
            <span className="text-sm">Visitors: - - - -</span>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm">Powered by:</span>
              <img 
                src="/assets/logoIIT.png" 
                alt="IIT Hyderabad" 
                className="h-8 w-auto"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm">Prototype by Team Syntax Error – Smart India Hackathon 2025</span>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <ChatBot />
    </div>
  );
};

export default Index;