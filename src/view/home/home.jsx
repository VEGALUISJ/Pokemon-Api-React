import React from 'react';
import PokemonImg from "../../assets/pokemon-img.png"
import './Home.css'
import Card from '../../components/card/card'

const Home = () => {
    const [pokemonName, setPokemonName] = React.useState([]);

    React.useEffect(()=> {
        //console.log('useEffect')
        obtainData()
    }, []);

    const obtainData = async() => {
        const data = await fetch ('https://pokeapi.co/api/v2/pokemon/');
        const names = await data.json();
        //console.log(names.results);
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
                    pokemonName.map(item => {
                        return (
                            <Card key={item.ind} name={item.name} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;