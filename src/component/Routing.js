import React from "react";
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Listing from './Home/Listing/listing';
import productDetail from "./Detail/productDetail";
 import placeOrder from "./Orders/placeOrder";
import viewOrders from "./Orders/viewOrders";
import Register from "./login/register";
import Login from "./login/login"

//  import DisplayOrder from "./Order/displayOrder";

const Routing=()=>{
    return(
<BrowserRouter>
{/* <Header/> */}
<Route exact path= "/" component={Home}/>
<Route path="/listing/:cart" component={Listing}/>
<Route path="/product/:productName" component={productDetail}/>
<Route path="/placeOrder/:orderName" component={placeOrder}/>
<Route path="/viewOrders" component={viewOrders}/>
<Route path="/login" component={Login}/>
<Route path="/register" component={Register}/>

{/* <Route path="/viewOrders" component={viewOrders}/> */}
 <Footer/>
</BrowserRouter>
    )
}

export default Routing


