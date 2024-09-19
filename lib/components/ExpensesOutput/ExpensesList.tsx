import React from 'react';
import { FlatList, ListRenderItemInfo, Text, StyleSheet } from 'react-native';
import Expense from '../../model/Expense';
import { GlobalStyles } from '../../constants/styles';
import ExpenseItem from './ExpenseItem';

interface ExpensesListProps {
  expenses: Expense[];
}

const renderExpenseItem = ({ item }: ListRenderItemInfo<Expense>) => {
  return <ExpenseItem expense={item} />;
};

const ExpensesList: React.FC<ExpensesListProps> = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
