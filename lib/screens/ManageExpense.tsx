import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { RootStackParamList } from '../../App';
import { useLayoutEffect } from 'react';

type ManageExpensecreenProps = {
  route: RouteProp<RootStackParamList, 'ManageExpense'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'ManageExpense'>;
};

const ManageExpense: React.FC<ManageExpensecreenProps> = ({
  route,
  navigation,
}) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return <Text>ManageExpense</Text>;
};

export default ManageExpense;
