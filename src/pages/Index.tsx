
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  DollarSign, 
  PiggyBank, 
  CreditCard,
  Target,
  MessageSquare,
  BarChart3,
  Sparkles,
  Shield,
  Brain,
  Zap
} from 'lucide-react';
import { FinancialOverview } from '@/components/FinancialOverview';
import { ChatInterface } from '@/components/ChatInterface';
import { InsightsPanel } from '@/components/InsightsPanel';
import { GoalTracker } from '@/components/GoalTracker';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleConnect = async () => {
    setLoading(true);
    // Simulate Fi MCP connection
    setTimeout(() => {
      setIsConnected(true);
      setLoading(false);
      toast({
        title: "🎉 Connected Successfully!",
        description: "Fi Money MCP Server is now connected. Your financial data is being analyzed.",
      });
    }, 2000);
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <Card className="glass-card hover-lift p-8 slide-up">
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center floating-animation shadow-lg">
                  <Brain className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Fi AI Agent
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Connect to Fi Money's MCP Server to unlock AI-powered financial insights
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground bg-green-50 p-3 rounded-lg">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span>Bank-grade security & privacy</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground bg-purple-50 p-3 rounded-lg">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    <span>Powered by Google Gemini AI</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground bg-blue-50 p-3 rounded-lg">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>Real-time financial analysis</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleConnect}
                disabled={loading}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Connecting...
                  </div>
                ) : (
                  "Connect Fi MCP Server"
                )}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="border-b border-border/30 bg-white/60 backdrop-blur-xl shadow-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Fi AI Agent
              </h1>
            </div>
            <Badge className="bg-green-100 text-green-700 border-green-200 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 pulse-soft"></div>
              Connected
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 slide-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Financial Command Center</h2>
          <p className="text-muted-foreground text-lg">AI-powered insights for smarter financial decisions</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-gray-200">
            <TabsTrigger 
              value="overview" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300"
            >
              <BarChart3 className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="chat" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4" />
              AI Chat
            </TabsTrigger>
            <TabsTrigger 
              value="insights" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300"
            >
              <Sparkles className="w-4 h-4" />
              Insights
            </TabsTrigger>
            <TabsTrigger 
              value="goals" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300"
            >
              <Target className="w-4 h-4" />
              Goals
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="slide-up slide-up-delay-1">
            <FinancialOverview />
          </TabsContent>

          <TabsContent value="chat" className="slide-up slide-up-delay-1">
            <ChatInterface />
          </TabsContent>

          <TabsContent value="insights" className="slide-up slide-up-delay-1">
            <InsightsPanel />
          </TabsContent>

          <TabsContent value="goals" className="slide-up slide-up-delay-1">
            <GoalTracker />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
