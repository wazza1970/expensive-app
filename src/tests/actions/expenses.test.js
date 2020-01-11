import { addExpense, editExpense, removeExpens, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should edit expenses', () => {
    const action = editExpense('123abc',  { note: 'new note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates:{
            note: 'new note value'
        } 
    });
});

test('should setup add expense action object with values', () => {
  const expenseData = {
      description: 'Rent',
      amount: 160000,
      createdAt: 2000,
      note: 'last months rent'

  };
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
        ...expenseData,
        id: expect.any(String)
    }
  });
});

test('should setup action add expense with default values', () => {
   const action = addExpense();
   expect(action).toEqual({
       type: 'ADD_EXPENSE',
       expense: {
           id: expect.any(String),
           description: '',
           note: '',
           amount: 0,
           createdAt: 0
       }
   });
});