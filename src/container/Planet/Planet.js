import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from '../../star_wars.svg';

class Planet extends React.Component {
    render() {
        const planet = this.props.planet;
         if (!planet) {
            return null;
        }
        return (
            <div>
                <div className="card text-center">
                    <div className="card-header">
                       <h3 className="font-italic"> Check out planet <span style={{color:'#359C09'}}>{planet.name}</span> details ... </h3>
                    </div>
                    <img className="card-img-top" src={logo} alt="Card image cap" width="50" height="80"/>
                    <div className="card-body">
                    <table className="table table-hover table-light ">
                    <tbody>
                    <tr>
                        <td>Population</td>
                        <td>{planet.population}</td>
                    </tr>
                    <tr>
                        <td>Diameter</td>
                        <td>{planet.diameter}</td>
                    </tr>
                    <tr>
                        <td>Climate</td>
                        <td>{planet.climate}</td>
                    </tr>
                    
                    <tr>
                        <td>Gravity</td>
                        <td>{planet.gravity}</td>
                    </tr>
                    <tr>
                        <td>Rotation Period</td>
                        <td>{planet.rotation_period}</td>
                    </tr>
                    <tr>
                        <td>Surface Water</td>
                        <td>{planet.surface_water}</td>
                    </tr>
                    <tr>
                    <td>Terrain</td>
                        <td>{planet.terrain}</td>
                    </tr>
                    </tbody>
                    </table>   
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {planet: state.planetsReducer.selectPlanet}
}
export default connect(mapStateToProps, null)(Planet);