// import logo from './logo.svg';

import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import Routes from './containers/Routes';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from './store/actions/auth'

import React, { Component } from 'react'

 class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignUp()
  }
  render() {
    return (
      <div>
        <Router>
      <Switch>
       <CustomLayout {...this.props} >
         <Routes />
       </CustomLayout >
       </Switch>
       </Router>
        
      </div>
    )
  }
}

// export default App


// function App() {
  
//   return (
    
//     <div >
//       <Router>
//       <Switch>
//       <CustomLayout {...this.props} >
//         <Routes />
//       </CustomLayout >
//       </Switch>
//       </Router>
      
      
//     </div>
    
//   );
// }

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
