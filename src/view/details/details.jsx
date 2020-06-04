import React from 'react'; 
import Cross from '../../assets/cross.png'
import './Details.css';

const Details = () => {
    return (
        <div className="pokedex">
            <div className="pokedex_light pt-4 pb-4">
                <div className="pokedex_light-blue mr-4"></div>
                <div className="pokedex_light-red mr-3"></div>
                <div className="pokedex_light-yellow mr-3"></div>
                <div className="pokedex_light-green mr-3"></div>
            </div>
            <div className="pokedex_screen">
                <div className="pokedex_screen-inside"></div>
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

export default Details;