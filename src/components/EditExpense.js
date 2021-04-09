

import React  from 'react'
import { connect } from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import { startEditExpense ,startRemoveExpense} from '../actions/expenses'


class EditExpense extends React.Component{//= (props) => (
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
      };
    removeExp = () => {
        //onsole.log(this.props.expense.id)
        this.props.startRemoveExpense({ id: this.props.expense.id })
        this.props.history.push('/')
        
    }
    render() {
        return(
            <div className="content-container ">
            <div ><h1 >Edit Expense</h1></div>
            <ExpenseForm
                expense={this.props.expense}
                onSubmit={(expense) => {
                    this.props.dispatch(startEditExpense(this.props.expense.id, expense))
                    
                }} />
                    <button onClick={this.removeExp} className="button red-button ">Remove Expense</button>
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
        startEditExpense:(id,expense)=>dispatch(startEditExpense(id,expense)),
        startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
        dispatch
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditExpense)