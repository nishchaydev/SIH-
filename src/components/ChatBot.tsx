import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, Mic, Minimize2, Maximize2, X, MapPin, Zap, BarChart3, TrendingUp, Globe, Languages, Maximize, Minimize } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import AdvancedCharts from './AdvancedCharts';
import { groundwaterData, getDataById, GroundwaterData } from '@/data/groundwaterData';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  data?: any;
  chartData?: any;
  chartType?: 'bar' | 'pie' | 'line' | 'hydrogeological' | 'trend' | 'comparison' | 'distribution' | 'cross-section';
}

interface Language {
  code: string;
  name: string;
  flag: string;
}

const ChatBot = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [queryHistory, setQueryHistory] = useState<string[]>([]);
  const [favoriteQueries, setFavoriteQueries] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Remove auto-popup - let users choose when to open chatbot

  const languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' }
  ];

  // Multilingual responses
  const getLocalizedText = (key: string) => {
    const translations: { [lang: string]: { [key: string]: string } } = {
      en: {
        welcome: "Welcome to INGRES AI Assistant! I can provide groundwater data for major Indian cities. Click on a city below or ask me anything about water resources.",
        cityNotFound: "Sorry, the city you requested is not available in our current demo data. We are continuously updating our database and will add more cities soon. Please try with one of the available cities: Mumbai, Pune, Nagpur, Nashik, Bangalore, Chennai, Hyderabad, Delhi, Kolkata, Ahmedabad, Jaipur, or Lucknow.",
        mumbaiData: "Groundwater assessment for Mumbai:",
        delhiData: "Current status for Delhi region:",
        bangaloreData: "Groundwater data for Bangalore:",
        hyderabadData: "Hyderabad groundwater assessment:",
        chennaiData: "Chennai water resource status:",
        kolkataData: "Kolkata groundwater analysis:",
        indoreData: "Indore groundwater assessment:"
      },
      hi: {
        welcome: "INGRES AI सहायक में आपका स्वागत है! मैं प्रमुख भारतीय शहरों के भूजल डेटा प्रदान कर सकता हूं। नीचे किसी शहर पर क्लिक करें या जल संसाधनों के बारे में कुछ भी पूछें।",
        cityNotFound: "क्षमा करें, आपके द्वारा अनुरोधित शहर हमारे वर्तमान डेमो डेटा में उपलब्ध नहीं है। हम लगातार अपने डेटाबेस को अपडेट कर रहे हैं और जल्द ही और शहर जोड़ेंगे। कृपया उपलब्ध शहरों में से कोई एक आज़माएं: मुंबई, दिल्ली, बैंगलोर, हैदराबाद, चेन्नई, कोलकाता, पुणे, अहमदाबाद, जयपुर, रांची, लखनऊ, भोपाल, या इंदौर।",
        mumbaiData: "मुंबई के लिए भूजल आकलन:",
        delhiData: "दिल्ली क्षेत्र की वर्तमान स्थिति:",
        bangaloreData: "बैंगलोर के लिए भूजल डेटा:",
        hyderabadData: "हैदराबाद भूजल आकलन:",
        chennaiData: "चेन्नई जल संसाधन स्थिति:",
        kolkataData: "कोलकाता भूजल विश्लेषण:",
        indoreData: "इंदौर भूजल आकलन:"
      },
      te: {
        welcome: "🌊 INGRES AI సహాయకుడికి స్వాగతం! నేను ప్రధాన భారతీయ నగరాల భూగర్భజల డేటాను అందించగలను. క్రింద ఏదైనా నగరాన్ని క్లిక్ చేయండి లేదా నీటి వనరుల గురించి ఏదైనా అడగండి.",
        cityNotFound: "🚫 క్షమించండి, మీరు అభ్యర్థించిన నగరం మా ప్రస్తుత డెమో డేటాలో అందుబాటులో లేదు. మేము మా డేటాబేస్ను నిరంతరం నవీకరిస్తున్నాము మరియు త్వరలో మరిన్ని నగరాలను జోడిస్తాము. దయచేసి అందుబాటులో ఉన్న నగరాలలో ఏదైనా ఒకదానిని ప్రయత్నించండి: ముంబై, ఢిల్లీ, బెంగళూరు, హైదరాబాద్, చెన్నై, కోలకత్తా, పూణే, అహమదాబాద్, జైపూర్, రాంచీ, లక్నో, భోపాల్, లేదా ఇండోర్.",
        mumbaiData: "📊 ముంబైకు భూగర్భజల అంచనా:",
        delhiData: "📊 ఢిల్లీ ప్రాంతం యొక్క ప్రస్తుత స్థితి:",
        bangaloreData: "📊 బెంగళూరుకు భూగర్భజల డేటా:",
        hyderabadData: "📊 హైదరాబాద్ భూగర్భజల అంచనా:",
        chennaiData: "📊 చెన్నై నీటి వనరు స్థితి:",
        kolkataData: "📊 కోలకత్తా భూగర్భజల విశ్లేషణ:",
        indoreData: "📊 ఇండోర్ భూగర్భజల అంచనా:"
      }
    };
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  const popularCities = groundwaterData
    .filter(item => item.type === 'city')
    .slice(0, 12)
    .map(item => item.name);

  const querySuggestions = [
    "Show me groundwater status for Mumbai",
    "Compare recharge vs extraction trends",
    "What is the stage of extraction for Delhi?",
    "Show historical data for Bangalore",
    "Which areas are over-exploited?",
    "Generate a report for Hyderabad",
    "Show me critical zones in Maharashtra",
    "What are the safe zones in Karnataka?",
    "Compare 2017 vs 2020 data",
    "Show me recharge patterns",
    "Show hydrogeological cross-section",
    "Compare state-wise groundwater status",
    "Show assessment unit distribution",
    "Analyze multi-year trends",
    "Generate scientific diagrams"
  ];

  const getMockResponses = () => [
    { 
      text: getLocalizedText('mumbaiData'), 
      data: { 
        location: "Mumbai", 
        status: "Over-exploited", 
        recharge: 150, 
        extraction: 185, 
        stage: "123.3%", 
        category: "over",
        historical: [
          { year: 2017, recharge: 165, extraction: 170, stage: "103.0%" },
          { year: 2018, recharge: 158, extraction: 175, stage: "110.8%" },
          { year: 2019, recharge: 152, extraction: 180, stage: "118.4%" },
          { year: 2020, recharge: 150, extraction: 185, stage: "123.3%" }
        ]
      },
      chartData: [
        { name: '2017', recharge: 165, extraction: 170 },
        { name: '2018', recharge: 158, extraction: 175 },
        { name: '2019', recharge: 152, extraction: 180 },
        { name: '2020', recharge: 150, extraction: 185 }
      ],
      chartType: 'line' as const
    },
    { 
      text: getLocalizedText('delhiData'), 
      data: { 
        location: "Delhi", 
        status: "Critical", 
        recharge: 280, 
        extraction: 265, 
        stage: "94.6%", 
        category: "critical",
        historical: [
          { year: 2017, recharge: 295, extraction: 250, stage: "84.7%" },
          { year: 2018, recharge: 290, extraction: 255, stage: "87.9%" },
          { year: 2019, recharge: 285, extraction: 260, stage: "91.2%" },
          { year: 2020, recharge: 280, extraction: 265, stage: "94.6%" }
        ]
      },
      chartData: [
        { name: 'Safe', value: 15, color: '#22c55e' },
        { name: 'Semi-Critical', value: 25, color: '#eab308' },
        { name: 'Critical', value: 35, color: '#f97316' },
        { name: 'Over-exploited', value: 25, color: '#ef4444' }
      ],
      chartType: 'pie' as const
    },
    { 
      text: getLocalizedText('bangaloreData'), 
      data: { 
        location: "Bangalore", 
        status: "Semi-Critical", 
        recharge: 320, 
        extraction: 250, 
        stage: "78.1%", 
        category: "semi",
        historical: [
          { year: 2017, recharge: 340, extraction: 220, stage: "64.7%" },
          { year: 2018, recharge: 335, extraction: 230, stage: "68.7%" },
          { year: 2019, recharge: 325, extraction: 240, stage: "73.8%" },
          { year: 2020, recharge: 320, extraction: 250, stage: "78.1%" }
        ]
      },
      chartData: [
        { name: 'Recharge', value: 320, color: '#3b82f6' },
        { name: 'Extraction', value: 250, color: '#ef4444' }
      ],
      chartType: 'bar' as const
    },
    { 
      text: getLocalizedText('hyderabadData'), 
      data: { 
        location: "Hyderabad", 
        status: "Critical", 
        recharge: 180, 
        extraction: 170, 
        stage: "94.4%", 
        category: "critical",
        historical: [
          { year: 2017, recharge: 195, extraction: 155, stage: "79.5%" },
          { year: 2018, recharge: 190, extraction: 160, stage: "84.2%" },
          { year: 2019, recharge: 185, extraction: 165, stage: "89.2%" },
          { year: 2020, recharge: 180, extraction: 170, stage: "94.4%" }
        ]
      },
      chartData: [
        { name: '2017', recharge: 195, extraction: 155 },
        { name: '2018', recharge: 190, extraction: 160 },
        { name: '2019', recharge: 185, extraction: 165 },
        { name: '2020', recharge: 180, extraction: 170 }
      ],
      chartType: 'line' as const
    },
    { 
      text: getLocalizedText('chennaiData'), 
      data: { 
        location: "Chennai", 
        status: "Over-exploited", 
        recharge: 140, 
        extraction: 175, 
        stage: "125.0%", 
        category: "over",
        historical: [
          { year: 2017, recharge: 160, extraction: 150, stage: "93.8%" },
          { year: 2018, recharge: 155, extraction: 160, stage: "103.2%" },
          { year: 2019, recharge: 150, extraction: 170, stage: "113.3%" },
          { year: 2020, recharge: 140, extraction: 175, stage: "125.0%" }
        ]
      },
      chartData: [
        { name: 'Safe', value: 10, color: '#22c55e' },
        { name: 'Semi-Critical', value: 20, color: '#eab308' },
        { name: 'Critical', value: 30, color: '#f97316' },
        { name: 'Over-exploited', value: 40, color: '#ef4444' }
      ],
      chartType: 'pie' as const
    },
    { 
      text: getLocalizedText('kolkataData'), 
      data: { 
        location: "Kolkata", 
        status: "Safe", 
        recharge: 380, 
        extraction: 245, 
        stage: "64.5%", 
        category: "safe",
        historical: [
          { year: 2017, recharge: 390, extraction: 230, stage: "59.0%" },
          { year: 2018, recharge: 385, extraction: 235, stage: "61.0%" },
          { year: 2019, recharge: 382, extraction: 240, stage: "62.8%" },
          { year: 2020, recharge: 380, extraction: 245, stage: "64.5%" }
        ]
      },
      chartData: [
        { name: 'Recharge', value: 380, color: '#3b82f6' },
        { name: 'Extraction', value: 245, color: '#ef4444' }
      ],
      chartType: 'bar' as const
    },
    { 
      text: getLocalizedText('indoreData'), 
      data: { 
        location: "Indore", 
        status: "Semi-Critical", 
        recharge: 185, 
        extraction: 155, 
        stage: "83.8%", 
        category: "semi",
        historical: [
          { year: 2017, recharge: 195, extraction: 140, stage: "71.8%" },
          { year: 2018, recharge: 190, extraction: 145, stage: "76.3%" },
          { year: 2019, recharge: 188, extraction: 150, stage: "79.8%" },
          { year: 2020, recharge: 185, extraction: 155, stage: "83.8%" }
        ]
      },
      chartData: [
        { name: '2017', recharge: 195, extraction: 140 },
        { name: '2018', recharge: 190, extraction: 145 },
        { name: '2019', recharge: 188, extraction: 150 },
        { name: '2020', recharge: 185, extraction: 155 }
      ],
      chartType: 'line' as const
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Remove auto-welcome message - let users start fresh conversations

  const handleCityClick = (city: string) => {
    // Find the city in our data structure by name (not ID)
    const cityData = groundwaterData.find(item => 
      item.name.toLowerCase() === city.toLowerCase() && item.type === 'city'
    );
    
    if (cityData) {
      const userMessage: Message = {
        id: Date.now(),
        text: `Show me ${cityData.name} groundwater data`,
        isUser: true,
        timestamp: new Date(),
      };
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: `📊 Groundwater assessment for ${cityData.name}:`,
        isUser: false,
        timestamp: new Date(),
        data: {
          location: cityData.name,
          status: cityData.status.replace('-', ' ').toUpperCase(),
          recharge: cityData.recharge,
          extraction: cityData.extraction,
          stage: `${cityData.stage}%`,
          category: cityData.category,
          historical: cityData.historical
        },
        chartData: cityData.historical.map(h => ({
          name: h.year.toString(),
          recharge: h.recharge,
          extraction: h.extraction
        })),
        chartType: cityData.chartType,
      };
      
      setMessages(prev => [...prev, userMessage, botMessage]);
    } else {
      // If city not found, show a helpful message
      const userMessage: Message = {
        id: Date.now(),
        text: `Show me ${city} groundwater data`,
        isUser: true,
        timestamp: new Date(),
      };
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: `Sorry, I don't have specific data for ${city}. Here are some available cities: Mumbai, Pune, Nagpur, Nashik, Bangalore, Chennai, Hyderabad, Delhi, Kolkata, Ahmedabad. Try asking about one of these cities!`,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, userMessage, botMessage]);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    // Add to query history
    setQueryHistory(prev => [...prev.slice(-9), inputValue]);

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setShowSuggestions(false);
    setIsTyping(true);

    // Enhanced query handling with better city matching
    setTimeout(() => {
      const query = inputValue.toLowerCase();
      let response = null;
      
      // Enhanced city matching with multiple language support
      const cityAliases: { [key: string]: string } = {
        'mumbai': 'mumbai', 'bombay': 'mumbai', 'मुंबई': 'mumbai',
        'delhi': 'delhi', 'new delhi': 'delhi', 'दिल्ली': 'delhi', 'नई दिल्ली': 'delhi',
        'bangalore': 'bangalore', 'bengaluru': 'bangalore', 'बैंगलोर': 'bangalore', 'बेंगलुरु': 'bangalore',
        'hyderabad': 'hyderabad', 'हैदराबाद': 'hyderabad',
        'chennai': 'chennai', 'madras': 'chennai', 'चेन्नई': 'chennai', 'मद्रास': 'chennai',
        'kolkata': 'kolkata', 'calcutta': 'kolkata', 'कोलकाता': 'kolkata', 'कलकत्ता': 'kolkata',
        'pune': 'pune', 'पुणे': 'pune',
        'ahmedabad': 'ahmedabad', 'अहमदाबाद': 'ahmedabad',
        'jaipur': 'jaipur', 'जयपुर': 'jaipur',
        'nagpur': 'nagpur', 'नागपुर': 'nagpur',
        'nashik': 'nashik', 'नासिक': 'nashik'
      };

      // Find matching city or state in our data
      let cityFound = false;
      let foundData = groundwaterData.find(item => 
        item.name.toLowerCase().includes(query) || 
        query.includes(item.name.toLowerCase())
      );
      
      // If not found, try with city aliases
      if (!foundData) {
        const normalizedQuery = cityAliases[query] || query;
        foundData = groundwaterData.find(item => 
          item.name.toLowerCase() === normalizedQuery.toLowerCase()
        );
      }
      
      if (foundData) {
        response = {
          text: `📊 Groundwater assessment for ${foundData.name}:`,
          data: {
            location: foundData.name,
            status: foundData.status.replace('-', ' ').toUpperCase(),
            recharge: foundData.recharge,
            extraction: foundData.extraction,
            stage: `${foundData.stage}%`,
            category: foundData.category,
            historical: foundData.historical
          },
          chartData: foundData.historical.map(h => ({
            name: h.year.toString(),
            recharge: h.recharge,
            extraction: h.extraction
          })),
          chartType: foundData.chartType
        };
        cityFound = true;
      }
      
      // Handle complex queries
      if (!response) {
        if (query.includes('hydrogeological') || query.includes('cross-section') || query.includes('geological') || query.includes('जलविज्ञान')) {
          response = {
            text: "🔬 Hydrogeological Analysis: Here's a detailed cross-section showing water levels at different depths and aquifer characteristics.",
            data: { location: "Analysis", status: "Scientific", category: "analysis" },
            chartData: null,
            chartType: 'hydrogeological' as const
          };
        } else if (query.includes('trend') || query.includes('historical') || query.includes('ट्रेंड') || query.includes('ऐतिहासिक')) {
          response = {
            text: "📈 Multi-Year Trend Analysis: This shows the correlation between recharge, extraction, and rainfall over time.",
            data: { location: "Trend Analysis", status: "Historical", category: "trend" },
            chartData: null,
            chartType: 'trend' as const
          };
        } else if (query.includes('compare') || query.includes('state') || query.includes('तुलना') || query.includes('राज्य')) {
          response = {
            text: "📊 State-wise Comparison: Here's how different states compare in terms of groundwater status distribution.",
            data: { location: "State Comparison", status: "Comparative", category: "comparison" },
            chartData: null,
            chartType: 'comparison' as const
          };
        } else if (query.includes('distribution') || query.includes('overall') || query.includes('summary') || query.includes('वितरण') || query.includes('कुल') || query.includes('सारांश')) {
          response = {
            text: "🥧 Assessment Unit Distribution: This pie chart shows the overall distribution of groundwater status categories across all assessment units.",
            data: { location: "Distribution", status: "Overall", category: "distribution" },
            chartData: null,
            chartType: 'distribution' as const
          };
        } else if (query.includes('recharge') || query.includes('extraction') || query.includes('रिचार्ज') || query.includes('निकासी')) {
          response = mockResponses[2]; // Bangalore with bar chart
        } else {
          // Check if it's a city query but city not found
          const cityKeywords = ['city', 'शहर', 'groundwater', 'जल', 'water', 'पानी', 'data', 'डेटा'];
          const isCityQuery = cityKeywords.some(keyword => query.includes(keyword));
          
          if (isCityQuery) {
            response = {
              text: getLocalizedText('cityNotFound'),
              data: null,
              chartData: null,
              chartType: null
            };
          } else {
            // Fallback to a random response if no specific query is matched
            const randomData = groundwaterData[Math.floor(Math.random() * groundwaterData.length)];
            response = {
              text: `📊 Here's some general groundwater information for ${randomData.name}:`,
              data: {
                location: randomData.name,
                status: randomData.status.replace('-', ' ').toUpperCase(),
                recharge: randomData.recharge,
                extraction: randomData.extraction,
                stage: `${randomData.stage}%`,
                category: randomData.category,
                historical: randomData.historical
              },
              chartData: randomData.historical.map(h => ({
                name: h.year.toString(),
                recharge: h.recharge,
                extraction: h.extraction
              })),
              chartType: randomData.chartType
            };
          }
        }
      }
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: response.text,
        isUser: false,
        timestamp: new Date(),
        data: response.data,
        chartData: response.chartData,
        chartType: response.chartType,
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const ChartComponent = ({ chartData, chartType, isFullScreen = false }: { chartData: any[], chartType: string, isFullScreen?: boolean }) => {
    if (!chartData || chartData.length === 0) return null;

    const renderChart = () => {
      switch (chartType) {
        case 'line':
          return (
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="recharge" stroke="#3b82f6" strokeWidth={2} name="Recharge (MCM)" />
                <Line type="monotone" dataKey="extraction" stroke="#ef4444" strokeWidth={2} name="Extraction (MCM)" />
              </LineChart>
            </ResponsiveContainer>
          );
        case 'bar':
          return (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          );
        case 'pie':
          return (
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          );
        default:
          return null;
      }
    };

    return (
      <div className="mt-3 p-2 md:p-3 bg-muted/30 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 className="w-3 h-3 md:w-4 md:h-4 text-primary" />
          <span className="text-xs md:text-sm font-medium text-foreground">
            {chartType === 'line' ? 'Historical Trends' : 
             chartType === 'bar' ? 'Resource Comparison' : 
             'Status Distribution'}
          </span>
        </div>
        <div className={`${isFullScreen ? 'h-64 md:h-80' : 'h-32 md:h-48'}`}>
          {renderChart()}
        </div>
      </div>
    );
  };

  const DataCard = ({ data }: { data: any }) => {
    const getStatusColor = (category: string) => {
      switch (category) {
        case 'safe': return 'bg-green-50 border-green-200 text-green-800';
        case 'semi': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
        case 'critical': return 'bg-orange-50 border-orange-200 text-orange-800';
        case 'over': return 'bg-red-50 border-red-200 text-red-800';
        default: return 'bg-gray-50 border-gray-200 text-gray-800';
      }
    };

    const getStatusIcon = (category: string) => {
      switch (category) {
        case 'safe': return '✅';
        case 'semi': return '⚠️';
        case 'critical': return '🔶';
        case 'over': return '🚨';
        default: return '📊';
      }
    };

    return (
      <Card className="mt-2 md:mt-3 p-2 md:p-4 bg-gradient-to-r from-blue-50/80 to-cyan-50/80 border border-cyan-200/50 shadow-sm">
        <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
          <MapPin className="w-3 h-3 md:w-4 md:h-4 text-cyan-600" />
          <span className="font-semibold text-blue-900 text-xs md:text-base">{data.location}</span>
          <Badge className={`ml-auto text-xs ${getStatusColor(data.category)}`}>
            {getStatusIcon(data.category)} {data.status}
          </Badge>
        </div>
        <div className="grid grid-cols-2 gap-1 md:gap-3 text-xs">
          <div className="flex flex-col">
            <span className="text-blue-600 text-xs">Annual Recharge</span>
            <span className="font-medium text-cyan-600 text-xs md:text-sm">{data.recharge} MCM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-blue-600 text-xs">Extraction</span>
            <span className="font-medium text-blue-700 text-xs md:text-sm">{data.extraction} MCM</span>
          </div>
          <div className="col-span-2 flex items-center gap-1 pt-1 md:pt-2 border-t border-cyan-200/50">
            <Zap className="w-3 h-3 text-cyan-600" />
            <span className="text-xs text-blue-600">Stage of Extraction:</span>
            <span className="font-semibold text-blue-900 text-xs">{data.stage}</span>
          </div>
        </div>
        {data.historical && (
          <div className="mt-3 pt-3 border-t border-cyan-200/50">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-cyan-600" />
              <span className="text-xs font-medium text-blue-900">Historical Data (2017-2020)</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {data.historical.map((year: any, index: number) => (
                <div key={index} className="flex justify-between">
                  <span className="text-blue-600">{year.year}:</span>
                  <span className="font-medium text-blue-900">{year.stage}</span>
          </div>
              ))}
          </div>
        </div>
        )}
      </Card>
    );
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-24 md:bottom-24 right-3 md:right-6 z-50">
        <Button
          onClick={() => {
            setIsOpen(true);
            setIsFullScreen(false);
          }}
          className="h-12 md:h-16 px-3 md:px-6 bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent text-primary-foreground rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse hover:animate-none"
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
          <div className="flex flex-col items-start">
            <span className="text-xs md:text-sm font-semibold">AI Assistant</span>
            <span className="text-xs opacity-90 hidden sm:block">Ask about water data</span>
          </div>
        </Button>
      </div>
    );
  }

  return (
    <>
      {isFullScreen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsFullScreen(false)}
        />
      )}
      <div className={`fixed z-50 ${isFullScreen ? 'inset-0' : 'bottom-24 md:bottom-24 right-3 md:right-6'}`}>
        <Card className={`${isMinimized ? 'h-16' : isFullScreen ? 'h-full' : 'h-[400px] md:h-[500px]'} ${isFullScreen ? 'w-full' : 'w-[calc(100vw-1rem)] md:w-96 max-w-sm md:max-w-none'} bg-gradient-to-br from-blue-50/95 via-cyan-50/95 to-teal-50/95 backdrop-blur-md border border-cyan-300/50 shadow-2xl transition-all duration-300 rounded-xl overflow-hidden`}>
        {/* Header */}
        <div className="flex items-center justify-between p-3 md:p-4 border-b border-cyan-200/30 bg-gradient-to-r from-blue-100/50 via-cyan-100/50 to-teal-100/50">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-blue-700 text-sm md:text-base">INGRES AI</span>
              <div className="text-xs text-cyan-600 hidden sm:block">Water Resource Assistant</div>
            </div>
          </div>
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="h-8 w-8 p-0 hover:bg-primary/10 rounded-full"
            >
              {isFullScreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-8 w-8 p-0 hover:bg-primary/10 rounded-full"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsOpen(false);
                setIsFullScreen(false);
              }}
              className="h-8 w-8 p-0 hover:bg-red-500/10 rounded-full"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Quick City Buttons */}
            <div className="p-2 md:p-3 border-b border-cyan-200/30 bg-gradient-to-r from-blue-50/50 to-cyan-50/50">
              <div className="text-xs text-blue-800 mb-2 flex items-center gap-1">
                <Globe className="w-3 h-3" />
                Quick Access:
              </div>
              <div className="flex flex-wrap gap-1">
                {popularCities.slice(0, 4).map(city => (
                  <Button
                    key={city}
                    onClick={() => handleCityClick(city)}
                    variant="outline"
                    size="sm"
                    className="h-6 px-2 text-xs border-cyan-300/50 hover:bg-cyan-100/50 hover:border-cyan-400/70 bg-white/70"
                  >
                    {city}
                  </Button>
                ))}
                <Button
                  onClick={() => handleCityClick('More')}
                  variant="outline"
                  size="sm"
                  className="h-6 px-2 text-xs border-cyan-300/50 hover:bg-cyan-100/50 hover:border-cyan-400/70 bg-white/70"
                >
                  +More
                </Button>
              </div>
            </div>

            {/* Language Selector */}
            <div className="p-2 md:p-3 border-b border-cyan-200/30 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
              <div className="flex items-center gap-2 mb-2">
                <Languages className="w-4 h-4 text-cyan-600" />
                <span className="text-xs text-blue-800">Language:</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {languages.slice(0, 3).map((lang) => (
                  <Button
                    key={lang.code}
                    onClick={() => setCurrentLanguage(lang.code)}
                    variant={currentLanguage === lang.code ? "default" : "outline"}
                    size="sm"
                    className={`h-6 px-2 text-xs ${
                      currentLanguage === lang.code 
                        ? 'bg-cyan-500 hover:bg-cyan-600 text-white' 
                        : 'border-cyan-300/50 hover:bg-cyan-100/50 hover:border-cyan-400/70 bg-white/70'
                    }`}
                  >
                    {lang.flag} {lang.name}
                  </Button>
                ))}
                <Button
                  onClick={() => setCurrentLanguage('more')}
                  variant="outline"
                  size="sm"
                  className="h-6 px-2 text-xs border-cyan-300/50 hover:bg-cyan-100/50 hover:border-cyan-400/70 bg-white/70"
                >
                  +More
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className={`flex-1 p-2 md:p-4 space-y-2 md:space-y-4 overflow-y-auto ${isFullScreen ? 'max-h-[calc(100vh-200px)]' : 'max-h-60 md:max-h-72'}`}>
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[95%] md:max-w-[85%] p-2 md:p-3 rounded-2xl text-xs md:text-sm shadow-sm ${
                    message.isUser 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white ml-1 md:ml-4' 
                      : 'bg-gradient-to-r from-blue-50/90 to-cyan-50/90 text-blue-900 mr-1 md:mr-4 border border-cyan-200/50'
                  }`}>
                    {message.text}
                    {message.data && <DataCard data={message.data} />}
                    {message.chartData && message.chartType && (
                      <ChartComponent chartData={message.chartData} chartType={message.chartType} isFullScreen={isFullScreen} />
                    )}
                    {message.chartType && ['hydrogeological', 'trend', 'comparison', 'distribution', 'cross-section'].includes(message.chartType) && (
                      <AdvancedCharts 
                        data={message.data} 
                        chartType={message.chartType as any} 
                        isFullScreen={isFullScreen} 
                      />
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted/80 text-foreground p-3 rounded-2xl text-sm mr-4 border border-primary/10">
                    <div className="flex space-x-1 items-center">
                      <div className="text-xs text-muted-foreground mr-2">AI is typing</div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Query Suggestions */}
            {showSuggestions && (
              <div className="p-2 md:p-3 border-t border-cyan-200/30 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 max-h-32 overflow-y-auto">
                <div className="text-xs text-blue-800 mb-2 flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Suggested Queries:
                </div>
                <div className="space-y-1">
                  {querySuggestions.slice(0, 5).map((suggestion, index) => (
                    <Button
                      key={index}
                      onClick={() => {
                        setInputValue(suggestion);
                        setShowSuggestions(false);
                      }}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start h-8 text-xs text-blue-700 hover:bg-cyan-100/50 text-left"
                    >
                      💡 {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Query History */}
            {queryHistory.length > 0 && !showSuggestions && (
              <div className="p-2 md:p-3 border-t border-cyan-200/30 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 max-h-24 overflow-y-auto">
                <div className="text-xs text-blue-800 mb-2 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Recent Queries:
                </div>
                <div className="flex flex-wrap gap-1">
                  {queryHistory.slice(-3).map((query, index) => (
                    <Button
                      key={index}
                      onClick={() => setInputValue(query)}
                      variant="outline"
                      size="sm"
                      className="h-6 px-2 text-xs border-cyan-300/50 hover:bg-cyan-100/50"
                    >
                      {query.length > 20 ? query.substring(0, 20) + '...' : query}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-2 md:p-4 border-t border-cyan-200/30 bg-gradient-to-r from-blue-50/50 to-cyan-50/50">
              <div className="flex space-x-1 md:space-x-2">
                <div className="flex-1 relative">
                <Input
                  value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      setShowSuggestions(e.target.value.length > 0);
                    }}
                  onKeyPress={handleKeyPress}
                    onFocus={() => setShowSuggestions(true)}
                    placeholder="Ask about groundwater data... (e.g., 'Show me Mumbai data')"
                    className="w-full border-cyan-300/50 focus:border-cyan-400 bg-white/80 rounded-full px-3 md:px-4 text-xs md:text-sm text-blue-900 placeholder-blue-500"
                  />
                  {inputValue.length > 0 && (
                    <Button
                      onClick={() => setInputValue('')}
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1 h-6 w-6 p-0 hover:bg-cyan-100/50 rounded-full"
                    >
                      <X className="w-3 h-3 text-cyan-600" />
                    </Button>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 md:h-10 w-8 md:w-10 p-0 hover:bg-cyan-100/50 rounded-full"
                >
                  <Mic className="w-3 h-3 md:w-4 md:h-4 text-cyan-600" />
                </Button>
                <Button
                  onClick={handleSend}
                  size="sm"
                  className="h-8 md:h-10 w-8 md:w-10 p-0 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full"
                >
                  <Send className="w-3 h-3 md:w-4 md:h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
    </>
  );
};

export default ChatBot;