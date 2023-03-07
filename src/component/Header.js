import React ,{Component}from 'react';
import './Header.css';
import { Link} from 'react-router-dom';
// import axios from 'axios';

const categoryUrl="https://nykaa-apis.onrender.com/cart";
//"http://localhost:9000/cart"
const url = "https://login-auth-f3v6.onrender.com/api/auth/userinfo";

class Header extends Component{
  constructor(props){
   super(props)
 
   this.state={
    Navbar:[]
   }
 }
 //lifecycle method,all apis on page load(constructor-render-componentDidMount=call)
 componentDidMount() {
   fetch(`${categoryUrl}`, {method: 'GET'})
   .then((res) => res.json())
   .then((data) => {
       console.log(data);
       this.setState({Navbar: data})
   })
   // this.checkLocation()
 }
 navLinks() {
   if (this.state.Navbar) {
       return this.state.Navbar.map((item) => {
           return (
               <li className="nav-item">
                   <Link to={`/listing/${item.category}`} key={item.id} style={{textDecoration: 'none'}}>{item.category}</Link>
                   {/* <a className="nav-link active" aria-current="page" target="_blank" href="./pages/mens.html" id="a_tag">MEN</a> */}
               </li>
           )
       })
 
       
   }
   
 }
 
  
  
   render(){
     
      const detail=this.state.Navbar
   return (
     <div>
       <header>
     <div id="main-header">
           <div id="navbar">
             <nav>
               <ul>
                 <li>
               < a  className='Getapp'href="#">Get app |</a>
                 </li>
                 <li>
                   <a className='Getapp'   href="#">Store & Event |</a>
                 </li>
                 <li>
                   <a className='Getapp'   href="#">Gift Card |</a>
                 </li>
                 <li>
                   <a className='Getapp'href="#">Help |</a>
                 </li>
               </ul>
             </nav> 
           </div> 
           <div className="main">
             <div className="Logo">
               <img
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoFK_ddoOSSAYUp9M0ZnoPr-fpUg68HcMXy2pAhtJ&s"
                 alt="logoimg"
               />
             </div>
           </div>
           <div className="navbox">
              <nav>
               <ul>
                 <li>
                   <a href="#" className="list-1 list-2">
                     Categories
                   </a>
                 </li>
                 <li>
                   <a href="#" className="list-1 list-2">
                     Brands
                   </a>
                 </li>
                 <li>
                   <a href="#" className="list-1 list-2">
                     Luxe
                   </a>
                 </li>
                 <li>
                   <a href="#" className="list-1 list-2">
                     Nykaa Fashion
                   </a>
                 </li>
                 <li>
                   <a href="#" className="list-1 list-2" >
                     Beauty Advice
                   </a>
                 </li>
               </ul>
             </nav> 
           </div>
           <div className="search-box ">
             <div className="search-nyka">
               <select className="dropdown">
                  <option>--Search on Nykaa--</option>
                 <option >Nykaa Cosmetics</option>
                 <option>Liquid Lipstick</option>
                 <option>Face Masks</option>
                 <option>Hand sanitizers</option>
                 <option>Lipstick</option>
               </select> 
             </div>
             <div className="sign-in">
               <div className="button-1">
                <Link className="button" to="/login">
                 <button className='button-span'>Sign in</button>
                </Link>
    
                 <Link to="/viewOrders">
                   <i className="fa-solid fa-bag-shopping fa-2x"></i>
                 </Link>
               </div>
             </div>
           </div>
         </div>
       </header>
       {/* <!--3rd navimg section--> */}
       <div className="iconbar-k">
         <ul className="list">
        {this.navLinks()}
             
         </ul>
       </div>
     </div>
     )
     
   }
 }
 
 
 
 
 export default Header