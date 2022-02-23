import "./App.css";
import Header from "./components/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ItemCards from "./components/ItemCards";
import { useState} from "react";

function App() {
	const [cartValues, setCartValues] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [total, setTotal] = useState(0);
	

   
  
	
	return (
		<div>
		  <Header  cartItems = {cartItems} setCartItems= {setCartItems} cartValues={cartValues} total={total}/>
		  <ItemCards cartItems = {cartItems} setCartItems= {setCartItems}  cartValues= {cartValues} setCartValues={setCartValues} total={total} setTotal={setTotal} />
		 
		 
		</div>
		
	);
}

export default App;
