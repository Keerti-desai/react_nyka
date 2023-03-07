import React from 'react'
import './Footer.css'

const Footer=()=>{
    return(
        <div>
          {/* <!--Footer section--> */}
  <footer>
    {/* <!-- Footer --> */}
<footer className="text-center text-lg-start bg-light text-muted">
{/* <!-- Section: Social media --> */}
<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  {/* <!-- Left --> */}
  <div className="me-5 d-none d-lg-block spanclr">
    <span>Get connected with us on social networks:</span>
  </div>
  {/* <!-- Left -->

  <!-- Right --> */}
  <div>
    <a href="" className="me-4 text-reset">
      <i className="fab fa-facebook-f fapink"></i>
    </a>
    <a href="" className="me-4 text-reset">
      <i className="fab fa-twitter fablue"></i>
    </a>
    <a href="" className="me-4 text-reset">
      <i className="fab fa-google fapink"></i>
    </a>
    <a href="" className="me-4 text-reset">
      <i className="fab fa-instagram fablue"></i>
    </a>
    <a href="https://www.linkedin.com/in/keerti-desai-a8231b23a/" className="me-4 text-reset" target="_blank">
      <i className="fab fa-linkedin fapink"></i>
    </a>
    <a href="https://github.com/Keerti-desai" className="me-4 text-reset" target="_blank">
      <i className="fab fa-github fablue"></i>
    </a>
  </div>
  {/* <!-- Right --> */}
</section>
{/* <!-- Section: Social media -->

<!-- Section: Links  --> */}
<section className="Footer-bar background-color">
  <div className="container text-center text-md-start mt-5">
    {/* <!-- Grid row --> */}
    <div className="row mt-3">
      {/* <!-- Grid column --> */}
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 white-text">
        {/* <!-- Content --> */}
        <h6 className="text-uppercase fw-bold mb-4" >
          <i className="fas fa-gem me-3"></i>Nykaa Brands
        </h6>
        <p>
          The name Nykaa is derived from the Sanskrit word 'nayaka', which means heroine or the one in spotlight.
        </p>
      </div>
      {/* <!-- Grid column -->

      <!-- Grid column --> */}
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 white-text">
        {/* <!-- Links --> */}
        <h6 className="text-uppercase fw-bold mb-4">
          Products
        </h6>
        <p>
          <a href="#!" className="text-reset">EASY RETURNS</a>
        </p>
        <p>
          <a href="#!" className="text-reset">FREE SHIPPING</a>
        </p>
        <p>
          <a href="#!" className="text-reset">100% AUTHENTIC</a>
        </p>
        <p>
          <a href="#!" className="text-reset">1900+ BRANDS</a>
        </p>
      </div>
      {/* <!-- Grid column -->

      <!-- Grid column --> */}
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 white-text">
        {/* <!-- Links --> */}
        <h6 className="text-uppercase fw-bold mb-4 ">
          Useful links
        </h6>
        <p>
          <a href="#!" className="text-reset">Pricing</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Settings</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Orders</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Help</a>
        </p>
      </div>
      {/* <!-- Grid column -->

      <!-- Grid column --> */}
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 white-text">
        {/* <!-- Links --> */}
        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
        <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
        <p>
          <i className="fas fa-envelope me-3"></i>
          companysecretary@nykaa.com
        </p>
        <p><i className="fas fa-phone me-3"></i> + 91 9222201010
        </p>
        <p><i className="fas fa-print me-3"></i> + 91 9222201010
        </p>
      </div>
      {/* <!-- Grid column --> */}
    </div>
    {/* <!-- Grid row --> */}
  </div>
</section>
{/* <!-- Section: Links  -->

<!-- Copyright --> */}
<div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
  © 2022 Copyright:
  <a className="text-reset fw-bold" href="https://www.nykaa.com/">Nykaa E-Retail Pvt. Ltd. All Rights Reserved.

  </a>
</div>
{/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
      </footer>
{/* <!-- Final Footer --> */}
<div id="final-footer">
    <div className="footer-end">
      <ul className="end-footer">
      <li><a href="#">Terms & Conditions</a></li>
      <li><a href="#">Shipping Policy</a></li>
      <li><a href="#">Cancellation Policy</a></li>
      <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
    <p className="footertext">&copy;2022 Nykaa E-Retail Pvt. Ltd. All Rights Reserved.</p>
</div>
        </div>
    )
}
export default Footer

// class Footer extends Component{
//     render(){
//         return(
//             <div>
//                 <center>
//             <h3>Hi from Footer</h3>
//             <hr/>
//            </center>
//             </div>
//         )
//     }
    
// }




// const Footer=()=>{
//     return(
//         <div>
//             <center>
//             <h3>Hi from Footer</h3>
//             <hr/>
//            </center>
//                     </div>
//     )
// }