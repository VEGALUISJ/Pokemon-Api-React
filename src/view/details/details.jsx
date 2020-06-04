import React from 'react'; 
import Cross from '../../assets/cross.png'
import PropTypes from "prop-types";
import './Details.css';

const Details = props => {
    const [pokemonData, setPokemonData] = React.useState([]);

    React.useEffect(()=> {
        obtainPokemonData()
    }, []);

    const obtainPokemonData = async() => {
        const data = await fetch (`https://pokeapi.co/api/v2/pokemon/${props.match.params.tag}`);
        const array = await data.json();
        setPokemonData(array)
    }

    return (
        <div className="pokedex">
            <div className="pokedex_light pt-4 pb-4">
                <div className="pokedex_light-blue mr-4"></div>
                <div className="pokedex_light-red mr-3"></div>
                <div className="pokedex_light-yellow mr-3"></div>
                <div className="pokedex_light-green mr-3"></div>
            </div>
            <div className="pokedex_screen">
                <div className="pokedex_screen-inside">
                    <div className="pokedex_screen-inside-left">
                        <div className="pokedex_screen-inside-left-up">
                            <p>{pokemonData.name}</p>
                        </div>
                        <div className="pokedex_screen-inside-left-down">
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.match.params.tag}.png`} 
                                height="200" 
                                alt="pokemonImage"/>    
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.match.params.tag}.png`} 
                                height="200" 
                                alt="pokemonImage"/>    
                        </div>
                    </div>
                    <div className="pokedex_screen-inside-rigth pl-2">
                        <p className="btn btn-dark">Weight: {pokemonData.weight}</p>
                        <p className="btn btn-dark">Weight: {pokemonData.height}</p>
                    </div>
                </div>
            </div>
            <div className="pokedex_buttons mt-2">
                <div className="pokedex_buttons-left">
                    <div className="pokedex_buttons-left__blackButton"></div>
                </div>
                <div className="pokedex_buttons-center">
                    <div className="pokedex_buttons-center__select"></div>
                    <div className="pokedex_buttons-center__start"></div>
                </div>
                <div className="pokedex_buttons-rigth">
                    <img src={ Cross } alt="joystick"/>
                </div>
            </div>

        </div>
    )
}

Details.propTypes = {
    match: PropTypes.object
};

export default Details;