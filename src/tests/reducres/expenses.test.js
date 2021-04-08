import expensesReducer from '../../reducers/expenses'
//import expenses from '../fixtures/expenses'

const expenses = [{
    id: 1,
    description: 'rent',
    note: '',
    amount: 100,
    createdAt:0
    }
    ]

test('default expenses state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})
// test('addExpense', () => {
//     const state = filtersReducer(undefined, { type: 'ADD_EXPENSE' })
//     expect(state).toBe({
//         ...state,
//         action.expense
//     })
// })
test('remove Expense', () => {
    const state = expensesReducer(undefined, { type: 'REMOVE_EXPENSE',id:expenses[0].id })
    expect(state).toEqual([])
})

test('to add expense', () => {
    const expense = {
        id: 109,
        description: 'tea',
        note: 'canteen',
        createdAt: 100,
        amount:300
    }
    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense })
    expect(state).toEqual([
        ...expenses,expense
    ])
})

test('Edit Expense', () => {
    const amount = 0;
    const action={
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toEqual(amount);
})


test('setExpense Test', () => {
    const action = {
        type: 'SET_EXPENSES',
        expense:[expenses[0]]
    }
    console.log(expenses[0])
    console.log(state)
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0]])
    
})