import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import * as actions from './../../action/searchPlanets';

//const msg = document.getElementById('msg')

class PlanetSearch extends Component {
    constructor(props){
        super(props);
        this.renderPlanets = this.renderPlanets.bind(this);
    }

    renderPlanets(){
        //console.log("value of msg is ",msg)
        let planets= this.props.planets;
        if (this.props.isFetching){
            return <p>Loading...</p>
        }else if(!planets){
            return null
        }else{
            return(
               <div>
                    <ul className="list-group">{planets.map( (item,id) => {
                     return (<li key={id} className="list-group-item"><a className="list-group-item list-group-item-action active" onClick={() => this.props.selectPlanet(item)}>{item.name}</a></li>)
                    })}</ul>                    
                </div>
            )
        }
    }
    render() {
      
        return (
            <div>
                {this.renderPlanets()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {planets: state.planetsReducer.planets, isFetching: state.planetsReducer.isFetching}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlanetSearch);