
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
  Target,
  Brain,
  Zap,
  AlertCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
      text: "Hello! I'm your Google Gemini-powered AI financial advisor. I have access to your complete financial profile through Fi's MCP Server. Ask me anything about your finances - from investment performance to future planning!",
      sender: 'ai',
      timestamp: new Date(),
      type: 'insight'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [geminiKey, setGeminiKey] = useState('');
  const [showKeyInput, setShowKeyInput] = useState(!localStorage.getItem('gemini_api_key'));
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const callGeminiAPI = async (message: string): Promise<string> => {
    const apiKey = geminiKey || localStorage.getItem('gemini_api_key');
    
    if (!apiKey) {
      throw new Error('Gemini API key not provided');
    }

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a professional financial advisor with access to the user's complete financial data through Fi Money's MCP Server. The user has the following financial profile:
              
              Net Worth: ₹11.5L (growing at 12.8% monthly)
              Monthly Income: ₹85K
              Savings Rate: 32%
              Investment Returns: 18.3% average
              Debt-to-Income Ratio: 18%
              Age: Early 30s
              
              Current Holdings:
              - Equity Funds: ₹4.2L (52% of portfolio, +18.3% growth)
              - Debt Funds: ₹2.1L (26% of portfolio, +3.2% growth)
              - Direct Stocks: ₹1.3L (16% of portfolio, -2.1% growth)
              - Gold/Others: ₹0.5L (6% of portfolio, +1.8% growth)
              
              Recent Performance:
              - Large Cap SIP underperforming Nifty 50 by 2.3%
              - Mid Cap and Small Cap SIPs outperforming by 3.2% and 5.1%
              
              User Question: "${message}"
              
              Provide a detailed, personalized response based on this financial data. Include specific numbers, actionable advice, and mention relevant financial concepts. Keep the tone professional but friendly.`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status}`);
      }

      const data = await response.json();
      return data.candidates[0]?.content?.parts[0]?.text || "I apologize, but I couldn't generate a response at the moment.";
    } catch (error) {
      console.error('Gemini API Error:', error);
      throw error;
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

    try {
      const aiResponse = await callGeminiAPI(inputValue);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date(),
        type: 'insight'
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble connecting to Google Gemini right now. Please check your API key and try again.",
        sender: 'ai',
        timestamp: new Date(),
        type: 'insight'
      };
      
      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Connection Error",
        description: "Failed to connect to Google Gemini API. Please check your API key.",
        variant: "destructive"
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleSaveApiKey = () => {
    if (geminiKey.trim()) {
      localStorage.setItem('gemini_api_key', geminiKey);
      setShowKeyInput(false);
      toast({
        title: "API Key Saved",
        description: "Google Gemini API key has been saved securely in your browser.",
      });
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  if (showKeyInput) {
    return (
      <Card className="glass-card max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-800">
            <Brain className="w-5 h-5 text-blue-600" />
            Connect Google Gemini
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">API Key Required</p>
              <p>Get your free Gemini API key from Google AI Studio to enable AI-powered financial insights.</p>
            </div>
          </div>
          <Input
            type="password"
            placeholder="Enter your Gemini API key"
            value={geminiKey}
            onChange={(e) => setGeminiKey(e.target.value)}
            className="bg-white/60 border-gray-200"
          />
          <Button 
            onClick={handleSaveApiKey}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            disabled={!geminiKey.trim()}
          >
            <Zap className="w-4 h-4 mr-2" />
            Connect Gemini AI
          </Button>
          <p className="text-xs text-gray-500 text-center">
            Your API key is stored locally and never shared
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
      {/* Suggested Questions */}
      <div className="lg:col-span-1">
        <Card className="glass-card h-full">
          <CardHeader>
            <CardTitle className="text-gray-800 text-sm">Try asking...</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {suggestedQuestions.map((question, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="w-full text-left justify-start h-auto p-3 hover:bg-blue-50 border border-blue-100"
                onClick={() => handleSuggestedQuestion(question.text)}
              >
                <div className="flex items-start gap-2">
                  <question.icon className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-blue-600 mb-1">{question.category}</div>
                    <div className="text-xs text-gray-700 text-left">{question.text}</div>
                  </div>
                </div>
              </Button>
            ))}
            
            <div className="pt-4 border-t border-gray-200">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => setShowKeyInput(true)}
              >
                <Brain className="w-4 h-4 mr-2" />
                Change API Key
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chat Interface */}
      <div className="lg:col-span-3">
        <Card className="glass-card h-full flex flex-col">
          <CardHeader>
            <CardTitle className="text-gray-800 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              Google Gemini AI Financial Advisor
              <Badge className="bg-green-100 text-green-700 text-xs">Connected</Badge>
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
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                      }`}>
                        {message.sender === 'user' ? <User className="w-4 h-4" /> : <Brain className="w-4 h-4" />}
                      </div>
                      
                      <div className={`rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/80 border border-gray-200'
                      }`}>
                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                        {message.type && message.sender === 'ai' && (
                          <Badge className="mt-2 bg-blue-100 text-blue-700 text-xs">
                            Powered by Gemini
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-white/80 border border-gray-200 rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
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
                className="flex-1 bg-white/60 border-gray-200"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700"
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
