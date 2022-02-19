import React from 'react'
import ItemCard from './ItemCard'
import {AiTwotoneFilter} from 'react-icons/ai'
import axios from 'axios'


const ItemCards = () => {
    // const [todo, setTodo] = useState([]);
    const fetchData = async() => {
        const res = await axios.get('https://electronic-ecommerce.herokuapp.com/api/v1/product');
        console.log(res)
    }
   
  return (
    <div className='p-5'>
        <div className='d-flex justify-content-between mb-3' >
            <h5>Products</h5>
            <button><AiTwotoneFilter/> &nbsp;Filter</button>
        </div>
        <div className='d-flex'>
            <ItemCard />
            
        </div>
    </div>
    
  )
}

export default ItemCards