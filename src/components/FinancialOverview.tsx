
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PiggyBank, 
  CreditCard,
  Home,
  Briefcase
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const netWorthData = [
  { month: 'Jan', value: 850000 },
  { month: 'Feb', value: 920000 },
  { month: 'Mar', value: 880000 },
  { month: 'Apr', value: 950000 },
  { month: 'May', value: 1020000 },
  { month: 'Jun', value: 1150000 },
];

const assetAllocation = [
  { name: 'Equity', value: 450000, color: '#10b981' },
  { name: 'Fixed Deposits', value: 300000, color: '#3b82f6' },
  { name: 'Real Estate', value: 250000, color: '#8b5cf6' },
  { name: 'Gold', value: 100000, color: '#f59e0b' },
  { name: 'Cash', value: 50000, color: '#6b7280' },
];

export const FinancialOverview = () => {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="card-gradient">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Net Worth</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">₹11.5L</div>
            <div className="flex items-center text-xs text-primary">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12.8% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Income</CardTitle>
            <Briefcase className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">₹85K</div>
            <div className="flex items-center text-xs text-primary">
              <TrendingUp className="w-3 h-3 mr-1" />
              +5.2% YoY
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Investments</CardTitle>
            <PiggyBank className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">₹4.5L</div>
            <div className="flex items-center text-xs text-primary">
              <TrendingUp className="w-3 h-3 mr-1" />
              +18.3% returns
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Credit Score</CardTitle>
            <CreditCard className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">748</div>
            <div className="flex items-center text-xs text-primary">
              <TrendingUp className="w-3 h-3 mr-1" />
              Excellent
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="text-white">Net Worth Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={netWorthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="text-white">Asset Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={assetAllocation}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {assetAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Financial Health Score */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="text-white">Financial Health Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Overall Score</span>
              <Badge className="bg-primary/20 text-primary">Excellent</Badge>
            </div>
            <Progress value={85} className="h-3" />
            <div className="text-center">
              <span className="text-3xl font-bold text-primary">85/100</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Savings Rate</div>
                <div className="text-lg font-semibold text-white">32%</div>
                <Progress value={32} className="h-2 mt-1" />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Debt-to-Income</div>
                <div className="text-lg font-semibold text-white">18%</div>
                <Progress value={18} className="h-2 mt-1" />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Emergency Fund</div>
                <div className="text-lg font-semibold text-white">6 months</div>
                <Progress value={100} className="h-2 mt-1" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
