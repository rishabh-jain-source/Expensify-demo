import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeExpense } from '../actions/expenses'
import EditExpense from './EditExpense'
import { Route } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

export const ExpenseListItem = ({ id,dispatch,description, amount, createdAt }) => (
    <div className="content-container">
        <div>
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <Link to={`editExpense/${id}`}>{description}</Link>

        
        <p>{numeral(amount).format('$0,00.00')}
        {console.log(new Date(parseInt(createdAt)))}</p>
            <p>{moment(new Date(parseInt(createdAt))).format('Do MM YYYY')}
        </p>
    </div>
)

const ConnectedExpenseListItem=connect()(ExpenseListItem)
export default ConnectedExpenseListItem
    
