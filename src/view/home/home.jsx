import React from 'react';
import PokemonImg from "../../assets/pokemon-img.png"
import './Home.css'

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
                    <img className="my-auto" src={ PokemonImg } height="360" alt="Pokemon"/>
                </div>
            </div>
            <div class="DeckHolder">
                <p>Here is where cards will be</p>
            </div>
        </div>
    )
}

export default Home;