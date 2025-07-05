
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle,
  Lightbulb,
  Target,
  Calendar,
  ArrowRight,
  Zap
} from 'lucide-react';

const insights = [
  {
    id: 1,
    type: 'opportunity',
    title: 'Investment Opportunity Detected',
    description: 'Your cash allocation (4.3%) is above the optimal range. Consider investing ₹30K in diversified equity funds to improve returns.',
    impact: 'High',
    action: 'Review Investment',
    icon: TrendingUp,
    color: 'text-green-400'
  },
  {
    id: 2,
    type: 'warning',
    title: 'SIP Performance Alert',
    description: 'Your Large Cap SIP has underperformed the benchmark by 2.3% over the last 6 months. Consider reviewing fund selection.',
    impact: 'Medium',
    action: 'Optimize Portfolio',
    icon: AlertTriangle,
    color: 'text-yellow-400'
  },
  {
    id: 3,
    type: 'achievement',
    title: 'Savings Goal Achieved',
    description: 'Congratulations! You\'ve successfully built an emergency fund covering 6 months of expenses.',
    impact: 'Positive',
    action: 'Set New Goal',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    id: 4,
    type: 'recommendation',
    title: 'Tax Optimization Opportunity',
    description: 'You can save ₹15K in taxes by maximizing your 80C deductions. Current utilization: ₹85K/₹1.5L.',
    impact: 'High',
    action: 'Optimize Taxes',
    icon: Lightbulb,
    color: 'text-blue-400'
  }
];

const trends = [
  {
    metric: 'Spending Efficiency',
    current: 78,
    previous: 72,
    trend: 'up',
    description: 'Your spending on essentials vs discretionary items has improved'
  },
  {
    metric: 'Investment Diversification',
    current: 85,
    previous: 82,
    trend: 'up',
    description: 'Portfolio diversification across asset classes'
  },
  {
    metric: 'Debt Management',
    current: 92,
    previous: 88,
    trend: 'up',
    description: 'Debt-to-income ratio is within healthy limits'
  },
  {
    metric: 'Savings Rate',
    current: 32,
    previous: 28,
    trend: 'up',
    description: 'Monthly savings as percentage of income'
  }
];

export const InsightsPanel = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">AI-Powered Financial Insights</h2>
        <p className="text-muted-foreground">Personalized recommendations based on your financial data</p>
      </div>

      {/* AI-Generated Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {insights.map((insight, index) => (
          <Card key={insight.id} className={`glass-card hover-lift slide-up slide-up-delay-${Math.min(index + 1, 3)}`}>
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    insight.type === 'opportunity' ? 'bg-green-100' :
                    insight.type === 'warning' ? 'bg-yellow-100' :
                    insight.type === 'achievement' ? 'bg-blue-100' :
                    'bg-purple-100'
                  }`}>
                    <insight.icon className={`w-6 h-6 ${insight.color}`} />
                  </div>
                  <Badge 
                    variant={insight.type === 'warning' ? 'destructive' : 'secondary'}
                    className={`px-3 py-1 rounded-full ${
                      insight.impact === 'High' ? 'bg-red-100 text-red-700' :
                      insight.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}
                  >
                    {insight.impact} Impact
                  </Badge>
                </div>
              </div>
              
              <h3 className="text-gray-800 font-semibold mb-3 text-lg">{insight.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{insight.description}</p>
              
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                {insight.action}
                <ArrowRight className="w-3 h-3 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Financial Health Trends */}
      <Card className="glass-card hover-lift">
        <CardHeader className="pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <CardTitle className="text-gray-800 text-xl">Financial Health Trends</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trends.map((trend, index) => (
              <div key={index} className="space-y-4 p-4 bg-gray-50/50 rounded-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-800">{trend.metric}</span>
                  <div className="flex items-center gap-2">
                    {trend.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                    <span className={`text-sm font-bold ${trend.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {trend.current}%
                    </span>
                  </div>
                </div>
                <Progress value={trend.current} className="h-3 bg-gray-200" />
                <p className="text-xs text-muted-foreground leading-relaxed">{trend.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Scenario Planning */}
      <Card className="glass-card hover-lift">
        <CardHeader className="pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <CardTitle className="text-gray-800 text-xl">Scenario Planning</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="px-8 pb-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100 hover-lift">
              <h4 className="text-gray-800 font-semibold mb-3">Conservative Growth</h4>
              <div className="text-3xl font-bold text-green-600 mb-2">₹42L</div>
              <p className="text-sm text-muted-foreground">By age 40 with 8% returns</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 hover-lift">
              <h4 className="text-gray-800 font-semibold mb-3">Current Trajectory</h4>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹52L</div>
              <p className="text-sm text-muted-foreground">By age 40 with 12% returns</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 hover-lift">
              <h4 className="text-gray-800 font-semibold mb-3">Aggressive Growth</h4>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹68L</div>
              <p className="text-sm text-muted-foreground">By age 40 with 15% returns</p>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
              <Zap className="w-4 h-4 mr-2" />
              Run Custom Scenario
            </Button>
            <Button variant="outline" className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 rounded-xl">
              Compare Options
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
