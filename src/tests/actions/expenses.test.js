import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { removeExpense, editExpense, addExpense, startAddExpense,setExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'

const createMockStore=configureMockStore([thunk])

test("add Expense test", () => {
    const action = removeExpense({ id: 'abc123' })
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'abc123'
    })
})
// test("edit expense", () => {
//     const action = editExpense({ id: 'abc123' }, { note: "this" })
//     expect(action).toEqual({
//         type: 'EDIT_EXPENSE',
//         id: 'abc@123',
//         note:'this'
//     })
// })
test("ADD EXPENSE", () => {
    const action = addExpense(expenses[1])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenses[1],
            //id: expect.any(String)
        }
    })
})

test('should test database and store data', () => {
    const store = createMockStore({});
    const expenseData = {
        description: 'coffee',
        amount: '12',
        note: 'break',
        createdAt:'9'
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        expect(1).toBe(11);
        
    })
    
})

test('setExpense test', () => {
    const action = setExpense(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    });
})