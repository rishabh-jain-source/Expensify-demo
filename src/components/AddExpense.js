import React from 'react'
import { connect } from 'react-redux'
import { addExpense, startAddExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'


const AddExpense = (props) => (
    <div>
        <h1>AddExpense</h1>
        <ExpenseForm onsubmit={(expense) => {
            props.dispatch(startAddExpense(expense))
            props.history.push('/')
        } }/>
    </div>
)
const mapDispatchToProps = (dispatch) => ({
  startAddExpense:(expense)=> dispatch(startAddExpense(expense))   
})
export default connect(undefined,mapDispatchToProps)(AddExpense)
    
