import Expense from '../model/Expense';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../utils/date';

interface RecentExpensesProps {
  expenses: Expense[];
  period: string;
}

const RecentExpenses: React.FC<RecentExpensesProps> = ({
  expenses,
  period,
}) => {
  const expensesContext = useContext(ExpensesContext);
  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      period="Last 7 Days"
      fallbackText="No expenses to show"
    />
  );
};

export default RecentExpenses;
