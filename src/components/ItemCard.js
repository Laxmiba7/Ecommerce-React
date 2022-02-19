// import axios from 'axios'
import React from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'




const ItemCard = (props) => {
    const {name, price, stock, image} = props;
    
  return (
      <div className='col-3'>
      <div className="card p-1 mt-2" >
                <img src= {`https://electronic-ecommerce.herokuapp.com/${image}`} className="card-img-top img-fluid" alt="..." />
                <div className='add-minus-quantity d-flex justify-content-end'>
                  <AiOutlineMinus />
                  <input type="text"></input>
                  <AiOutlinePlus />
                </div>
                
        <div className="card-body">
                    <h5 className="card-title">{name}</h5>
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