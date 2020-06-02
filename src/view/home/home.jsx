import React from 'react';
import PokemonImg from "../../assets/pokemon-img.png"
import './Home.css'
import Card from '../../components/card/card'

const Home = () => {
    return (
        <div>
            <div class="landingContent">
                <div className="landingContent-text">
                    <h3>Explore Pokemon-World like never before, with this WebApp.</h3>
                    <p>With this Pokemon Api, you will be able to meet each detail of your favorite Pokemon.</p>
                    <button type="button" class="btn btn-primary">Gotta catch 'em all</button>
                </div>
                <div className="landingContent-img">
                    <img className="my-auto" src={ PokemonImg } height="400" alt="Pokemon"/>
                </div>
            </div>
            <div class="DeckHolder mt-4 mb-4 d-flex">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Home;