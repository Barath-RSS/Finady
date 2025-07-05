
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  TrendingDown,
  Activity,
  Globe,
  Star,
  Bell,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

export const MarketWatch = () => {
  const marketData = [
    { name: 'NIFTY 50', value: '19,674.25', change: '+234.50', percentage: '+1.21%', trend: 'up' },
    { name: 'SENSEX', value: '66,023.24', change: '+789.45', percentage: '+1.21%', trend: 'up' },
    { name: 'NIFTY BANK', value: '44,156.80', change: '-156.25', percentage: '-0.35%', trend: 'down' },
    { name: 'GOLD', value: '₹61,234', change: '+456', percentage: '+0.75%', trend: 'up' }
  ];

  const watchlist = [
    { name: 'RELIANCE', price: '2,456.75', change: '+23.45', percentage: '+0.97%', trend: 'up' },
    { name: 'TCS', price: '3,234.50', change: '-12.25', percentage: '-0.38%', trend: 'down' },
    { name: 'HDFC BANK', price: '1,587.30', change: '+8.90', percentage: '+0.56%', trend: 'up' },
    { name: 'INFY', price: '1,456.25', change: '+34.50', percentage: '+2.42%', trend: 'up' }
  ];

  const handleAddToWatchlist = () => {
    console.log('Adding to watchlist...');
  };

  const handleSetAlert = () => {
    console.log('Setting price alert...');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Market Indices */}
        <Card className="glass-card hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Globe className="w-5 h-5 text-blue-600" />
              Market Indices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {marketData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all">
                  <div>
                    <h4 className="font-medium text-gray-800">{item.name}</h4>
                    <p className="text-lg font-bold text-gray-900">{item.value}</p>
                  </div>
                  <div className="text-right">
                    <div className={`flex items-center gap-1 ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {item.trend === 'up' ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                      <span className="font-medium">{item.change}</span>
                    </div>
                    <p className={`text-sm ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {item.percentage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Watchlist */}
        <Card className="glass-card hover-lift">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Star className="w-5 h-5 text-blue-600" />
              My Watchlist
            </CardTitle>
            <Button 
              onClick={handleAddToWatchlist}
              variant="outline" 
              size="sm"
            >
              <Star className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {watchlist.map((stock, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all">
                  <div>
                    <h4 className="font-medium text-gray-800">{stock.name}</h4>
                    <p className="text-lg font-bold text-gray-900">₹{stock.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className={`flex items-center gap-1 ${stock.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {stock.trend === 'up' ? (
                          <ArrowUpRight className="w-4 h-4" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4" />
                        )}
                        <span className="font-medium">{stock.change}</span>
                      </div>
                      <p className={`text-sm ${stock.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {stock.percentage}
                      </p>
                    </div>
                    <Button 
                      onClick={handleSetAlert}
                      variant="ghost" 
                      size="sm"
                    >
                      <Bell className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
