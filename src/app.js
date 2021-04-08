import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, NavLink, Route, Switch,Router } from 'react-router-dom'
import AddExpense from './components/AddExpense'
import EditExpense from './components/EditExpense'
import Dashboard from './components/Dashboard'
import Help from './components/Help'
import {Provider} from 'react-redux'
 import { startSetExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/getVisible'
import './styles/style.scss'
import store from './store/configureStore';
import {Header} from './components/Header'
import 'react-dates/lib/css/_datepicker.css'
import { firebase} from  './firebase/firebase'
import LoginPage from './components/LoginPage'
import './playground/promises'
import createHistory from 'history/createBrowserHistory'



export const history = createHistory();
// store.dispatch(addExpense({ description: 'rent',amount:6000,createdAt:100 }));
// store.dispatch(addExpense({ description: 'bill',amount:8000,createdAt:10 }));
store.dispatch(setTextFilter('bill'))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses)
//console.log(store.getState());
const noFound = () => 
    <div>
        <h1>No component Found</h1>
        <Link to="/">Go Home</Link>
    </div>

// export const Header = () => (
//     <div>
//         <h1>Header</h1>
//         <NavLink to="/" activeClassName="is-active">DashBoard</NavLink>
//         <NavLink to="/editExpense" activeClassName="is-active">Edit Expense</NavLink>
//         <NavLink to="/addExpense" activeClassName="is-active">Add Expense</NavLink>
//         <NavLink to="/help" activeClassName="is-active">Help</NavLink>
//     </div>
// )


const Routess = ()=> (
    <Router history={history}>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={LoginPage} exact={true}/>
                <Route path="/dashboard" component={Dashboard} exact={true}/>
                <Route path="/editExpense/:id" component={EditExpense}   />
                <Route path="/addExpense" component={AddExpense} />
                <Route path="/help" component={Help}/>
                <Route component={noFound} />
            </Switch>
        </div>
    </Router>
)
const jsx = (
    <Provider store={store}>
        <Routess/>
    </Provider>
)


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('User loggedIn')
        //history.push('/dashboard')
    }
    else {
       // console.log('log Out')
        history.push('/dashboard')
    }
})
ReactDOM.render(<p>Loading...</p>,document.getElementById('app'))
store.dispatch(startSetExpense()).then(() => {
    ReactDOM.render(jsx,document.getElementById('app'))
})
    



    



