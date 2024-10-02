import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import Expense from '../model/Expense';
import { ExpensesContext } from '../store/expenses-context';

interface AllExpensesProps {
  expenses: Expense[];
  period: string;
}

const AllExpenses: React.FC<AllExpensesProps> = ({ expenses, period }) => {
  const expensesContext = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesContext.expenses}
      period="Total"
    />
  );
};

export default AllExpenses;
