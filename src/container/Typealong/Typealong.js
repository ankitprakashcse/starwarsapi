import React, { Component } from 'react';
import './Typealong.scss';
import {connect} from 'react-redux';
import * as _ from "lodash"; /* For debounce */
import PlanetSearch from './../PlanetSearch/PlanetSearch';
import * as actions from './../../action/searchPlanets';
import {bindActionCreators} from 'redux';
import Planet from './../Planet/Planet';


class Typealong extends React.Component {
    constructor(props){
        
        super(props);
        this.state={
            showSearch:true
        }
        this.renderSearch = this.renderSearch.bind(this);
        this.onChange=this.onChange.bind(this);
        this.selectPlanet=this.selectPlanet.bind(this);

        this.search_onChange = _.debounce(function (e) {
            this.props.actions.searchPlanets(e.target.value);
        }, 500);
    }

    selectPlanet(item){
        this.props.actions.selectPlanet(item);
        this.setState({ showSearch: false })
    }

    onChange(e){
        e.persist();
        this.search_onChange(e);
    }

    renderSearch(){
       
        if(this.state.showSearch){
           
            return(
                <div>
                <div className="input-group" >
                    <input className="form-control" onChange={this.onChange} placeholder="I can help you search planet you want!" />
                </div>
                <PlanetSearch selectPlanet={this.selectPlanet}/>
            </div>
            )
        }else{
                return(
                    <div>
                <div className="input-group" >
                    <input className="form-control" onChange={this.onChange} placeholder="I can help you search planet you want!" />
                </div>
                <PlanetSearch selectPlanet={this.selectPlanet}/>
            </div>
                )
            }

    }

    render() {
       
        return (
            <div>
                {this.renderSearch()}
               
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(null, mapDispatchToProps)(Typealong);