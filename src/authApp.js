// App.js
import React from 'react';
import ReactDOM from 'react-dom'
//import './App.css';

import { signInWithGoogle } from './firebase/firebase.utils';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='user-info'>
        {

          this.state.currentUser ?

            (<div>
              <div>
                <img src={this.state.currentUser.photoURL} />
              </div>
              <div>Name: {this.state.currentUser.displayName}</div>
              <div>Email: {this.state.currentUser.email}</div>

              <button onClick={() => auth.signOut()}>LOG OUT</button>
            </div>
            ) :

            <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>

        }
      </div >
    );
  }
}
ReactDOM.render(<App/>,document.getElementById('app'))

//export default App;
