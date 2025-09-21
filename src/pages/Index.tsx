import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import backgroundImage from "@/assets/background-landscape.jpg";
import ChatBot from "@/components/ChatBot";
import AssessmentUnitSelector from "@/components/AssessmentUnitSelector";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Water-themed overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-800/30 to-teal-900/20"></div>
      
      {/* Water ripple effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      {/* Header Section */}
      <header className="flex items-center justify-between p-4 md:p-6 relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="./assets/logo1.png" 
            alt="IN-GRES Logo" 
            className="h-12 md:h-16 w-auto"
          />
        </div>
        
        {/* Home Button */}
        <Button 
          variant="outline" 
          className="bg-card-overlay border-card-border text-foreground hover:bg-primary hover:text-primary-foreground text-xs md:text-sm px-3 md:px-4 py-2"
        >
          <span className="hidden sm:inline">Click to Home Page</span>
          <span className="sm:hidden">Home</span>
        </Button>
      </header>

      {/* Main Title */}
      <div className="text-center mt-2 md:mt-8 mb-4 md:mb-12 px-3 md:px-4">
        <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-normal text-white drop-shadow-lg leading-tight">
          "INDIA-Groundwater Resource Estimation System (IN-GRES)"
        </h1>
      </div>

      {/* Main Content Card */}
      <div className="max-w-6xl mx-auto px-2 md:px-6 pb-16 md:pb-20">
        <Card className="bg-content-overlay border-content-border backdrop-blur-sm">
          <div className="p-3 md:p-8">
            {/* GEC Overview Header */}
            <div className="text-center mb-4 md:mb-8">
              <h2 className="text-base md:text-2xl font-semibold text-foreground border-b-2 border-content-border pb-2 inline-block">
                GEC-Overview
              </h2>
            </div>

            {/* Tabs for different sections */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-blue-50/50 border border-cyan-200/50">
                <TabsTrigger value="overview" className="text-xs md:text-sm">Overview</TabsTrigger>
                <TabsTrigger value="assessment" className="text-xs md:text-sm">Assessment Units</TabsTrigger>
                <TabsTrigger value="data" className="text-xs md:text-sm">Data Explorer</TabsTrigger>
                <TabsTrigger value="reports" className="text-xs md:text-sm">Reports</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">

            {/* What is GEC Section */}
            <div className="mb-4 md:mb-8">
              <h3 className="text-base md:text-xl font-semibold text-foreground mb-2 md:mb-4 border-b border-content-border pb-1 md:pb-2">
                What is GEC?
              </h3>
              
              <div className="space-y-2 md:space-y-4 text-foreground leading-relaxed text-xs md:text-base">
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
            <div className="mb-4 md:mb-8">
              <h3 className="text-base md:text-xl font-semibold text-foreground mb-2 md:mb-4 border-b border-content-border pb-1 md:pb-2">
                Objectives
              </h3>
              
              <ul className="space-y-1 md:space-y-2 text-foreground leading-relaxed text-xs md:text-base">
                <li>• To provide common and standardized platform for Ground Water Resource Assessment for the entire country based on Ground Water Resource Estimation Committee-2015 (GEC-2015) methodology.</li>
                <li>• Pan-India operationalization (Joint assessment by CGWB and State Ground Water/ Nodal Departments).</li>
                <li>• Visibility dashboards allowing user to view the data/map and download reports.</li>
              </ul>
            </div>

            {/* IN-GRES Information Section */}
            <div className="mb-4 md:mb-8">
              <h3 className="text-base md:text-xl font-semibold text-foreground mb-2 md:mb-4 border-b border-content-border pb-1 md:pb-2">
                IN-GRES provides the following information/data/map to the users:
              </h3>
              
              <ul className="space-y-1 md:space-y-2 text-foreground leading-relaxed text-xs md:text-base">
                <li>• Dynamic Ground Water Resources of India, 2020 (India, State/UT, District, Assessment Units-wise) Annual Ground Water Recharge, Annual Extractable Ground Water Resources, Ground Water Extraction, Stage of Extraction and Categorization of the assessment units etc.</li>
                <li>• Thematic map (GIS) based on the Annual Ground Water Recharge, Annual Ground Water Extraction and categorization of assessment units etc.</li>
              </ul>
            </div>

            {/* Remark Section */}
            <div className="mb-4 md:mb-8">
              <h3 className="text-base md:text-xl font-semibold text-foreground mb-2 md:mb-4 border-b border-content-border pb-1 md:pb-2">
                Remark
              </h3>
              
              <p className="text-foreground leading-relaxed text-xs md:text-base">
                1. In the MIS datasheets, all the parameters (Annual Ground Water Recharge, Annual Extractable Ground Water Resources, and Ground Water Extraction etc.) are given under three components i.e Command (C), Non-Command (NC) and Poor Water Quality (PQ). However the dynamic ground water resources comprises of sum total of fresh water resources under Command(C)and Non-command(NC) components and excludes the resources under poor water quality (saline). So for all practical purposes fresh water resources are taken into consideration including categorization of assessment units.
              </p>
            </div>
              </TabsContent>
              
              <TabsContent value="assessment" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Assessment Unit Navigation</h3>
                  <AssessmentUnitSelector />
                </div>
              </TabsContent>
              
              <TabsContent value="data" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Data Explorer</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border border-cyan-200/50">
                      <h4 className="font-semibold text-blue-900 mb-2">Quick Stats</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-center p-2 bg-white/50 rounded">
                          <div className="font-bold text-blue-600">4,000+</div>
                          <div className="text-xs text-gray-600">Assessment Units</div>
                        </div>
                        <div className="text-center p-2 bg-white/50 rounded">
                          <div className="font-bold text-green-600">1,200</div>
                          <div className="text-xs text-gray-600">Safe Zones</div>
                        </div>
                        <div className="text-center p-2 bg-white/50 rounded">
                          <div className="font-bold text-yellow-600">1,500</div>
                          <div className="text-xs text-gray-600">Semi-Critical</div>
                        </div>
                        <div className="text-center p-2 bg-white/50 rounded">
                          <div className="font-bold text-red-600">1,300</div>
                          <div className="text-xs text-gray-600">Critical/Over-exploited</div>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-4 bg-gradient-to-br from-green-50 to-teal-50 border border-teal-200/50">
                      <h4 className="font-semibold text-green-900 mb-2">Recent Updates</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center p-2 bg-white/50 rounded">
                          <span className="text-green-700">2020 Assessment Data</span>
                          <span className="text-xs text-gray-500">Updated</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-white/50 rounded">
                          <span className="text-green-700">GEC-2015 Methodology</span>
                          <span className="text-xs text-gray-500">Active</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-white/50 rounded">
                          <span className="text-green-700">AI Assistant</span>
                          <span className="text-xs text-gray-500">Beta</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reports" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Report Generation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/50 hover:shadow-md transition-shadow cursor-pointer">
                      <h4 className="font-semibold text-purple-900 mb-2">📊 State Report</h4>
                      <p className="text-sm text-purple-700 mb-3">Generate comprehensive groundwater assessment report for any state</p>
                      <Button size="sm" className="w-full bg-purple-500 hover:bg-purple-600">Generate</Button>
                    </Card>
                    
                    <Card className="p-4 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200/50 hover:shadow-md transition-shadow cursor-pointer">
                      <h4 className="font-semibold text-orange-900 mb-2">📈 Trend Analysis</h4>
                      <p className="text-sm text-orange-700 mb-3">Historical trend analysis and projections</p>
                      <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600">Generate</Button>
                    </Card>
                    
                    <Card className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200/50 hover:shadow-md transition-shadow cursor-pointer">
                      <h4 className="font-semibold text-teal-900 mb-2">🗺️ GIS Report</h4>
                      <p className="text-sm text-teal-700 mb-3">Geographic information system reports with maps</p>
                      <Button size="sm" className="w-full bg-teal-500 hover:bg-teal-600">Generate</Button>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-black/80 text-white px-2 md:px-6 py-2 md:py-3">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto space-y-1 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-8">
            <span className="text-xs md:text-sm">Visitors: - - - -</span>
            
            <div className="flex items-center space-x-1 md:space-x-2">
              <span className="text-xs md:text-sm">Powered by:</span>
              <img 
                src="./assets/logoIIT.png" 
                alt="IIT Hyderabad" 
                className="h-5 md:h-8 w-auto"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-1 md:space-x-2">
            <span className="text-xs md:text-sm text-center">Prototype by Team Syntax Error – Smart India Hackathon 2025</span>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <ChatBot />
    </div>
  );
};

export default Index;