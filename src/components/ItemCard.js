// import axios from 'axios'
import React from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { useState } from 'react';





const ItemCard = (props) => {
    const {name, price, stock, image, id, value, date, onAdd} = props;
    const [disable, setDisable] = React.useState(false);
    const [incrementValue, setIncrementValue] = useState(0);
    const[idVal, setIdVal] = useState('');
    let dateObj = new Date(date);
    let month = dateObj.getMonth()+1 ;
    let year = dateObj.getFullYear();
    let day = dateObj.getDate();
    const finalDate = `${day}/${month}/${year}`
    
    const increment = () => {
      incrementValue >= stock ? setDisable(true) : setIncrementValue(incrementValue + 1);
     
    }
    const decrement = () => {
      const decrementValue = incrementValue <= 0 ? 0 : setIncrementValue(incrementValue-1);
      
    }
   
    
  return (
      <div className='col-3'>
      <div className="card p-1 mt-2" >
        <div style={{height:"500px"}}>
                <img src= {`https://electronic-ecommerce.herokuapp.com/${image}`} className="card-img-top img-fluid" alt="..." />
        </div>       
                
        <div className="card-body">
        <div className="btn-group" role="group" aria-label="Basic outlined example" >
              <button type="button"className="btn btn-outline-primary" onClick={decrement}>
                -
              </button>
              <button type="button"className="btn btn-outline-primary">
                {incrementValue}
              </button>
              <button type="button" disabled={disable} className="btn btn-outline-primary" onClick={increment} >
                +
              </button>
        </div>
                    <h5 className="card-title mt-2">{name}</h5>
                    <div className='d-flex justify-content-between'>
                        <p>{price}</p>
                        <p>Stocks Left: {stock}</p>
                    </div>
                    <p className="card-text">Released Date: {finalDate}</p>
                    <a href="#" className="btn btn-primary" data-index={id} onClick={onAdd}>Add to cart</a>
                </div>
      </div>
      </div>
    )
}

export default ItemCard