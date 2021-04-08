import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import { editExpense ,startRemoveExpense} from '../actions/expenses'


class EditExpense extends React.Component{//= (props) => (
    removeExp = () => {
        //onsole.log(this.props.expense.id)
        this.props.startRemoveExpense({ id: this.props.expense.id })
        this.props.history.push('/')
        
    }
    render() {
        return(
        <div>
        
        
            <h1>EditExpense</h1>
            <h1>{this.props.match.params.id}</h1>
            <ExpenseForm
            
                expense={this.props.expense}
                onSubmit={(expense) => {
                    this.props.dispatch(editExpense(this.props.expense.id, expense))
                    
                }} />
            <button onClick={this.removeExp()}>remove Expense</button>
            </div>
        )
    }
}


const mapStateToProps = (state,props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id===props.match.params.id
        }),
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense:(id,expense)=>dispatch(editExpense(id,expense)),
        startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditExpense)