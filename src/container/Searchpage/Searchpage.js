import React, { Component } from 'react';
import './Searchpage.scss';
import Navbar from './../Navbar/Navbar';
import Typealong from './../Typealong/Typealong';
import Planet from './../Planet/Planet';


class Searchpage extends Component {
    render() {
        return (
            <div style={{"backgroundColor":"#F7F8F8"}}>
                <div>
                    <Navbar/>
                </div>
            <br/>
                <div className="container-fluid">
                <div className='row'>
                    <div className='col-md'>
                        <Typealong/>
                        
                    </div>
                    <div className='col-md'>
                        <Planet/>
                    </div>
                </div>   
                </div>
                <br/><br/><br/>
            </div>
        );
    }
}

export default Searchpage