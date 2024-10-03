import { View, StyleSheet, Text } from 'react-native';
import Input from './Input';

const ExpenseForm = () => {
  function amountChangeHandler() {}
  function dateChangeHandler() {}
  function descriptionChangeHandler() {}

  return (
    <View style={styles.formStyle}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: 'YYY-MM-DD',
            maxLength: 10,
            onChangeText: dateChangeHandler,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          maxLength: 200,
          multiline: true,
          onChangeText: descriptionChangeHandler,
        }}
      />
    </View>
  );
};
export default ExpenseForm;

const styles = StyleSheet.create({
  formStyle: {
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
});
