
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Calculator, 
  Download,
  Upload,
  TrendingUp,
  Shield,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

export const TaxPlanner = () => {
  const taxData = [
    { section: '80C', invested: 150000, limit: 150000, saved: 46500 },
    { section: '80D', invested: 25000, limit: 25000, saved: 7750 },
    { section: 'ELSS', invested: 50000, limit: 150000, saved: 15500 },
    { section: 'NPS', invested: 50000, limit: 50000, saved: 15500 }
  ];

  const handleCalculateTax = () => {
    console.log('Calculating tax liability...');
  };

  const handleGenerateReport = () => {
    console.log('Generating tax report...');
  };

  const handleUploadDocuments = () => {
    console.log('Uploading tax documents...');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tax Savings Overview */}
        <Card className="glass-card hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Shield className="w-5 h-5 text-blue-600" />
              Tax Savings Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {taxData.map((item, index) => {
                const percentage = (item.invested / item.limit) * 100;
                return (
                  <div key={index} className="p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-gray-800">Section {item.section}</h4>
                        {percentage >= 100 ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-yellow-600" />
                        )}
                      </div>
                      <Badge className="bg-green-100 text-green-700">
                        ₹{item.saved.toLocaleString()} saved
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>₹{item.invested.toLocaleString()} / ₹{item.limit.toLocaleString()}</span>
                      <span>{percentage.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Tax Tools */}
        <Card className="glass-card hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Calculator className="w-5 h-5 text-blue-600" />
              Tax Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={handleCalculateTax}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calculate Tax Liability
            </Button>
            <Button 
              onClick={handleGenerateReport}
              variant="outline" 
              className="w-full border-blue-200 hover:bg-blue-50"
            >
              <Download className="w-4 h-4 mr-2" />
              Generate Tax Report
            </Button>
            <Button 
              onClick={handleUploadDocuments}
              variant="outline" 
              className="w-full border-blue-200 hover:bg-blue-50"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Documents
            </Button>
            
            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-800 mb-3">This Year's Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Tax Saved</span>
                  <span className="font-medium text-green-600">₹85,250</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Estimated Liability</span>
                  <span className="font-medium text-gray-800">₹1,24,750</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Refund Expected</span>
                  <span className="font-medium text-blue-600">₹12,500</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
