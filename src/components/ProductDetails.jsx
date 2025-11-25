import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from "../data/products"
import './product-detail.css'
import { MdAddShoppingCart } from "react-icons/md";
import { useCart } from '../context/CartContext';


function ProductDetails() {



  const { id } = useParams()
  const product = products.find((pro) => pro.id === parseInt(id))

  const { addToCart } = useCart()

  const [mainImg, setMainImg] = useState(product.images[0])
  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState("M");



  return (
    <div className="product-detail">

      <div className="product-images">
        <img src={mainImg} alt="not found" className='main-image' />
        <div className="images">
          {
            product.images.map((img, index) => {
              return (
                <img
                  key={index}
                  src={img}
                  className={mainImg === img ? 'active' : ''}
                  alt='not found'
                  onClick={() => setMainImg(img)}
                />
              )
            })
          }
        </div>
      </div>

      <div className='product-info'>

        <h2>{product.team}</h2>
        <div className="info description">
          <h4>About:</h4>
          <p>{product.description}</p>
        </div>
        <div className="info season">
          <h4>Season:</h4>
          <p>{product.season}</p>
        </div>
        <div className='info price'>
          <h4>Prix:</h4>
          <p>{product.price} DH</p>
        </div>


        <div className="info size">
          <h4>Size:</h4>
          <div className="options">
            {sizes.map(size => (
              <button
                key={size}
                className={selectedSize === size ? "active" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button className='add' onClick={() =>addToCart(product)}><MdAddShoppingCart size={25} /></button>
      </div>


    </div>
  )
}

export default ProductDetails