import React from 'react'
import { Link } from 'react-router-dom'
import './listing.css'

const ListingDisplay = (props) => {

    const renderData = ({dataList}) => {
        if (dataList) {
            if (dataList.length > 0) {
                return dataList.map((item) => {
                    return   (
       
       <Link to={'/product/' + item.product_name} key={item._id}>

            <div class="tile-container">
           <div class="imgtag1">
            < img src={item.img} alt={item.rating}/>
           </div>
           <div class="imgtag2">
            <p className='nyka-p'>{item.brand}</p><p className='nyka-p'alt={item.description}/>
            <p className='nyka-p'>{item.price}</p>
           
            <div class="heading1">
                {/* <p>Nykaa Matte To Last !</p> */}
                <h6 className='nyka-p'>{item.product_name}</h6>
                {/* <p>rating:★★★★✩</p> */}
               <span className='nyka-p'>{item.rating}</span>
       {/* <button class="pink">Preview Shades</button> */}
            </div>
        </div>
        </div>
        </Link>
    )
                })
            } else {
                return (
                    <h2>No data found as per filter</h2>
                )
            }
        } else {
            return (
                <h3>Loading Data.....</h3>
            )
        }
    }

    

  return (
    // <!-- Land image section -->
    <div id="image-container">
        <div class="headlines">
            <h3>All Products(539)</h3>
        </div>
        <div class="wishlist-container">
            <div id="filter-g">
                <h5 id="head">Sort By : popularity</h5>
                <div class="filter">
                    <h5 class="brown">Filters</h5>
                    <p class="green">Select Location</p>
                <select name="select" id="select" class="selectlocation">
                    <option value="none">Select Location</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Mysore">Mysore</option>
                </select>
                <h6 class="brown">Category</h6>
                <input type="checkbox" name="cuisine" id="north" value="north india"/>
                        <label class="food-india" for="north india">Make-up</label> <br/>
                        <input type="checkbox" name="cuisine" id="south" value="south india"/>
                        <label class="food-india" for="blue">Skin</label><br/>
                        <input type="checkbox" name="cuisine" id="chinese" value="chinese"/> 
                        <label class="food-india" for="green">Bath</label><br/>
                        <input type="checkbox" name="cuisine" id="fasrfood" value="Fast Food"/> 
                        <label class="food-india" for="green">Body</label><br/>
                        <input type="checkbox" name="cuisine" id="streetfood" value="Street Food"/> 
                        <label class="food-india" for="green">Facial</label><br/>
                        <h5 class="brown">Cost For Two</h5>
                        <input type="radio" name="cost" id="less500" value="Less than `500"/>
                        <label class="food-india" for="Less than `500">Less than `500</label> <br/>
                        <input type="radio" name="cost" id="less1000" value="`500 to `1000"/>
                        <label class="food-india" for="`500 to `1000">`500 to `1000</label> <br/>
                        <input type="radio" name="cost" id="less1500" value="`1000 to `1500"/>
                        <label class="food-india" for="`1000 to `1500">`1000 to `1500</label> <br/>
                        <input type="radio" name="cost" id="less2000" value="`1500 to `2000"/>
                        <label class="food-india" for="`1500 to `2000">`1500 to `2000</label> <br/>
                        <input type="radio" name="cost" id="above2000" value="`2000+"/>
                        <label class="food-india" for="`2000+">`2000+</label>
                        <h5 class="brown">Sort</h5>
                        <input type="radio" name="sort" id="lowto" value="Price low to high"/>
                        <label class="food-india" for="Price low to high">Price low to high</label> <br/>
                        <input type="radio" name="sort" id="hightp" value="Price high to low"/>
                        <label class="food-india" for="Price high to low">Price high to low</label> <br/>
                    </div>
            </div>
            </div>
        <div id="content">
        <div id="img-div">
        {renderData(props)}
       </div>
    </div>

       
    </div>
  )
}



export default ListingDisplay