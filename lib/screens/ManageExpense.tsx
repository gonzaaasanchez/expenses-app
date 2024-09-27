import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';
import { RootStackParamList } from '../../App';
import { useLayoutEffect } from 'react';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button, { ButtonMode } from '../components/UI/Button';

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

  function confirmHandler() {}

  function cancelHandler() {}

  function deleteExpenseHandler() {}

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.button}
          chidren={'Cancel'}
          onPress={cancelHandler}
          mode={ButtonMode.flat}
        />
        <Button
          style={styles.button}
          chidren={isEditing ? 'Update' : 'Add'}
          onPress={confirmHandler}
          mode={ButtonMode.normal}
        />
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            iconName="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 20,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
