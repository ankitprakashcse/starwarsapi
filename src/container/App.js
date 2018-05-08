import React, { Component } from 'react';
import {Router, Route,Switch, Redirect} from "react-router-dom";
import Searchpage from './Searchpage/Searchpage';
import LoginPage from './LoginPage';
import { history } from './../utilityfiles';


class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div >
                    <Switch>
                    <Route exact path='/' component={LoginPage}/>
                    <Route path='/search' component={Searchpage} />
                    <Route path='/login' component={LoginPage}/>
                                      
                    </Switch>
                </div>
                
            </Router>
        );
    }
}

export default App;