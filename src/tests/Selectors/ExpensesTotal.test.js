import ExpenseTotal from '../../selectors/ExpensesTotal'

const expenses = [{
    id: 1,
    description: 'rent',
    note: '',
    amount: 100,
    createdAt:0
},
    {
        id: 2,
        description: 'rent',
        note: '',
        amount: 1000,
        createdAt:0  
    }
]

test('no item in expense list', () => {
    const res = ExpenseTotal([]);
    expect(res).toBe(0);
})
test('for single expense item', () => {
    const res = ExpenseTotal([expenses[0]])
    console.log(res);
    expect(res).toBe(100);
})
test('fro multiple items', () => {
    const res = ExpenseTotal(expenses)
    console.log(res);
    expect(res).toBe(1100);
})