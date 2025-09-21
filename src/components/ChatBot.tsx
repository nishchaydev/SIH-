import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, Mic, Minimize2, Maximize2, X } from 'lucide-react';

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
      text: "Hello! I'm your INGRES AI assistant. Ask me about groundwater data, extraction status, or any water resource information.",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const mockResponses = [
    {
      text: "Here's the groundwater data for Ranchi:",
      data: { location: "Ranchi", status: "Semi-Critical", recharge: 220, extraction: 180, stage: "81.8%" }
    },
    {
      text: "Current groundwater status in Hyderabad:",
      data: { location: "Hyderabad", status: "Critical", recharge: 180, extraction: 170, stage: "94.4%" }
    },
    {
      text: "Groundwater assessment for Mumbai region:",
      data: { location: "Mumbai", status: "Over-exploited", recharge: 150, extraction: 185, stage: "123.3%" }
    }
  ];

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

    // Simulate AI response delay
    setTimeout(() => {
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      const botMessage: Message = {
        id: Date.now() + 1,
        text: randomResponse.text,
        isUser: false,
        timestamp: new Date(),
        data: randomResponse.data,
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const DataCard = ({ data }: { data: any }) => (
    <Card className="mt-2 p-3 bg-primary/5 border-primary/20">
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div><strong>Location:</strong> {data.location}</div>
        <div><strong>Status:</strong> <span className={`font-semibold ${
          data.status === 'Safe' ? 'text-green-600' :
          data.status === 'Semi-Critical' ? 'text-yellow-600' :
          data.status === 'Critical' ? 'text-orange-600' : 'text-red-600'
        }`}>{data.status}</span></div>
        <div><strong>Recharge:</strong> {data.recharge} MCM</div>
        <div><strong>Extraction:</strong> {data.extraction} MCM</div>
        <div className="col-span-2"><strong>Stage of Extraction:</strong> {data.stage}</div>
      </div>
    </Card>
  );

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 px-6 bg-primary hover:bg-primary-hover text-primary-foreground rounded-full shadow-lg animate-pulse"
        >
          <MessageCircle className="w-6 h-6 mr-2" />
          💬 Talk to our AI BOT
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`${isMinimized ? 'h-16' : 'h-96'} w-80 bg-background/95 backdrop-blur-sm border-primary/20 shadow-xl transition-all duration-300`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-primary/20 bg-primary/5">
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">INGRES AI Assistant</span>
          </div>
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-6 w-6 p-0 hover:bg-primary/10"
            >
              {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 hover:bg-destructive/10"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 max-h-64 overflow-y-auto">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-2 rounded-lg text-sm ${
                    message.isUser 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-foreground'
                  }`}>
                    {message.text}
                    {message.data && <DataCard data={message.data} />}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground p-2 rounded-lg text-sm">
                    <div className="flex space-x-1">
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
            <div className="p-4 border-t border-primary/20">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about groundwater data..."
                  className="flex-1 border-primary/20 focus:border-primary"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 p-0 hover:bg-accent/10"
                >
                  <Mic className="w-4 h-4 text-accent" />
                </Button>
                <Button
                  onClick={handleSend}
                  size="sm"
                  className="h-10 w-10 p-0 bg-primary hover:bg-primary-hover"
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