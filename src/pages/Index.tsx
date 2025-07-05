
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
  Brain
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
        title: "Connected Successfully!",
        description: "Fi Money MCP Server is now connected. Your financial data is being analyzed.",
      });
    }, 2000);
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 card-gradient">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-white">Fi AI Agent</h1>
              <p className="text-muted-foreground">
                Connect to Fi Money's MCP Server to unlock AI-powered financial insights
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>Bank-grade security & privacy</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Powered by Google Gemini AI</span>
              </div>
            </div>

            <Button 
              onClick={handleConnect}
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90"
            >
              {loading ? "Connecting..." : "Connect Fi MCP Server"}
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-primary" />
              <h1 className="text-xl font-bold text-white">Fi AI Agent</h1>
            </div>
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              Connected
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-background/50">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              AI Chat
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Insights
            </TabsTrigger>
            <TabsTrigger value="goals" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Goals
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <FinancialOverview />
          </TabsContent>

          <TabsContent value="chat">
            <ChatInterface />
          </TabsContent>

          <TabsContent value="insights">
            <InsightsPanel />
          </TabsContent>

          <TabsContent value="goals">
            <GoalTracker />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
