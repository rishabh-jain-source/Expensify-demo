import React from 'react'
import { connect } from 'react-redux'
import ConnectedExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/getVisible'
export const ExpenseList = (props) => (
    <div className="content-container">
        <h1 className=".page-header__title">Expense List</h1>
        <h1 className="table-length">{props.expenses.length}</h1>
       
        {props.expenses.map((expense) => {
            return <ConnectedExpenseListItem key={expense.id}  {...expense}/>
        })}
    </div>
)
const mapPropsTostate = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses,state.filters)
        
    }
}
const ConnectedExpenseList=connect(mapPropsTostate)(ExpenseList)
export default ConnectedExpenseList