import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import { editExpense } from '../actions/expenses'

const EditExpense = (props) => (
    <div>
        
        
        <h1>EditExpense</h1>
        <h1>{ props.match.params.id}</h1>
        <ExpenseForm
            
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id,expense))
               // props.dispatch(editExpense(props.expenses.id, expense))
                //props.history.push('/')
                //console.log(props.expense.id)
                console.log(expense)
        }}/>
    </div>
)


const mapStateToProps = (state,props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id===props.match.params.id
        })
    }
}
export default connect(mapStateToProps)(EditExpense)