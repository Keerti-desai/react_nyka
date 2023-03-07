import React, { Component } from 'react'
import axios from 'axios';
import './productDetail.css'
import Header from '../Header';

const url = "https://nykaa-apis.onrender.com/product-detail/"
// "http://localhost:9000/product-detail/"


export default class productDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prodData: "",
            dom_content: []
        }
    }

    componentDidMount() {
        let productName = this.props.match.params.productName
        console.log(productName);
        
        sessionStorage.setItem("productName", productName)
        axios.get(`${url}${productName}`)
        .then((res) => {
            console.log(res.data, productName);
            this.setState({prodData: res.data[0]})
            this.productRating(res.data[0].product_rating)
        })
              
    }

    

    buyNow = () => {
        sessionStorage.setItem("product", this.state.prodData.product_name)
        this.props.history.push(`/placeOrder/${this.state.prodData.product_name}`)
    }
    

  render() {
    return (
        <div>
            <Header/>
            <div id="container">
        <div id="imgdiv">
        <img src={this.state.prodData.img} alt={this.state.prodData.rating}/>
    </div>
    <div id="contentdiv">
    <h4 className="header">Nykaa</h4>
    <h4>Nykaa Special Products</h4>
    <h4>{this.state.prodData.product_name}</h4>
    <span>{this.state.prodData.ratings}</span>
    <i className={this.state.prodData.description}>
</i>
    <i class="fa-solid fa-star starclass"></i>
    <i class="fa-solid fa-star starclass"></i>
    <i class="fa-solid fa-star starclass"></i>
    <i class="fa-solid fa-star starclass"></i>
    <i class="fa-solid fa-star starclass"></i>
 <h4>{this.state.prodData.price}
        <i class="fa-solid fa-indian-rupee-sign rupee">
            </i>290</h4>
    <h4>New price:<i className="fa-solid fa-indian-rupee-sign rupee"></i>
    {this.state.prodData.price}</h4>
    <h4>Drama Long Stay Lipstick - Premier
        (4.2gm)</h4>
        <br />
           
            <button type="button" class="btn btn-warning buy_now" onClick={this.buyNow}>Buy Now <i class="fas fa-shopping-cart"></i></button>
            <br />            
        </div>
      </div>
   
        </div>
        
        

    )
 {console.log(this.state.dom_content)}
     {this.state.dom_content.map((item) => {
         return (
             item
         )
     })}

    

      
}  
}
   
