import React from 'react'

const api = () => {
    const [data, setData] = useState([])
    const fetchData = async() => {
        const res = await axios.get('https://electronic-ecommerce.herokuapp.com/api/v1/product');
        setData(res.data.data?.product || [])
        
    }
    
     useEffect(()=> {fetchData()},[])
  return (
    <div>api</div>
  )
}

export default api
