import React from 'react';
import logo from '../../../asset/img/logo/logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from '../dashboard';
import Login from '../login';
import Register from '../register';
import {Provider} from 'react-redux';
import {store} from '../../../config/redux'

function App() {
  return (
    <Provider store={store}>

    <Router>
        <div>
            
        
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" component ={Login} />
            <Route path="/register" component={Register}/>
          
        
        </div>


      </Router>

    </Provider>
    
  );
}

export default App;
