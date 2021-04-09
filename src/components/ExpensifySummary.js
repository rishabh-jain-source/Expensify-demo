import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import numeral from 'numeral'
import getVisibleExpenses from './../selectors/getVisible'
import ExpensesTotal from '../selectors/ExpensesTotal'
export const ExpensifySummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = (expenseCount > 1 ? 'expenses' : 'expense')
    const expenseFormat=numeral(expenseTotal).format('$0,000.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} with total of <span>{expenseFormat}</span></h1>
                <div ><Link className="add-button" to="addExpense" >Add Expense</Link></div>
            </div>
        </div>
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
