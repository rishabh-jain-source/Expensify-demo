import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'
import { setTextFilter, sortByDate,sortByAmount } from '../actions/filters'

const ExpenseListFilters = (props) => (
    <div className="content-container">
        <div className="input-group">
            <div className="input-group__item">
                <input type="text"
                    className="text-input"
                    value={props.filters.text} onChange={
                    (e) => {
                    props.dispatch(setTextFilter(e.target.value))
                    console.log(e.target.value)
                    }
                }
                />
            </div>
            <div className="input-group__item">
                <select className="text-input" value={props.filters.sortBy} onChange={
                    (e) => {
                        if (e.target.value === 'date') {
                            props.dispatch(sortByDate())
                        }
                        else if (e.target.value === 'amount') {
                            props.dispatch(sortByAmount())
                        }
                    }
                }>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                 </select>
            </div>
        </div>   
    </div>
)
const mapPropsTostate = (state) => {
    return {
        filters: state.filters
    }
}
const ConnectedExpenseListFilters=connect(mapPropsTostate)(ExpenseListFilters)
export default ConnectedExpenseListFilters
