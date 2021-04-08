import React from 'react'
import { connect } from 'react-redux'
import ConnectedExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/getVisible'
export const ExpenseList = (props) => (
    <div>
        <h1>
            Expense List
        </h1>
        <p>{props.expenses.length}</p>
       
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