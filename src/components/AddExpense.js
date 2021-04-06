import React from 'react'
import { connect } from 'react-redux'
import { addExpense, startAddExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'


const AddExpense = (props) => (
    <div>
        <h1>AddExpense</h1>
        <ExpenseForm onSubmit={(expense) => {
             props.dispatch(addExpense(expense))
             props.history.push('/dashboard ')
            console.log(expense);
        } }/>
    </div>
)
const mapDispatchToProps = (dispatch) => ({
  startAddExpense:(expense)=> dispatch(startAddExpense(expense))   
})
export default connect()(AddExpense)
    
