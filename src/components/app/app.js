import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import {SwapiServiceProvider} from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages'
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
            <ErrorBoundry>
                <SwapiServiceProvider value = {this.swapiService}>
                    <div className='app'>
                        <Header />
                        <RandomPlanet />

                        <PeoplePage/>
                        <PlanetsPage/>
                        <StarshipsPage/>    
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }

}



