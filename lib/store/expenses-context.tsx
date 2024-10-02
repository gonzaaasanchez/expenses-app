import { createContext, ReactNode, useReducer } from 'react';
import Expense from '../model/Expense';

export const DUMMY_EXPENSES: Expense[] = [
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
    date: new Date('2024-07-01'),
    amount: 5,
  },
  {
    id: 'e5',
    description: 'book 2',
    date: new Date('2024-07-28'),
    amount: 7,
  },
];

interface ExpensesContextType {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (expense: Expense) => void;
}

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
  addExpense: (expense: Expense) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (expense: Expense) => {},
});

enum ActionType {
  ADD = 'ADD',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
}

type Action =
  | { type: ActionType.ADD; payload: Expense }
  | { type: ActionType.DELETE; payload: string }
  | {
      type: ActionType.UPDATE;
      payload: { expense: Partial<Expense> };
    };

type State = Expense[];

function expensesReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.ADD:
      const newExpense: Expense = {
        ...action.payload,
        id: new Date().toISOString() + Math.random().toString(),
      };
      return [newExpense, ...state];
    case ActionType.DELETE:
      return state.filter((expense) => expense.id !== action.payload);
    case ActionType.UPDATE:
      return state.map((expense) =>
        expense.id === action.payload.expense.id
          ? { ...expense, ...action.payload.expense }
          : expense
      );
    default:
      return state;
  }
}

interface ExpensesContextProviderProps {
  children: ReactNode;
}

const ExpensesContextProvider: React.FC<ExpensesContextProviderProps> = ({
  children,
}) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expense: Expense) {
    dispatch({ type: ActionType.ADD, payload: expense });
  }

  function deleteExpense(id: string) {
    dispatch({ type: ActionType.DELETE, payload: id });
  }

  function updateExpense(expense: Expense) {
    dispatch({
      type: ActionType.UPDATE,
      payload: { expense: expense },
    });
  }

  const value: ExpensesContextType = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
