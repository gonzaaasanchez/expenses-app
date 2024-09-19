import { View, StyleSheet } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import Expense from '../../model/Expense';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES: Expense[] = [
  {
    id: 'e1',
    description: 'shows',
    date: new Date('2024-09-01'),
    amount: 123.4,
  },
  {
    id: 'e2',
    description: 'food',
    date: new Date('2024-08-01'),
    amount: 23,
  },
  {
    id: 'e3',
    description: 'shirt',
    date: new Date('2024-09-20'),
    amount: 43,
  },
  {
    id: 'e4',
    description: 'book',
    date: new Date('2024-07-20'),
    amount: 5,
  },
  {
    id: 'e5',
    description: 'book',
    date: new Date('2024-09-20'),
    amount: 5,
  },
];

interface ExpensesOutputProps {
  expenses: Expense[];
  period: string;
}

const ExpensesOutput: React.FC<ExpensesOutputProps> = ({
  expenses,
  period,
}) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={DUMMY_EXPENSES}
        periodName={period}
      />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
