import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

const composeEnhancer=window.__REDUX_DEVTIOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  }),
  composeEnhancer(applyMiddleware(thunk))
);
export default store