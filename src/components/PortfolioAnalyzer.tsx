
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  PieChart, 
  TrendingUp, 
  TrendingDown, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  Zap
} from 'lucide-react';

export const PortfolioAnalyzer = () => {
  const portfolioData = [
    { name: 'Equity Funds', value: 4.2, percentage: 52, change: 8.3, color: 'bg-blue-500' },
    { name: 'Debt Funds', value: 2.1, percentage: 26, change: 3.2, color: 'bg-green-500' },
    { name: 'Stocks', value: 1.3, percentage: 16, change: -2.1, color: 'bg-purple-500' },
    { name: 'Gold/Others', value: 0.5, percentage: 6, change: 1.8, color: 'bg-yellow-500' }
  ];

  const handleRebalance = () => {
    console.log('Rebalancing portfolio...');
  };

  const handleOptimize = () => {
    console.log('Optimizing portfolio...');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Portfolio Overview */}
        <Card className="lg:col-span-2 glass-card hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <PieChart className="w-5 h-5 text-blue-600" />
              Portfolio Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {portfolioData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                    <div>
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-600">₹{item.value}L ({item.percentage}%)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.change > 0 ? (
                      <ArrowUpRight className="w-4 h-4 text-green-600" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-600" />
                    )}
                    <span className={`text-sm font-medium ${item.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.change > 0 ? '+' : ''}{item.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Panel */}
        <Card className="glass-card hover-lift">
          <CardHeader>
            <CardTitle className="text-gray-800">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={handleRebalance}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Rebalance Portfolio
            </Button>
            <Button 
              onClick={handleOptimize}
              variant="outline" 
              className="w-full border-blue-200 hover:bg-blue-50"
            >
              <Zap className="w-4 h-4 mr-2" />
              AI Optimize
            </Button>
            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-800 mb-3">Performance Metrics</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Returns</span>
                  <span className="font-medium text-green-600">+12.8%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Risk Score</span>
                  <Badge className="bg-yellow-100 text-yellow-700">Moderate</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
