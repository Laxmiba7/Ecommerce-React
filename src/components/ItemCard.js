// import axios from 'axios'
import React from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { useState } from 'react';




const ItemCard = (props) => {
    const {name, price, stock, image, id} = props;
    const [incrementValue, setIncrementValue] = useState(0);
    // const [decrementValue, setDecrementValue] = useState(incrementValue)
    const increment = () => {
      setIncrementValue(incrementValue + 1);
    }
    const decrement = () => {
      const decrementValue = incrementValue <= 0 ? 0 : setIncrementValue(incrementValue-1);
      // return decrementValue
    }
  return (
      <div className='col-3'>
      <div className="card p-1 mt-2" >
                <img src= {`https://electronic-ecommerce.herokuapp.com/${image}`} className="card-img-top img-fluid" alt="..." style={{height:"200px"}}/>
                
                
        <div className="card-body">
        <div className="btn-group" role="group" aria-label="Basic outlined example" >
              <button type="button"className="btn btn-outline-primary" onClick={decrement}>
                -
              </button>
              <button type="button"className="btn btn-outline-primary">
                {incrementValue}
              </button>
              <button type="button"className="btn btn-outline-primary" onClick={increment}>
                +
              </button>
            </div>
                    <h5 className="card-title mt-2">{name}</h5>
                    <div className='d-flex justify-content-between'>
                        <p>{price}</p>
                        <p>Stocks Left: {stock}</p>
                    </div>
                    <p className="card-text">Released Date</p>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
      </div>
      </div>
    )
}

export default ItemCard