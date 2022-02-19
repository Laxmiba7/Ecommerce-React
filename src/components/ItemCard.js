import axios from 'axios'
import React from 'react'




const ItemCard = () => {
    
  return (
      <div className="card m-2  " style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Dell Latitude 3420</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
      </div>
    )
}

export default ItemCard