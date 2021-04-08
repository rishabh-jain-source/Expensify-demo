import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  }),
  composeEnhacers(applyMiddleware(thunk))
);
export default store