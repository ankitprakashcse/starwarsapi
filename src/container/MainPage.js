import React, { Component } from 'react';
import App from './App';
import {Provider} from 'react-redux';
import store from './../store/store';



class MainPage extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

export default MainPage;