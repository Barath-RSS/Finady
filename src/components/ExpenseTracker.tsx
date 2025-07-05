
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Wallet, 
  ShoppingCart, 
  Car, 
  Home,
  Coffee,
  Plus,
  TrendingDown,
  Calendar,
  Filter
} from 'lucide-react';

export const ExpenseTracker = () => {
  const [newExpense, setNewExpense] = useState({ amount: '', category: '', description: '' });

  const expenses = [
    { category: 'Food & Dining', amount: 12500, icon: Coffee, color: 'bg-orange-500', budget: 15000 },
    { category: 'Transportation', amount: 8200, icon: Car, color: 'bg-blue-500', budget: 10000 },
    { category: 'Shopping', amount: 6800, icon: ShoppingCart, color: 'bg-purple-500', budget: 8000 },
    { category: 'Housing', amount: 25000, icon: Home, color: 'bg-green-500', budget: 25000 }
  ];

  const handleAddExpense = () => {
    if (newExpense.amount && newExpense.category) {
      console.log('Adding expense:', newExpense);
      setNewExpense({ amount: '', category: '', description: '' });
    }
  };

  const handleSetBudget = (category: string) => {
    console.log('Setting budget for:', category);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Add Expense Form */}
        <Card className="glass-card hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Plus className="w-5 h-5 text-blue-600" />
              Add Expense
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Amount (₹)"
              value={newExpense.amount}
              onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
              className="bg-white/60 border-gray-200"
            />
            <Input
              placeholder="Category"
              value={newExpense.category}
              onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
              className="bg-white/60 border-gray-200"
            />
            <Input
              placeholder="Description"
              value={newExpense.description}
              onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
              className="bg-white/60 border-gray-200"
            />
            <Button 
              onClick={handleAddExpense}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              Add Expense
            </Button>
          </CardContent>
        </Card>

        {/* Expense Categories */}
        <Card className="lg:col-span-2 glass-card hover-lift">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Wallet className="w-5 h-5 text-blue-600" />
              Expense Categories
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expenses.map((expense, index) => {
                const percentage = (expense.amount / expense.budget) * 100;
                return (
                  <div key={index} className="p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${expense.color} rounded-xl flex items-center justify-center`}>
                          <expense.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">{expense.category}</h4>
                          <p className="text-sm text-gray-600">₹{expense.amount.toLocaleString()} / ₹{expense.budget.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={percentage > 90 ? "bg-red-100 text-red-700" : percentage > 70 ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}>
                          {percentage.toFixed(0)}%
                        </Badge>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleSetBudget(expense.category)}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${expense.color}`}
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
