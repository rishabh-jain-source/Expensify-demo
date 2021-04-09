// import React from 'react'
// import { connect } from 'react-redux'
// import { addExpense, startAddExpense } from '../actions/expenses'
// import ExpenseForm from './ExpenseForm'


// const AddExpense = (props) => (
//     <div>
//         <h1>AddExpense</h1>
//         <ExpenseForm onSubmit={(expense) => {
//             console.log('My expense'+ JSON.stringify(expense))
//              props.dispatch(addExpense(expense))
//              props.history.push('/dashboard ')
//             //console.log(expense);
//         } }/>
//     </div>
// )
// const mapDispatchToProps = (dispatch) => ({
//   startAddExpense:(expense)=> dispatch(startAddExpense(expense))   
// })
// export default connect()(AddExpense)
    
// // import React from "react";
// // import { connect } from 'react-redux';
// // import ExpenseForm from './ExpenseForm';
// // import { addExpense,startAddExpense } from '../actions/expenses';


// // export class AddExpense extends React.Component {

// // function myWorld(){}


// //     onSubmit = (expense) => {
// //         console.log("My expense Data"+ expense)
// //         this.addExpense(expense);
// //         this.props.history.push('/');
// //         this.myWorld()
// //     };
// //     render(){
// //         return (
// //             <div>
// //                 <h1>Add Expense</h1>
// //                 <ExpenseForm 
// //                     onSubmit = {this.onSubmit}
// //                 />
// //             </div>
// //         );
// //     }
// // }

// // const mapDispatchToProps = (dispatch) => ({
// //     startAddExpense: (expense) => dispatch(startAddExpense(expense))
// // });

// //export default connect(undefined, mapDispatchToProps)(AddExpense);

import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpense extends React.Component {
  onSubmit = (expense) => {
      
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
       
        <div className="content-container"><h1>Add Expense</h1>
          <div className="page-header__title">
          </div>
          </div>
          </div>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpense);