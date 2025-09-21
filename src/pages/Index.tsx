import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import backgroundImage from "@/assets/background-landscape.jpg";
import ChatBot from "@/components/ChatBot";
import AssessmentUnitSelector from "@/components/AssessmentUnitSelector";
import GECAssessmentLocations from "@/components/GECAssessmentLocations";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Water-themed overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-cyan-800/70 to-teal-900/60"></div>
      
      {/* Water ripple effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent animate-pulse"></div>
      {/* Header Section */}
      <header className="flex items-center justify-between p-4 md:p-6 relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/assets/logo1.png" 
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
      <div className="text-center mt-4 md:mt-12 mb-6 md:mb-16 px-4 md:px-6">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl leading-tight bg-black/20 px-4 py-2 rounded-lg">
          INDIA-Groundwater Resource Estimation System
        </h1>
        <p className="text-sm md:text-lg text-white drop-shadow-lg mt-2 md:mt-4 font-semibold bg-black/10 px-3 py-1 rounded-lg">
          AI-Powered Virtual Assistant for Groundwater Data Analysis
        </p>
      </div>

      {/* Main Content Card */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-24">
        <Card className="bg-white/98 border-content-border backdrop-blur-sm shadow-2xl">
          <div className="p-4 md:p-10">
            {/* GEC Overview Header */}
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 border-b-2 border-blue-300 pb-3 inline-block">
                Groundwater Resource Assessment
              </h2>
            </div>

            {/* Tabs for different sections */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-blue-50/50 border border-cyan-200/50 h-auto">
                <TabsTrigger value="overview" className="text-sm md:text-base py-3">Overview</TabsTrigger>
                <TabsTrigger value="assessment" className="text-sm md:text-base py-3">Assessment Units</TabsTrigger>
                <TabsTrigger value="data" className="text-sm md:text-base py-3">Data Explorer</TabsTrigger>
                <TabsTrigger value="reports" className="text-sm md:text-base py-3">Reports</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-8">
                {/* Key Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-cyan-200/50">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">What is GEC?</h3>
                    <p className="text-sm text-gray-800 leading-relaxed font-medium">
                      Ground Water Resource Estimation Committee (GEC-2015) methodology for assessment of dynamic groundwater resources across India.
                    </p>
                  </Card>
                  
                  <Card className="p-6 bg-gradient-to-br from-green-50 to-teal-50 border border-teal-200/50">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Assessment Categories</h3>
                    <div className="space-y-2 text-sm text-gray-800 font-medium">
                      <div className="flex justify-between"><span>Safe:</span><span>&lt; 70%</span></div>
                      <div className="flex justify-between"><span>Semi-Critical:</span><span>70-90%</span></div>
                      <div className="flex justify-between"><span>Critical:</span><span>90-100%</span></div>
                      <div className="flex justify-between"><span>Over-exploited:</span><span>&gt; 100%</span></div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/50">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">AI Assistant</h3>
                    <p className="text-sm text-gray-800 leading-relaxed font-medium">
                      Ask questions about groundwater data in multiple languages and get instant insights with interactive charts.
                    </p>
                  </Card>
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-cyan-200/50">
                  <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Quick Statistics</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">4,000+</div>
                      <div className="text-sm text-gray-600">Assessment Units</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">1,200</div>
                      <div className="text-sm text-gray-600">Safe Zones</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">1,500</div>
                      <div className="text-sm text-gray-600">Semi-Critical</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">1,300</div>
                      <div className="text-sm text-gray-600">Critical/Over-exploited</div>
                    </div>
              </div>
            </div>
              </TabsContent>
              
              <TabsContent value="assessment" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">GEC Assessment Locations</h3>
                  <GECAssessmentLocations />
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
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto space-y-1 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-8">
            <span className="text-xs md:text-sm">Visitors: - - - -</span>
            
            <div className="flex items-center space-x-1 md:space-x-2">
              <span className="text-xs md:text-sm">Powered by:</span>
              <img 
                src="/assets/logoIIT.png" 
                alt="IIT Hyderabad" 
                className="h-5 md:h-8 w-auto"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-1 md:space-x-4">
            <Link 
              to="/team" 
              className="text-xs md:text-sm text-center hover:text-blue-300 transition-colors duration-200 underline"
            >
              Prototype by Team Syntax Error – Smart India Hackathon 2025
            </Link>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <ChatBot />
    </div>
  );
};

export default Index;