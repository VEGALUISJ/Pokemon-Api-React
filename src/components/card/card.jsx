import React from "react";
import './Card.css';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = props => {

    return (
        <div className='card-holder'>
            <div className="card ml-3 mr-3 mt-4 mb-4" style={{width: '18rem'}}>
                <img className="card-img-top mt-4" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.tag}.png`} height="200" alt="FrontImagePokemon" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <div className="button-holder">
                        <Link to={"/details/" + props.tag}>
                        <button type="button" className="btn btn-warning">
                            <img className="mr-1" src="https://img.icons8.com/material-outlined/24/000000/show-property.png" alt="details"/>
                            Details
                        </button>
                        </Link>
                        <button type="button" className="btn btn-danger">
                            <img className="mr-1" src="https://img.icons8.com/material-outlined/24/000000/add-to-favorites.png" alt="favorite"/>
                            Favorites
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
} 

Card.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.number
};

export default Card;