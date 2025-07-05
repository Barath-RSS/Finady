
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
  ArrowRight
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
    <div className="space-y-6">
      {/* AI-Generated Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {insights.map((insight) => (
          <Card key={insight.id} className="card-gradient">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <insight.icon className={`w-5 h-5 ${insight.color}`} />
                  <Badge 
                    variant={insight.type === 'warning' ? 'destructive' : 'secondary'}
                    className="text-xs"
                  >
                    {insight.impact} Impact
                  </Badge>
                </div>
              </div>
              
              <h3 className="text-white font-semibold mb-2">{insight.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{insight.description}</p>
              
              <Button 
                size="sm" 
                className="bg-primary/20 text-primary hover:bg-primary hover:text-white"
              >
                {insight.action}
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Financial Health Trends */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="text-white">Financial Health Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trends.map((trend, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">{trend.metric}</span>
                  <div className="flex items-center gap-1">
                    {trend.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-400" />
                    )}
                    <span className={`text-sm ${trend.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                      {trend.current}%
                    </span>
                  </div>
                </div>
                <Progress value={trend.current} className="h-2" />
                <p className="text-xs text-muted-foreground">{trend.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Scenario Planning */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Scenario Planning
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-secondary/50 p-4 rounded-lg border border-primary/20">
              <h4 className="text-white font-medium mb-2">Conservative Growth</h4>
              <div className="text-2xl font-bold text-primary mb-1">₹42L</div>
              <p className="text-xs text-muted-foreground">By age 40 with 8% returns</p>
            </div>
            
            <div className="bg-secondary/50 p-4 rounded-lg border border-primary/20">
              <h4 className="text-white font-medium mb-2">Current Trajectory</h4>
              <div className="text-2xl font-bold text-primary mb-1">₹52L</div>
              <p className="text-xs text-muted-foreground">By age 40 with 12% returns</p>
            </div>
            
            <div className="bg-secondary/50 p-4 rounded-lg border border-primary/20">
              <h4 className="text-white font-medium mb-2">Aggressive Growth</h4>
              <div className="text-2xl font-bold text-primary mb-1">₹68L</div>
              <p className="text-xs text-muted-foreground">By age 40 with 15% returns</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" className="bg-primary/20 text-primary hover:bg-primary hover:text-white">
              Run Custom Scenario
            </Button>
            <Button size="sm" variant="outline" className="border-primary/20 text-primary">
              Compare Options
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
