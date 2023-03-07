import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ListingDisplay from './listingDisplay'
import Header from '../../Header';

const url = "https://nykaa-apis.onrender.com/productlist?categoryid="
//http://localhost:9000/productlist?categoryid=
// const Listing  =()=>{
//   return(

//   )
// }
//   render() {
//     return (
//       // <ListingDisplay dataList={this.state.listDetail}/>
      
//     )
//   }
const Listing = ({ match }) => {
  const [listDetail, setListDetail] = useState([]);

  useEffect(() => {
    let categoryId = match.params.cart;
    if (categoryId === "Decoration & Lighting") {
        categoryId = "Decoration-Lighting"
    }
    sessionStorage.setItem('categoryid', categoryId);
    axios.get(`${url}${categoryId}`).then((res) => {
      console.log(res.data, categoryId);
      setListDetail(res.data);
    });
  }, [match.params.cart]);

  console.log(listDetail);
  return(
    <>
    <Header/>
    <ListingDisplay dataList={listDetail} />

    </>
  ) 
};

export default Listing;




