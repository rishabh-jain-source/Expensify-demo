import { removeExpense ,editExpense,addExpense} from '../../actions/expenses'
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
    const addDATA = {
        description : 'rent',
      note :'january',
      amount : 100,
      createdAt : 100
    }
    const action = addExpense(addDATA)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...addDATA,
            //id: expect.any(String)
        }
    })
})