import Expense from '../model/Expense';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

interface RecentExpensesProps {
  expenses: Expense[];
  period: string;
}

const RecentExpenses: React.FC<RecentExpensesProps> = ({
  expenses,
  period,
}) => {
  return (
    <ExpensesOutput
      expenses={expenses}
      period="Last 7 Days"
    />
  );
};

export default RecentExpenses;
