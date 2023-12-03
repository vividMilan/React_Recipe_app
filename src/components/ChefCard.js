import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const ChefCard = ({chef}) => {
  return (
    <div className='chef-card'>
        <div className="chef-card-image">
            <img src={chef.image} alt="chef image" />
        </div>
        <div className="chef-card-info">
            <h3 className="chef-card-name">{chef.name}</h3>
            <p className="chef-recipe-count">Recipies : <b>{chef.recipiesCount}</b></p>
            <p className="chef-cuisine">Cuisine : <b>{chef.cuisine}</b></p>
            <p className="chef-icons">
                <FontAwesomeIcon id='facebook' icon={faFacebook} />
                <FontAwesomeIcon id='twitter' icon={faTwitter} />
                <FontAwesomeIcon id='instagram' icon={faInstagram} />
            </p>
        </div>
    </div>
  )
}

export default ChefCard