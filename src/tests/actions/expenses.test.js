import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup remove expense', () => {
    const action = removeExpense({ id: '123xyz' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123xyz'
    });
});

test('should setup edit expense', () => {
    const action = editExpense('123xyz', { note: 'edited note' });

    expect(action).toEqual(
        {
            type: 'EDIT_EXPENSE',
            id: '123xyz',
            updates: {
                note: 'edited note'
            }
        }
    );
});

test('should setup add expense with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 12500,
        note: 'this months rent',
        createdAt: 5000
    };
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense with default values', () => {

    expect(addExpense()).toEqual({
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