import React, { Component } from 'react'
import Header from '../Header'
import './placeOrder.css'

const placingOrder ="https://nykaa-apis.onrender.com/placeOrder"
//http://localhost:9000/placeOrder

const url = "https://nykaa-apis.onrender.com/product-detail/"

export default class placeOrder extends Component {
  constructor(props) {
    super(props)
    let userData = JSON.parse(sessionStorage.getItem('userInfo'))
    this.state = {
      id: Math.floor(Math.random() *10000),
      product: this.props.match.params.orderName,
       name: userData ? userData.name : "",
      email: userData ? userData.email : '',
      cost: 0,
      phone: userData ? userData.phone : '',
      address: "my address",
      order: ""
    }
  }

  componentDidMount() {
    let product =(sessionStorage.getItem('productName'))
    console.log(product);
    fetch(`${url}${product}`, {
      method: "GET",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data[0].price);
      this.setState({order: data, cost: parseInt(data[0].price)})
    })
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  checkout=() => {
    let obj = this.state
    obj.order = sessionStorage.getItem("productName")
    fetch(placingOrder, {
      method: 'POST', 
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(this.props.history.push('/viewOrders'))
  }

  renderItem = (data) => {
    if (data) {
      return data.map((item) => {
        return (
            <div className="card mb-3" style={{maxWidth: 600, height: 180}} key={item.item_code}>
            <div className="row g-0" style={{height: '100%'}}>
              <div className="col-md-4" style={{height: '100%'}}>
                <img src={item.img} style={{width: 165, height: '100%'}} className="img-fluid rounded-start" alt={item.product_name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">{item.brand}</h4>
                  <h5 className="card-title">{item.product_name}</h5>
                  <p className="card-text">Size: {item.size}</p>
                  <p className="card-text">Price: {item.price}</p>
                </div>
              </div>
            </div>
          </div>
        )
      }) 
    }
  }

  render() {
    if (sessionStorage.getItem('access_token') == null) {
      return (
        <>
          <Header />

        </>
      )
    }
    return (
      <>
       <Header />


        <div className="container" style={{marginTop: 37}}>
          <div className='panel panel-primary'>
            
            <div className="panel-heading">
              <h4>Order for {this.state.product}</h4>
            </div>
            {this.renderItem(this.state.order)}

            <div className="panel-body">
              <input type="hidden" name="cost" value={this.state.cost} />
              <input type="hidden" name="id" value={this.state.id} />
              <input type="hidden" name="product" value={this.state.product} />

              <div className="row">
                <div className="form-group col-md-6">
                  <label for="fname" className='control-label'>FirstName</label>
                  <input type="text" className="form-control" id='fname' name='name' value={this.state.name} onChange={this.handleChange}/>
                </div>
                <div className="form-group col-md-6">
                  <label for="email" className='control-label'>Email</label>
                  <input type="text" className="form-control" id='email' name='email' value={this.state.email} onChange={this.handleChange}/>
                </div>
                <div className="form-group col-md-6">
                  <label for="phone" className='control-label'>Phone</label>
                  <input type="number" className="form-control" id='phone' name='phone' value={this.state.phone} onChange={this.handleChange}/>
                </div>
                <div className="form-group col-md-6">
                  <label for="address" className='control-label'>Address</label>
                  <input type="text" className="form-control" id='address' name='address' value={this.state.address} onChange={this.handleChange}/>
                </div>
              </div>
              
              <div className="row" style={{ marginTop: 15 }}>
                <div className="col-md-12">
                  <h2>Total Price is Rs. {this.state.cost}</h2>
                </div>
              </div>
              <button className="btn btn-primary" onClick={this.checkout} type="submit">PlaceOrder</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
