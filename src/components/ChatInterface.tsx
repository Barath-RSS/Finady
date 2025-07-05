
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Send, 
  Bot, 
  User, 
  Sparkles,
  TrendingUp,
  Calculator,
  PiggyBank,
  Target
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'insight' | 'calculation' | 'recommendation';
}

const suggestedQuestions = [
  {
    text: "How much money will I have at 40?",
    icon: Target,
    category: "Planning"
  },
  {
    text: "How's my net worth growing?",
    icon: TrendingUp,
    category: "Analysis"
  },
  {
    text: "Can I afford a ₹50L home loan?",
    icon: Calculator,
    category: "Planning"
  },
  {
    text: "Which SIPs underperformed the market?",
    icon: PiggyBank,
    category: "Investment"
  }
];

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI financial advisor. I have access to your complete financial profile through Fi's MCP Server. Ask me anything about your finances - from investment performance to future planning!",
      sender: 'ai',
      timestamp: new Date(),
      type: 'insight'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const simulateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('net worth')) {
      return "Based on your current financial data, your net worth has grown by 12.8% this month to ₹11.5L. This growth is primarily driven by your equity investments (+18.3%) and increased savings. Your net worth trajectory suggests you're on track to reach ₹15L by year-end.";
    } else if (lowerMessage.includes('40') && lowerMessage.includes('money')) {
      return "Projecting to age 40 based on your current financial profile: With a 32% savings rate and 18.3% average returns, you're projected to have approximately ₹45-52L by age 40. This assumes continued employment, current investment strategy, and inflation-adjusted calculations.";
    } else if (lowerMessage.includes('home loan') || lowerMessage.includes('50l')) {
      return "Based on your ₹85K monthly income and current debt-to-income ratio of 18%, you can comfortably afford a ₹50L home loan. Your EMI would be around ₹42K (tenure: 20 years), bringing your total debt-to-income to 68% - within acceptable limits for your risk profile.";
    } else if (lowerMessage.includes('sip') && lowerMessage.includes('underperformed')) {
      return "Analyzing your SIP performance: Your Large Cap SIP has underperformed the Nifty 50 by 2.3% this year (12.1% vs 14.4%). However, your Mid Cap and Small Cap SIPs are outperforming their benchmarks by 3.2% and 5.1% respectively. Consider rebalancing or switching the underperforming fund.";
    } else {
      return "I've analyzed your question using your financial data from Fi's MCP Server. Let me provide you with personalized insights based on your specific situation. Could you provide more details about what specific aspect you'd like me to focus on?";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: simulateAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date(),
        type: 'insight'
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
      {/* Suggested Questions */}
      <div className="lg:col-span-1">
        <Card className="card-gradient h-full">
          <CardHeader>
            <CardTitle className="text-white text-sm">Try asking...</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {suggestedQuestions.map((question, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="w-full text-left justify-start h-auto p-3 hover:bg-primary/10 border border-primary/20"
                onClick={() => handleSuggestedQuestion(question.text)}
              >
                <div className="flex items-start gap-2">
                  <question.icon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-primary mb-1">{question.category}</div>
                    <div className="text-xs text-white text-left">{question.text}</div>
                  </div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Chat Interface */}
      <div className="lg:col-span-3">
        <Card className="card-gradient h-full flex flex-col">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              AI Financial Advisor
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col">
            <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user' 
                          ? 'bg-primary text-white' 
                          : 'bg-secondary'
                      }`}>
                        {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      
                      <div className={`rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-secondary border border-primary/20'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                        {message.type && message.sender === 'ai' && (
                          <Badge className="mt-2 bg-primary/20 text-primary text-xs">
                            {message.type}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-secondary border border-primary/20 rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            
            <div className="flex gap-2 mt-4">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me about your finances..."
                className="flex-1 bg-secondary border-primary/20"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
