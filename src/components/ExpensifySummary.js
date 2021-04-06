import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import getVisibleExpenses from './../selectors/getVisible'
import ExpensesTotal from '../selectors/ExpensesTotal'
export const ExpensifySummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = (expenseCount > 1 ? 'expenses' : 'expense')
    const expenseFormat=numeral(expenseTotal).format('$0,000.00')
    return (
        <div>
            <h1>viewing {expenseCount} {expenseWord} with total of { expenseFormat}</h1>
        </div >
    )
}
const mapStateToProps=(state)=> {
    const visible = getVisibleExpenses(state.expenses, state.filters)
    return {
        expenseCount: visible.length,
        expenseTotal: ExpensesTotal(visible)
    }
}

 export default connect(mapStateToProps)(ExpensifySummary)   
