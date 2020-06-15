import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page';

import SwapiService from '../../services/swapi-service';
import './app.css';



export default class App extends Component  {

    swapiService = new SwapiService();

    state = {
        hasError: false
    }

   

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator />
        }
        return (
            <div className='app'>
                <Header />
                <RandomPlanet />

                <PeoplePage />

               
                
            </div>
        )
    }

}



