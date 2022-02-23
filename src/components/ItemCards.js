import React, { useEffect } from 'react'
import ItemCard from './ItemCard'
import {AiTwotoneFilter} from 'react-icons/ai'
import axios from 'axios'
import { useState } from 'react'
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";



const ItemCards = (props) => {
  const {cartValues, setCartValues, cartItems, setCartItems, incrementValue, total, setTotal} =props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
 
  const value = (incrementValue,price) => {
    let priceVal = price.split('').slice(1).join('')* 120
     setTotal(total + incrementValue*priceVal)
     setCartValues([...cartValues,incrementValue]);
}
    const [data, setData] = useState([])
    const fetchData = async() => {
        const res = await axios.get('https://electronic-ecommerce.herokuapp.com/api/v1/product');
        setData(res.data.data?.product || [])
        
    }
   
     useEffect(()=> {fetchData()},[])
     
     
    const onAdd = (id) => {
      
       const cartData = data.find(x => x.id === id); 
        if(cartData) {
          setCartItems([...cartItems,{...cartData}])
       }
      
} 
 
    
  return (
    <div className='p-5'>
        <div className='d-flex justify-content-between me-5 ms-5' >
            <h5>Products</h5>
            <Button variant="primary" onClick={handleShow}>
            <AiTwotoneFilter /> Filter
           </Button>

          <Offcanvas show={show} onHide={handleClose} className="me-3 ">
            <Offcanvas.Header closeButton className="bg-primary text-white">
              <Offcanvas.Title>Filter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="Form">
                <form>
                  <div>
                    <label for="Price">Price</label> <br />
                    <div className="row">
                      <div className="col-6">
                        <input
                          type="number"
                          className="form-control"
                          id="Price"
                          aria-describedby="Price"
                          placeholder="Min"
                        />
                      </div>

                      <div className="col-6">
                        <input
                          type="number"
                          className="form-control"
                          id="Price"
                          aria-describedby="Price"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                  <br />

                  <div className="mb-3">
                    <label for="exampleInputDate1" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="exampleInputDate1"
                      aria-describedby="Date"
                      placeholder="dd/mm/yyy"
                    />
                  </div>

                  <br />

                  <div className="mb-3">
                    <label for="category" className="form-label">
                      Category
                    </label>
                    <select id="category" className="form-select">
                      <option>Select Options</option>
                    </select>
                  </div>
                </form>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
            
        </div>
        
        
        <div className='row p-5'>
            
            {data.map((data) =>  <ItemCard  key= {data.id} value={incrementValue} onAdd={() => onAdd(data.id)} value={value} date = {data.createDate} id={data.id} name= {data.name} price= {data.price} stock= {data.stock} image={data.image}/> )}
            
            
        </div>
    </div>
    
  )
}

export default ItemCards