import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'

const sayhello=()=>{
    return (
        console.log('Hello')
    )
}
export const Header = ({startLogout}) => (
    <div>
        <h1>Header</h1>
        <NavLink to="/dashboard" activeClassName="is-active">DashBoard</NavLink>


        <NavLink to="/addExpense" activeClassName="is-active">Add Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        <button onClick={ startLogout}>Hello</button>
        
    </div>
)
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
  });
  
  export default connect(undefined, mapDispatchToProps)(Header);