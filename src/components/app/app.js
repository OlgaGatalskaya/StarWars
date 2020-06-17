import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator/error-indicator';
import ItemDetails, {Record} from '../item-details/item-details';
import Row from '../row';
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

        const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService

        const personDetails = (
            <ItemDetails itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}>
                <Record field='gender' label='Gender'/>
                <Record field='eyeColor' label='Eye Color'/>
            </ItemDetails>
        );
        const starshipDetails = (
            <ItemDetails itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}>
                <Record field='model' label='Model'/>
                <Record field='crew' label='Crew'/>
                <Record field='costInCredits' label='Cost'/>
            </ItemDetails>
        )

        return (
            <div className='app'>
                <Header />
                <RandomPlanet />

                {/*<PeoplePage />*/}
                <Row
                    left={personDetails}
                    right={starshipDetails} />    
            </div>
        )
    }

}



