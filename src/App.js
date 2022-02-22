import "./App.css";
import Header from "./components/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ItemCards from "./components/ItemCards";
import Cart from './components/Cart'
import { useState, useEffect } from "react";
import axios from 'axios'
import { CgArrowTopLeftO } from "react-icons/cg";
function App() {
	const [cartValues, setCartValues] = useState([]);
	const [cartItems, setCartItems] = useState([]);
//	const [apiData, setApiData] = useState([]);
//	const [appId, setAppId] = useState(0)
   // console.log(apiData)

   // console.log(cartItems);
   
  
	
	return (
		<div>
		  <Header  cartItems = {cartItems} cartValues={cartValues}/>
		  <ItemCards cartItems = {cartItems} setCartItems= {setCartItems}  cartValues= {cartValues} setCartValues={setCartValues} />
		 
		 
		</div>
		
	);
}

export default App;
