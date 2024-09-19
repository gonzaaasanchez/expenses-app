import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import Expense from '../model/Expense';

interface AllExpensesProps {
  expenses: Expense[];
  period: string;
}

const AllExpenses: React.FC<AllExpensesProps> = ({ expenses, period }) => {
  return (
    <ExpensesOutput
      expenses={expenses}
      period='Total'
    />
  );
};

export default AllExpenses;
