import React from 'react'
import ConnectedExpenseList from './ExpenseList'
import ConnectedExpenseListFilters from './ExpenseListFilters'
import ConnectedExpensifySummary from './ExpensifySummary'


const Dashboard = () => (
    <div>
        <ConnectedExpensifySummary/>
        <ConnectedExpenseListFilters/>
        <ConnectedExpenseList />
    </div>
)
export default Dashboard
    