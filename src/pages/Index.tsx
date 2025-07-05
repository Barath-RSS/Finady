
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
  Zap,
  Globe,
  Users,
  Settings,
  HelpCircle,
  BookOpen,
  Activity,
  Wallet,
  Calculator,
  LineChart,
  PieChart,
  TrendingDown,
  Bell,
  Calendar,
  FileText,
  Download,
  Upload,
  Database,
  Lock,
  CheckCircle,
  ArrowRight,
  Play,
  Star
} from 'lucide-react';
import { FinancialOverview } from '@/components/FinancialOverview';
import { ChatInterface } from '@/components/ChatInterface';
import { InsightsPanel } from '@/components/InsightsPanel';
import { GoalTracker } from '@/components/GoalTracker';
import { PortfolioAnalyzer } from '@/components/PortfolioAnalyzer';
import { ExpenseTracker } from '@/components/ExpenseTracker';
import { TaxPlanner } from '@/components/TaxPlanner';
import { RiskAssessment } from '@/components/RiskAssessment';
import { MarketWatch } from '@/components/MarketWatch';
import { BudgetPlanner } from '@/components/BudgetPlanner';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const { toast } = useToast();

  const handleConnect = async () => {
    setLoading(true);
    // Simulate Fi MCP connection
    setTimeout(() => {
      setIsConnected(true);
      setLoading(false);
      toast({
        title: "🎉 Connected Successfully!",
        description: "Fi Money MCP Server is now connected. Your financial data is being analyzed with Google Gemini AI.",
      });
    }, 2000);
  };

  const quickActions = [
    { icon: Calculator, title: "Quick Calculator", desc: "Instant financial calculations", color: "from-blue-500 to-cyan-500" },
    { icon: Upload, title: "Import Data", desc: "Upload financial documents", color: "from-green-500 to-emerald-500" },
    { icon: Download, title: "Export Report", desc: "Download comprehensive reports", color: "from-purple-500 to-violet-500" },
    { icon: Bell, title: "Set Alerts", desc: "Configure smart notifications", color: "from-orange-500 to-red-500" },
    { icon: Calendar, title: "Schedule Review", desc: "Book financial review session", color: "from-pink-500 to-rose-500" },
    { icon: HelpCircle, title: "Get Support", desc: "24/7 AI-powered assistance", color: "from-indigo-500 to-blue-500" }
  ];

  const features = [
    { icon: Database, title: "18+ Data Sources", desc: "Banks, MFs, Stocks & more" },
    { icon: Brain, title: "Google Gemini AI", desc: "Advanced financial reasoning" },
    { icon: Shield, title: "Bank-Grade Security", desc: "Your data stays private" },
    { icon: Zap, title: "Real-time Analysis", desc: "Instant insights & alerts" },
    { icon: Globe, title: "Cross-Platform", desc: "Works everywhere" },
    { icon: Users, title: "Expert Insights", desc: "Professional advice" }
  ];

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/60 rotate-45 animate-bounce delay-300"></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-purple-400/60 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-8 bg-indigo-400/60 animate-bounce delay-1000"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
          <div className="max-w-6xl w-full">
            <div className="text-center mb-12 space-y-6">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center floating-animation shadow-2xl">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center pulse-soft">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Fi AI Agent
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  The world's first consumer MCP Server for personalized financial intelligence
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>Powered by Google Gemini AI</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Main Connection Card */}
              <Card className="glass-card hover-lift p-8 slide-up border-2 border-blue-100/50">
                <div className="space-y-8">
                  <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">Connect Your Financial Life</h2>
                    <p className="text-gray-600">
                      Securely connect 18+ financial sources for AI-powered insights
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm bg-white/60 p-3 rounded-xl hover:bg-white/80 transition-all duration-300">
                        <feature.icon className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-800">{feature.title}</div>
                          <div className="text-gray-500 text-xs">{feature.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={handleConnect}
                    disabled={loading}
                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    {loading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Connecting to Fi MCP...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Connect Fi MCP Server
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </Button>
                </div>
              </Card>

              {/* Quick Actions Grid */}
              <div className="space-y-6 slide-up slide-up-delay-1">
                <h3 className="text-xl font-bold text-gray-800 text-center">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <Card key={index} className="glass-card hover-lift p-4 cursor-pointer group">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <action.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 text-sm">{action.title}</h4>
                          <p className="text-gray-600 text-xs">{action.desc}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Features */}
            <div className="text-center slide-up slide-up-delay-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">What you can ask your AI advisor</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    "How much will I have at 40?",
                    "Can I afford a ₹50L home loan?", 
                    "Which SIPs underperformed?",
                    "How's my net worth growing?"
                  ].map((question, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                      <p className="text-gray-700 font-medium">"{question}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b border-gray-200/60 bg-white/80 backdrop-blur-xl shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Fi AI Agent
                </h1>
                <p className="text-xs text-gray-500">Powered by Google Gemini</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-green-100 text-green-700 border-green-200 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 pulse-soft"></div>
                Connected
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 slide-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Your Financial Command Center</h2>
          <p className="text-gray-600 text-lg">AI-powered insights for smarter financial decisions</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-8 bg-white/90 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-gray-200">
            <TabsTrigger 
              value="overview" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300 text-xs"
            >
              <BarChart3 className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="chat" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300 text-xs"
            >
              <MessageSquare className="w-4 h-4" />
              AI Chat
            </TabsTrigger>
            <TabsTrigger 
              value="insights" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300 text-xs"
            >
              <Sparkles className="w-4 h-4" />
              Insights
            </TabsTrigger>
            <TabsTrigger 
              value="goals" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300 text-xs"
            >
              <Target className="w-4 h-4" />
              Goals
            </TabsTrigger>
            <TabsTrigger 
              value="portfolio" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300 text-xs"
            >
              <PieChart className="w-4 h-4" />
              Portfolio
            </TabsTrigger>
            <TabsTrigger 
              value="expenses" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300 text-xs"
            >
              <Wallet className="w-4 h-4" />
              Expenses
            </TabsTrigger>
            <TabsTrigger 
              value="tax" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300 text-xs"
            >
              <FileText className="w-4 h-4" />
              Tax
            </TabsTrigger>
            <TabsTrigger 
              value="market" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300 text-xs"
            >
              <TrendingUp className="w-4 h-4" />
              Market
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

          <TabsContent value="portfolio" className="slide-up slide-up-delay-1">
            <PortfolioAnalyzer />
          </TabsContent>

          <TabsContent value="expenses" className="slide-up slide-up-delay-1">
            <ExpenseTracker />
          </TabsContent>

          <TabsContent value="tax" className="slide-up slide-up-delay-1">
            <TaxPlanner />
          </TabsContent>

          <TabsContent value="market" className="slide-up slide-up-delay-1">
            <MarketWatch />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
