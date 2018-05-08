import React, { Component } from 'react';
import  './LoginForm.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { login,logout } from './../../action/userActionCreator';

import logo from '../../star_wars.svg';

class LoginForm extends Component {
    constructor(props){
        super(props);
        /*reset login status*/
        this.props.dispatch(logout());
        this.state={
            username:'',
            password:'',
            submitted:false
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({
            submitted:true
        })
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(login(username, password));
        }

       
    }


    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div >
                <form className="form-signin" onSubmit={this.onSubmit}>
                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                    <img className="mb-4" src={logo} alt="" width="300" height="130"/>
                    <h3 className="h3 mb-3 font-italic" style={{"textAlign":"center"}}>Login In</h3>
                                   
                    <label forhtml="inputText" className="sr-only">UserName</label>
                    
                    <input type="text" id="inputEmail" className="form-control" placeholder="User Name" autoFocus name='username' value={username} onChange={this.onChange}/>
                    {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    
                    
                    <br/>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                    <label forhtml="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password"  name='password' value={password} onChange={this.onChange}/>
                     {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <br/>
                    <div className="form-group">
                    <button className="btn btn-lg btn-success btn-block" type="submit">Login</button>
                    {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    <p className="mt-5 mb-3 text-muted" style={{"textAlign":"center"}}>Xebia & swapi.com &copy; 2018-2019</p>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { loggingIn } = state.authentication;
return {loggingIn};
}

export default connect(mapStateToProps)(LoginForm)