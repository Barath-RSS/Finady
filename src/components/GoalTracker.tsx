
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Target, 
  Home, 
  GraduationCap, 
  Car,
  Plane,
  PiggyBank,
  Calendar,
  TrendingUp,
  Plus
} from 'lucide-react';

const goals = [
  {
    id: 1,
    title: 'Home Down Payment',
    target: 1000000,
    current: 380000,
    deadline: '2026-12-31',
    category: 'Housing',
    icon: Home,
    color: 'text-blue-400',
    status: 'on-track'
  },
  {
    id: 2,
    title: 'Emergency Fund',
    target: 500000,
    current: 500000,
    deadline: '2024-06-30',
    category: 'Security',
    icon: PiggyBank,
    color: 'text-green-400',
    status: 'completed'
  },
  {
    id: 3,
    title: 'Child Education Fund',
    target: 2500000,
    current: 450000,
    deadline: '2032-06-30',
    category: 'Education',
    icon: GraduationCap,
    color: 'text-purple-400',
    status: 'on-track'
  },
  {
    id: 4,
    title: 'Car Purchase',
    target: 800000,
    current: 120000,
    deadline: '2025-03-31',
    category: 'Lifestyle',
    icon: Car,
    color: 'text-orange-400',
    status: 'behind'
  },
  {
    id: 5,
    title: 'Europe Trip',
    target: 250000,
    current: 180000,
    deadline: '2024-09-30',
    category: 'Travel',
    icon: Plane,
    color: 'text-cyan-400',
    status: 'on-track'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-green-400/20 text-green-400';
    case 'on-track': return 'bg-blue-400/20 text-blue-400';
    case 'behind': return 'bg-red-400/20 text-red-400';
    default: return 'bg-gray-400/20 text-gray-400';
  }
};

const formatCurrency = (amount: number) => {
  if (amount >= 1000000) {
    return `₹${(amount / 1000000).toFixed(1)}L`;
  } else if (amount >= 1000) {
    return `₹${(amount / 1000).toFixed(0)}K`;
  }
  return `₹${amount}`;
};

const calculateTimeRemaining = (deadline: string) => {
  const now = new Date();
  const target = new Date(deadline);
  const diff = target.getTime() - now.getTime();
  const months = Math.ceil(diff / (1000 * 60 * 60 * 24 * 30));
  
  if (months <= 0) return 'Overdue';
  if (months === 1) return '1 month';
  if (months < 12) return `${months} months`;
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (remainingMonths === 0) return `${years} year${years > 1 ? 's' : ''}`;
  return `${years}y ${remainingMonths}m`;
};

export const GoalTracker = () => {
  return (
    <div className="space-y-6">
      {/* Goal Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Goals</p>
                <p className="text-2xl font-bold text-white">5</p>
              </div>
              <Target className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">On Track</p>
                <p className="text-2xl font-bold text-green-400">3</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Target</p>
                <p className="text-2xl font-bold text-primary">₹50.5L</p>
              </div>
              <PiggyBank className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Goals List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Your Financial Goals</h2>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Goal
          </Button>
        </div>
        
        {goals.map((goal) => {
          const progress = (goal.current / goal.target) * 100;
          const timeRemaining = calculateTimeRemaining(goal.deadline);
          
          return (
            <Card key={goal.id} className="card-gradient">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-secondary flex items-center justify-center`}>
                      <goal.icon className={`w-5 h-5 ${goal.color}`} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{goal.title}</h3>
                      <p className="text-muted-foreground text-sm">{goal.category}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Badge className={getStatusColor(goal.status)}>
                      {goal.status.replace('-', ' ')}
                    </Badge>
                    <div className="flex items-center gap-1 mt-1">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{timeRemaining}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-white">
                      {formatCurrency(goal.current)} / {formatCurrency(goal.target)}
                    </span>
                  </div>
                  <Progress value={progress} className="h-3" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{Math.round(progress)}% complete</span>
                    <span>{formatCurrency(goal.target - goal.current)} remaining</span>
                  </div>
                </div>
                
                {goal.status !== 'completed' && (
                  <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">AI Recommendation:</p>
                    <p className="text-sm text-white">
                      {goal.id === 1 && "Increase monthly savings by ₹5K to reach your target 6 months early."}
                      {goal.id === 3 && "Consider SIP in child-focused mutual funds for better tax benefits."}
                      {goal.id === 4 && "You're behind schedule. Consider increasing monthly allocation by ₹8K."}
                      {goal.id === 5 && "On track! Continue current savings rate of ₹12K/month."}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
