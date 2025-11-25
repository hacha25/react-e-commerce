import React from 'react'
import { Link } from 'react-router-dom'
import "./product-card.css"
import { GoArrowRight } from "react-icons/go";


function ProductCard({id, team, price, images}) {
  return (
  
    <div className='col-md-3 col-sm-5 col-7 mb-4'>
        <div className="card h-100 shadow-sm">
            <img 
            src={images[0]} 
            alt={team}
            className='card-img-top'
            style={{height: '250px',objectFit: 'cover'}}
             /><h5 className='card-title'>{team}</h5>
             <div className="d-flex justify-content-between text-center m-3 align-items-center">
                
                
                <p className="card-text text-muted">{price} DH</p>
                <Link to={`/product/${id}`} className='btn btn-dark'>view details <GoArrowRight/></Link>
             </div>
        </div>

    </div>

  )
}

export default ProductCard