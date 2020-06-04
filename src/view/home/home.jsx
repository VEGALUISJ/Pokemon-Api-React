import React from 'react';
import PokemonImg from "../../assets/pokemon-img.png"
import './Home.css'
import Card from '../../components/card/card'

const Home = props => {
    const [pokemonName, setPokemonName] = React.useState([]);

    React.useEffect(()=> {
        obtainData()
    }, []);

    const obtainData = async() => {
        const data = await fetch ('https://pokeapi.co/api/v2/pokemon/');
        const names = await data.json();
        setPokemonName(names.results)
    }

    return (
        <div>
            <div className="landingContent">
                <div className="landingContent-text">
                    <h3>Explore Pokemon-World like never before, with this WebApp.</h3>
                    <p>With this Pokemon Api, you will be able to meet each detail of your favorite Pokemon.</p>
                    <button type="button" className="btn btn-primary">Gotta catch 'em all</button>
                </div>
                <div className="landingContent-img">
                    <img className="my-auto" src={ PokemonImg } height="400" alt="Pokemon"/>
                </div>
            </div>
            <div className="DeckHolder mt-4 mb-4 d-flex">
                {
                    pokemonName.map((item, ind) => {
                        let x = item.url;
                        let x1 = x.substr(34)
                        let x2 = parseInt(x1)
                        return (
                            <Card key={ind} name={item.name} tag={x2}/>
                        ) 
                    })
                }
            </div>
        </div>
    )
}

export default Home;