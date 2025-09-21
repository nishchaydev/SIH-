import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, Mic, Minimize2, Maximize2, X, MapPin, Zap } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  data?: any;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "🌊 Welcome to INGRES AI Assistant! I can provide groundwater data for major Indian cities. Click on a city below or ask me anything about water resources.",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const popularCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 
    'Pune', 'Ahmedabad', 'Jaipur', 'Ranchi', 'Lucknow', 'Bhopal'
  ];

  const mockResponses = [
    { text: "📊 Groundwater assessment for Mumbai:", data: { location: "Mumbai", status: "Over-exploited", recharge: 150, extraction: 185, stage: "123.3%", category: "over" } },
    { text: "📊 Current status for Delhi region:", data: { location: "Delhi", status: "Critical", recharge: 280, extraction: 265, stage: "94.6%", category: "critical" } },
    { text: "📊 Groundwater data for Bangalore:", data: { location: "Bangalore", status: "Semi-Critical", recharge: 320, extraction: 250, stage: "78.1%", category: "semi" } },
    { text: "📊 Hyderabad groundwater assessment:", data: { location: "Hyderabad", status: "Critical", recharge: 180, extraction: 170, stage: "94.4%", category: "critical" } },
    { text: "📊 Chennai water resource status:", data: { location: "Chennai", status: "Over-exploited", recharge: 140, extraction: 175, stage: "125.0%", category: "over" } },
    { text: "📊 Kolkata groundwater analysis:", data: { location: "Kolkata", status: "Safe", recharge: 380, extraction: 245, stage: "64.5%", category: "safe" } },
    { text: "📊 Pune region assessment:", data: { location: "Pune", status: "Semi-Critical", recharge: 210, extraction: 165, stage: "78.6%", category: "semi" } },
    { text: "📊 Ahmedabad water status:", data: { location: "Ahmedabad", status: "Critical", recharge: 160, extraction: 148, stage: "92.5%", category: "critical" } },
    { text: "📊 Jaipur groundwater data:", data: { location: "Jaipur", status: "Semi-Critical", recharge: 195, extraction: 155, stage: "79.5%", category: "semi" } },
    { text: "📊 Ranchi assessment report:", data: { location: "Ranchi", status: "Semi-Critical", recharge: 220, extraction: 180, stage: "81.8%", category: "semi" } },
    { text: "📊 Lucknow water resources:", data: { location: "Lucknow", status: "Critical", recharge: 175, extraction: 162, stage: "92.6%", category: "critical" } },
    { text: "📊 Bhopal groundwater status:", data: { location: "Bhopal", status: "Safe", recharge: 200, extraction: 125, stage: "62.5%", category: "safe" } }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleCityClick = (city: string) => {
    const cityResponse = mockResponses.find(r => r.data.location === city);
    if (cityResponse) {
      const userMessage: Message = {
        id: Date.now(),
        text: `Show me ${city} groundwater data`,
        isUser: true,
        timestamp: new Date(),
      };
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: cityResponse.text,
        isUser: false,
        timestamp: new Date(),
        data: cityResponse.data,
      };
      
      setMessages(prev => [...prev, userMessage, botMessage]);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Find relevant response based on input
    setTimeout(() => {
      let response = mockResponses.find(r => 
        inputValue.toLowerCase().includes(r.data.location.toLowerCase())
      );
      
      if (!response) {
        response = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      }
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: response.text,
        isUser: false,
        timestamp: new Date(),
        data: response.data,
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
      <Card className="mt-3 p-4 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-semibold text-foreground">{data.location}</span>
          <Badge className={`ml-auto ${getStatusColor(data.category)}`}>
            {getStatusIcon(data.category)} {data.status}
          </Badge>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground text-xs">Annual Recharge</span>
            <span className="font-medium text-accent">{data.recharge} MCM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-xs">Extraction</span>
            <span className="font-medium text-primary">{data.extraction} MCM</span>
          </div>
          <div className="col-span-2 flex items-center gap-1 pt-2 border-t border-primary/10">
            <Zap className="w-3 h-3 text-primary" />
            <span className="text-xs text-muted-foreground">Stage of Extraction:</span>
            <span className="font-semibold text-foreground">{data.stage}</span>
          </div>
        </div>
      </Card>
    );
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-16 px-6 bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent text-primary-foreground rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse hover:animate-none"
        >
          <MessageCircle className="w-6 h-6 mr-3" />
          <div className="flex flex-col items-start">
            <span className="text-sm font-semibold">💬 AI Assistant</span>
            <span className="text-xs opacity-90">Ask about water data</span>
          </div>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`${isMinimized ? 'h-16' : 'h-[500px]'} w-96 bg-background/98 backdrop-blur-md border border-primary/30 shadow-2xl transition-all duration-300 rounded-xl overflow-hidden`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-primary">INGRES AI</span>
              <div className="text-xs text-muted-foreground">Water Resource Assistant</div>
            </div>
          </div>
          <div className="flex space-x-1">
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
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0 hover:bg-red-500/10 rounded-full"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Quick City Buttons */}
            <div className="p-3 border-b border-primary/10 bg-muted/30">
              <div className="text-xs text-muted-foreground mb-2">Quick Access:</div>
              <div className="flex flex-wrap gap-1">
                {popularCities.slice(0, 6).map(city => (
                  <Button
                    key={city}
                    onClick={() => handleCityClick(city)}
                    variant="outline"
                    size="sm"
                    className="h-6 px-2 text-xs border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                  >
                    {city}
                  </Button>
                ))}
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 max-h-72 overflow-y-auto">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                    message.isUser 
                      ? 'bg-gradient-to-r from-primary to-accent text-white ml-4' 
                      : 'bg-muted/80 text-foreground mr-4 border border-primary/10'
                  }`}>
                    {message.text}
                    {message.data && <DataCard data={message.data} />}
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

            {/* Input */}
            <div className="p-4 border-t border-primary/20 bg-muted/20">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about any city's groundwater data..."
                  className="flex-1 border-primary/30 focus:border-primary bg-background/80 rounded-full px-4"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 p-0 hover:bg-accent/20 rounded-full"
                >
                  <Mic className="w-4 h-4 text-accent" />
                </Button>
                <Button
                  onClick={handleSend}
                  size="sm"
                  className="h-10 w-10 p-0 bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent rounded-full"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default ChatBot;