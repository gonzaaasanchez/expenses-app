import { View, StyleSheet, Text } from 'react-native';
import Input from './Input';
import { useState } from 'react';
import Button from '../UI/Button';
import { ButtonMode } from '../UI/Button';

interface ExpenseFormProps {
  onCancel: () => void;
  onSubmit: () => void;
  submitButtonLabel: string;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
}) => {
  const [inputValues, setAInputValues] = useState({
    amount: '',
    date: '',
    description: '',
  });

  function inputChangeHandler(inputIdentifier: string, value: string) {
    setAInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: value,
      };
    });
  }
  return (
    <View style={styles.formStyle}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: 'YYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          maxLength: 200,
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.button}
          chidren={'Cancel'}
          onPress={onCancel}
          mode={ButtonMode.flat}
        />
        <Button
          style={styles.button}
          chidren={submitButtonLabel}
          onPress={onSubmit}
          mode={ButtonMode.normal}
        />
      </View>
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 20,
    marginHorizontal: 8,
  },
});
