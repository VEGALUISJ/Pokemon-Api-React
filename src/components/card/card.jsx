import React from "react";
import './Card.css';
import Ejemplo from "../../assets/ejemplo.png"

const Card = () => {
    return (
        <div className='card-holder'>
            <div className="card ml-3 mr-3 mt-4 mb-4" style={{width: '18rem'}}>
                <img className="card-img-top mt-4" src={ Ejemplo } height="150" alt="FrontImagePokemon" />
                <div className="card-body">
                    <h5 className="card-title">Pokemon Name</h5>
                    <div className="button-holder">
                        <button type="button" class="btn btn-warning">
                            <img className="mr-1" src="https://img.icons8.com/material-outlined/24/000000/show-property.png" alt="details"/>
                            Details
                        </button>
                        <button type="button" class="btn btn-danger">
                            <img className="mr-1" src="https://img.icons8.com/material-outlined/24/000000/add-to-favorites.png" alt="favorite"/>
                            Favorites
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Card;