import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, MapPin, Droplets, AlertTriangle, CheckCircle, Clock, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import backgroundImage from "@/assets/background-landscape.jpg";
import ChatBot from "@/components/ChatBot";

const Prototype = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // GEC Locations Data
  const gecLocations = [
    // Major Cities
    { name: "Mumbai", state: "Maharashtra", category: "major", status: "over-exploited", recharge: 150, extraction: 185, stage: 123.3, coordinates: "19.0760°N, 72.8777°E" },
    { name: "Delhi", state: "Delhi", category: "major", status: "critical", recharge: 200, extraction: 180, stage: 90.0, coordinates: "28.7041°N, 77.1025°E" },
    { name: "Bangalore", state: "Karnataka", category: "major", status: "semi-critical", recharge: 120, extraction: 95, stage: 79.2, coordinates: "12.9716°N, 77.5946°E" },
    { name: "Chennai", state: "Tamil Nadu", category: "major", status: "over-exploited", recharge: 80, extraction: 110, stage: 137.5, coordinates: "13.0827°N, 80.2707°E" },
    { name: "Kolkata", state: "West Bengal", category: "major", status: "safe", recharge: 180, extraction: 120, stage: 66.7, coordinates: "22.5726°N, 88.3639°E" },
    { name: "Hyderabad", state: "Telangana", category: "major", status: "semi-critical", recharge: 140, extraction: 110, stage: 78.6, coordinates: "17.3850°N, 78.4867°E" },
    { name: "Pune", state: "Maharashtra", category: "major", status: "critical", recharge: 160, extraction: 150, stage: 93.8, coordinates: "18.5204°N, 73.8567°E" },
    { name: "Ahmedabad", state: "Gujarat", category: "major", status: "over-exploited", recharge: 90, extraction: 130, stage: 144.4, coordinates: "23.0225°N, 72.5714°E" },
    
    // Regional Centers
    { name: "Indore", state: "Madhya Pradesh", category: "regional", status: "semi-critical", recharge: 110, extraction: 95, stage: 86.4, coordinates: "22.7196°N, 75.8577°E" },
    { name: "Jaipur", state: "Rajasthan", category: "regional", status: "critical", recharge: 100, extraction: 95, stage: 95.0, coordinates: "26.9124°N, 75.7873°E" },
    { name: "Lucknow", state: "Uttar Pradesh", category: "regional", status: "safe", recharge: 200, extraction: 140, stage: 70.0, coordinates: "26.8467°N, 80.9462°E" },
    { name: "Bhopal", state: "Madhya Pradesh", category: "regional", status: "semi-critical", recharge: 130, extraction: 110, stage: 84.6, coordinates: "23.2599°N, 77.4126°E" },
    { name: "Patna", state: "Bihar", category: "regional", status: "safe", recharge: 180, extraction: 120, stage: 66.7, coordinates: "25.5941°N, 85.1376°E" },
    { name: "Bhubaneswar", state: "Odisha", category: "regional", status: "safe", recharge: 160, extraction: 100, stage: 62.5, coordinates: "20.2961°N, 85.8245°E" },
    { name: "Chandigarh", state: "Chandigarh", category: "regional", status: "critical", recharge: 80, extraction: 75, stage: 93.8, coordinates: "30.7333°N, 76.7794°E" },
    { name: "Thiruvananthapuram", state: "Kerala", category: "regional", status: "safe", recharge: 200, extraction: 120, stage: 60.0, coordinates: "8.5241°N, 76.9366°E" },
    
    // Industrial Areas
    { name: "Gurgaon", state: "Haryana", category: "industrial", status: "over-exploited", recharge: 60, extraction: 90, stage: 150.0, coordinates: "28.4595°N, 77.0266°E" },
    { name: "Noida", state: "Uttar Pradesh", category: "industrial", status: "over-exploited", recharge: 70, extraction: 100, stage: 142.9, coordinates: "28.5355°N, 77.3910°E" },
    { name: "Faridabad", state: "Haryana", category: "industrial", status: "critical", recharge: 80, extraction: 75, stage: 93.8, coordinates: "28.4089°N, 77.3178°E" },
    { name: "Ghaziabad", state: "Uttar Pradesh", category: "industrial", status: "over-exploited", recharge: 90, extraction: 120, stage: 133.3, coordinates: "28.6692°N, 77.4538°E" },
    
    // Agricultural Regions
    { name: "Ludhiana", state: "Punjab", category: "agricultural", status: "over-exploited", recharge: 100, extraction: 140, stage: 140.0, coordinates: "30.9010°N, 75.8573°E" },
    { name: "Amritsar", state: "Punjab", category: "agricultural", status: "critical", recharge: 120, extraction: 110, stage: 91.7, coordinates: "31.6340°N, 74.8723°E" },
    { name: "Jalandhar", state: "Punjab", category: "agricultural", status: "over-exploited", recharge: 110, extraction: 130, stage: 118.2, coordinates: "31.3260°N, 75.5762°E" },
    { name: "Bathinda", state: "Punjab", category: "agricultural", status: "over-exploited", recharge: 80, extraction: 110, stage: 137.5, coordinates: "30.2110°N, 74.9455°E" },
    
    // Coastal Areas
    { name: "Kochi", state: "Kerala", category: "coastal", status: "safe", recharge: 180, extraction: 100, stage: 55.6, coordinates: "9.9312°N, 76.2673°E" },
    { name: "Visakhapatnam", state: "Andhra Pradesh", category: "coastal", status: "semi-critical", recharge: 140, extraction: 110, stage: 78.6, coordinates: "17.6868°N, 83.2185°E" },
    { name: "Mangalore", state: "Karnataka", category: "coastal", status: "safe", recharge: 160, extraction: 100, stage: 62.5, coordinates: "12.9141°N, 74.8560°E" },
    { name: "Goa", state: "Goa", category: "coastal", status: "safe", recharge: 200, extraction: 120, stage: 60.0, coordinates: "15.2993°N, 74.1240°E" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'bg-green-100 text-green-800 border-green-200';
      case 'semi-critical': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'critical': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'over-exploited': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'safe': return <CheckCircle className="w-4 h-4" />;
      case 'semi-critical': return <Clock className="w-4 h-4" />;
      case 'critical': return <AlertTriangle className="w-4 h-4" />;
      case 'over-exploited': return <Droplets className="w-4 h-4" />;
      default: return <MapPin className="w-4 h-4" />;
    }
  };

  const filteredLocations = gecLocations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || location.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryCounts = {
    all: gecLocations.length,
    major: gecLocations.filter(l => l.category === 'major').length,
    regional: gecLocations.filter(l => l.category === 'regional').length,
    industrial: gecLocations.filter(l => l.category === 'industrial').length,
    agricultural: gecLocations.filter(l => l.category === 'agricultural').length,
    coastal: gecLocations.filter(l => l.category === 'coastal').length
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
      
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6 relative z-10">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Landing
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
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* India GEC Overview Section */}
        <div className="mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 md:p-12 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
                India-Groundwater Resource Estimation System (IN-GRES)
              </h1>
              <p className="text-lg text-white/80 mb-6">
                Click to Home Page → <a href="https://ingres.iith.ac.in/home" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">INGRES Official Site</a>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* What is GEC */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">GEC-Overview</h2>
                <h3 className="text-xl font-semibold text-white mb-3">What is GEC?</h3>
                <p className="text-white/90 leading-relaxed text-sm">
                  Assessment of 'Dynamic Ground Water Resources of India' is carried out at periodical intervals jointly by the Central Ground Water Board (CGWB) and State/UT Ground Water Departments under the guidance of State Level Committee at State levels and under the overall supervision of Central Level Expert Group. Last assessment was carried out in 2017 and re-assessment of Dynamic Ground Water Resources of India, 2020 has been carried out based on the norms and guidelines of Ground Water Resource Estimation Committee (GEC-2015) methodology.
                </p>
                
                <p className="text-white/90 leading-relaxed text-sm">
                  The assessment involves computation of Annual Ground Water Recharge and Annual Extractable Ground Water Resources, Total Annual Ground Water Extraction (utilization) and the percentage of utilization with respect to Annual Extractable Ground Water Resources (Stage of Extraction). The assessment units (blocks/taluks/mandals/tehsil/firkas etc.) are categorized based on the Stage of Extraction (SoE) i.e 'Safe' if SoE &lt; 70 %; 'Semi-critical if SoE&gt; 70 and &lt;= 90 %; 'Critical' if SoE&gt;90 and &lt;=100 % and 'Over-exploited' if SoE&gt; 100 %.
                </p>

                <p className="text-white/90 leading-relaxed text-sm">
                  "INDIA-Groundwater Resource Estimation System (IN-GRES)" is a software/web based application developed by Central Ground Water Board (CGWB) in collaboration with Indian Institute of Technology-Hyderabad (IIT-H) for assessment of ground water resources.
                </p>
              </div>

              {/* Objectives and Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white mb-3">Objectives</h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• To provide common and standardized platform for Ground Water Resource Assessment for the entire country based on Ground Water Resource Estimation Committee-2015 (GEC-2015) methodology.</li>
                  <li>• Pan-India operationalization (Joint assessment by CGWB and State Ground Water/ Nodal Departments).</li>
                  <li>• Visibility dashboards allowing user to view the data/map and download reports.</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">IN-GRES provides the following information/data/map to the users:</h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• Dynamic Ground Water Resources of India, 2020 (India, State/UT, District, Assessment Units-wise) Annual Ground Water Recharge, Annual Extractable Ground Water Resources, Ground Water Extraction, Stage of Extraction and Categorization of the assessment units etc.</li>
                  <li>• Thematic map (GIS) based on the Annual Ground Water Recharge, Annual Ground Water Extraction and categorization of assessment units etc.</li>
                </ul>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Remark</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    In the MIS datasheets, all the parameters (Annual Ground Water Recharge, Annual Extractable Ground Water Resources, and Ground Water Extraction etc.) are given under three components i.e Command (C), Non-Command (NC) and Poor Water Quality (PQ). However the dynamic ground water resources comprises of sum total of fresh water resources under Command(C)and Non-command(NC) components and excludes the resources under poor water quality (saline). So for all practical purposes fresh water resources are taken into consideration including categorization of assessment units.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* GEC Assessment Locations Section */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-4">
              GEC Assessment Locations
            </h2>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md mb-4">
              Interactive map of all Groundwater Resource Estimation Committee assessment units
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 max-w-2xl mx-auto">
              <p className="text-white/80 text-sm md:text-base">
                Explore groundwater data for 28+ locations across India. Use the search and filters below to find specific cities or regions. 
                Click the AI Assistant button in the bottom-right corner if you need help with queries.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search locations or states..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/20 border-white/30 text-white placeholder-white/60 focus:bg-white/30"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: 'All', count: categoryCounts.all },
                { key: 'major', label: 'Major Cities', count: categoryCounts.major },
                { key: 'regional', label: 'Regional', count: categoryCounts.regional },
                { key: 'industrial', label: 'Industrial', count: categoryCounts.industrial },
                { key: 'agricultural', label: 'Agricultural', count: categoryCounts.agricultural },
                { key: 'coastal', label: 'Coastal', count: categoryCounts.coastal }
              ].map((category) => (
                <Button
                  key={category.key}
                  variant={selectedCategory === category.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.key)}
                  className={selectedCategory === category.key 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "bg-white/20 border-white/30 text-white hover:bg-white/30"
                  }
                >
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLocations.map((location, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-6">
                {/* Location Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{location.name}</h3>
                    <p className="text-white/70 text-sm">{location.state}</p>
                    <p className="text-white/50 text-xs">{location.coordinates}</p>
                  </div>
                  <Badge className={`${getStatusColor(location.status)} border`}>
                    <div className="flex items-center gap-1">
                      {getStatusIcon(location.status)}
                      <span className="capitalize">{location.status.replace('-', ' ')}</span>
                    </div>
                  </Badge>
                </div>

                {/* Data Metrics */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm">Annual Recharge:</span>
                    <span className="text-white font-semibold">{location.recharge} MCM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm">Extraction:</span>
                    <span className="text-white font-semibold">{location.extraction} MCM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm">Stage of Extraction:</span>
                    <span className="text-white font-semibold">{location.stage}%</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mt-4 pt-3 border-t border-white/20">
                  <Badge variant="outline" className="bg-white/10 border-white/30 text-white/80 text-xs">
                    {location.category.charAt(0).toUpperCase() + location.category.slice(1)}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Results Summary */}
        <div className="mt-8 text-center">
          <p className="text-white/80 text-lg">
            Showing {filteredLocations.length} of {gecLocations.length} GEC assessment locations
          </p>
        </div>
      </div>

      {/* AI Chatbot - Auto-popup */}
      <ChatBot />
    </div>
  );
};

export default Prototype;
