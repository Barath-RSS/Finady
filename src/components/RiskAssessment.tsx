
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp,
  Target,
  Activity,
  BarChart3
} from 'lucide-react';

export const RiskAssessment = () => {
  const riskFactors = [
    { name: 'Market Risk', level: 'Medium', score: 65, color: 'bg-yellow-500' },
    { name: 'Credit Risk', level: 'Low', score: 25, color: 'bg-green-500' },
    { name: 'Liquidity Risk', level: 'Low', score: 30, color: 'bg-green-500' },
    { name: 'Concentration Risk', level: 'High', score: 85, color: 'bg-red-500' }
  ];

  const handleReassess = () => {
    console.log('Reassessing risk profile...');
  };

  const handleOptimize = () => {
    console.log('Optimizing risk exposure...');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Shield className="w-5 h-5 text-blue-600" />
              Risk Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskFactors.map((risk, index) => (
                <div key={index} className="p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-800">{risk.name}</h4>
                    <Badge className={`${
                      risk.level === 'High' ? 'bg-red-100 text-red-700' :
                      risk.level === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {risk.level}
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${risk.color}`}
                      style={{ width: `${risk.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Activity className="w-5 h-5 text-blue-600" />
              Risk Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={handleReassess}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Reassess Risk Profile
            </Button>
            <Button 
              onClick={handleOptimize}
              variant="outline" 
              className="w-full border-blue-200 hover:bg-blue-50"
            >
              <Target className="w-4 h-4 mr-2" />
              Optimize Exposure
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
