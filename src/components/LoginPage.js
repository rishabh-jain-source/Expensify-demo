import React from 'react'
import {connect} from 'enzyme'
import {startLogin} from '../actions/auth'
export const LoginPage = ({startLogin}) => (
    <div>
        <button onClick={startLogin}>Login</button>
    </div>
)

// const mapStateToProps = (dispatch) => ({
//     startLogin:()=>dispatch(startLogin())
// })

// export default connect(mapStateToProps)(LoginPage);