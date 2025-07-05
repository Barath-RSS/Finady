
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  PlusCircle,
  Edit,
  Trash2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export const BudgetPlanner = () => {
  const [budgets, setBudgets] = useState([
    { id: 1, category: 'Food & Dining', budget: 15000, spent: 12500, period: 'Monthly' },
    { id: 2, category: 'Transportation', budget: 10000, spent: 8200, period: 'Monthly' },
    { id: 3, category: 'Entertainment', budget: 5000, spent: 6800, period: 'Monthly' },
    { id: 4, category: 'Healthcare', budget: 8000, spent: 3200, period: 'Monthly' }
  ]);

  const [newBudget, setNewBudget] = useState({ category: '', amount: '', period: 'Monthly' });

  const handleAddBudget = () => {
    if (newBudget.category && newBudget.amount) {
      console.log('Adding budget:', newBudget);
      setNewBudget({ category: '', amount: '', period: 'Monthly' });
    }
  };

  const handleEditBudget = (id: number) => {
    console.log('Editing budget:', id);
  };

  const handleDeleteBudget = (id: number) => {
    setBudgets(budgets.filter(budget => budget.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Add Budget Form */}
        <Card className="glass-card hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <PlusCircle className="w-5 h-5 text-blue-600" />
              Create Budget
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Category"
              value={newBudget.category}
              onChange={(e) => setNewBudget({...newBudget, category: e.target.value})}
              className="bg-white/60 border-gray-200"
            />
            <Input
              placeholder="Budget Amount (₹)"
              value={newBudget.amount}
              onChange={(e) => setNewBudget({...newBudget, amount: e.target.value})}
              className="bg-white/60 border-gray-200"
            />
            <select 
              className="w-full p-2 bg-white/60 border border-gray-200 rounded-md"
              value={newBudget.period}
              onChange={(e) => setNewBudget({...newBudget, period: e.target.value})}
            >
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
            <Button 
              onClick={handleAddBudget}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              Create Budget
            </Button>
          </CardContent>
        </Card>

        {/* Budget List */}
        <Card className="lg:col-span-2 glass-card hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Target className="w-5 h-5 text-blue-600" />
              Budget Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {budgets.map((budget) => {
                const percentage = (budget.spent / budget.budget) * 100;
                const isOverBudget = percentage > 100;
                const isNearLimit = percentage > 80;

                return (
                  <div key={budget.id} className="p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          {isOverBudget ? (
                            <AlertCircle className="w-5 h-5 text-red-600" />
                          ) : (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          )}
                          <div>
                            <h4 className="font-medium text-gray-800">{budget.category}</h4>
                            <p className="text-sm text-gray-600">
                              ₹{budget.spent.toLocaleString()} / ₹{budget.budget.toLocaleString()} ({budget.period})
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={
                          isOverBudget ? "bg-red-100 text-red-700" :
                          isNearLimit ? "bg-yellow-100 text-yellow-700" :
                          "bg-green-100 text-green-700"
                        }>
                          {percentage.toFixed(0)}%
                        </Badge>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleEditBudget(budget.id)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDeleteBudget(budget.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${
                          isOverBudget ? 'bg-red-500' :
                          isNearLimit ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
