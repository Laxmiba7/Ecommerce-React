import React, { useEffect } from 'react'
import ItemCard from './ItemCard'
import {AiTwotoneFilter} from 'react-icons/ai'
import axios from 'axios'
import { useState } from 'react'


const ItemCards = () => {
    const [data, setData] = useState([])
    const fetchData = async() => {
        const res = await axios.get('https://electronic-ecommerce.herokuapp.com/api/v1/product');
        setData(res.data.data?.product || [])
        
    }
   
     useEffect(()=> {fetchData()},[])
     console.log(data)
   
  return (
    <div className='p-5'>
        <div className='d-flex justify-content-between mb-3' >
            <h5>Products</h5>
            <button><AiTwotoneFilter/> &nbsp;Filter</button>
        </div>
        <div className='row'>
            
            {data.map((data) =>  <ItemCard key= {data.id} name= {data.name} price= {data.price} stock= {data.stock} image={data.image}/> )}
            
            
        </div>
    </div>
    
  )
}

export default ItemCards