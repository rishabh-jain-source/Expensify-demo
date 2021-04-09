import React from 'react'
import { NavLink ,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'

const sayhello=()=>{
    return (
        console.log('Hello')
    )
}
export const Header = ({startLogout}) => (
    <div className='header'>
        
        <div className='content-container'>
            <div className="header__content">
        
                <Link to="/dashboard" ><h1 className='header__title'>Expensify</h1></Link>
                <button onClick={startLogout} className=" button--link">Logout</button>
            </div>
        </div>
        
        
    </div>
)
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
  });
  
  export default connect(undefined, mapDispatchToProps)(Header);