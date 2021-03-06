// import uuid from 'uuid';
// import { database } from '../firebase/firebase';
// // ADD_EXPENSE
// export const addExpense = (
//   {
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0
//   } = {}
// ) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
// });

//   export const startAddExpense = (expensedata={}) => {
//   return (dispatch)=> {
//     const {
//       description = '',
//       note = '',
//       amount = 0,
//       createdAt = 0
//     } = expensedata
//     const expense={description,note,amount,createdAt}
//     database.ref('expenses').push(expense).then((ref) => {
//       dispatch(addExpense({
//         id: ref.key,
//         ...expense
//       }))
//     })
//     } 
//   }
  
//   // REMOVE_EXPENSE
//   export const removeExpense = ({ id } = {}) => ({
//     type: 'REMOVE_EXPENSE',
//     id
//   });
  
//   // EDIT_EXPENSE
//   export const editExpense = (id, updates) => ({
//     type: 'EDIT_EXPENSE',
//     id,
//     updates
//   });


import uuid from 'uuid';
import {database} from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

//SET EXPENSE
export const setExpense = (expenses) => (
  {
    type: 'SET_EXPENSES',
    expenses
  }
)

export const startSetExpense=()=>{
  return (dispatch)=>{
    return database.ref('expenses').once('value').then((snapshot)=>{
        const expenses=[];
        snapshot.forEach((childSnapshot)=>{
          expenses.push({
            id:childSnapshot.key,
            ...childSnapshot.val()
            
          })
          
        })
      console.log(expenses)
      dispatch(setExpense(expenses));
    })
  }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({id}={}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({id}))
    })
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id,updates) => {
  return (dispatch)=>{
    return database.ref(`expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    })
  }
}




