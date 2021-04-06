import React from 'react'
import ConnectedExpenseList from './ExpenseList'
import ConnectedExpenseListFilters from './ExpenseListFilters'
import  ConnectedExpensifySummary  from './ExpensifySummary'
const Dashboard = () => (
    <div>
        <h1>Dashboard</h1>
        <ConnectedExpensifySummary/>
        <ConnectedExpenseListFilters/>
        <ConnectedExpenseList/>
    </div>
)
export default Dashboard
    