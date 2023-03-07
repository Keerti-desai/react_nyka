import React, { Component } from 'react';
import './Carousel.css';
import Header from '../Header';

class Carousel extends Component {
  render() {
    return (
      <div>
       < Header/>
        <div id="image-containerk">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://images-static.nykaa.com/uploads/9769e0c3-5c17-4524-a882-8ea77594b33a.jpg?tr=w-1200,cm-pad_resize" alt="slider" className="d-block w-100" height="300px" width="100%" />
              </div>
              <div className="carousel-item">
                <img src="https://images-static.nykaa.com/uploads/cc78b00c-5021-4729-baf6-91989b3ef61d.jpg?tr=w-1200,cm-pad_resize" alt="slider" className="d-block w-100" height="300px" width="100%" />
              </div>
              <div className="carousel-item">
                <img src="https://images-static.nykaa.com/uploads/cd7320f2-2892-4e53-9e2d-eff506ceaa1d.jpg?tr=w-1200,cm-pad_resize" alt="bootimg" height="300px" width="100%" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* <!--Land image section-2--> */}
        <div className="image-container-2">
          {/* <!-- Carousel --> */}
          <div id="demo" className="carousel slide" data-bs-ride="carousel">
            {/* <!-- Indicators/dots --> */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>

            {/* <!-- The slideshow/carousel --> */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://images-static.nykaa.com/uploads/cb2dcd79-5428-471e-b755-7e3d42639eb3.jpg?tr=w-1200,cm-pad_resize" alt="Los Angeles" className="d-block" style={{ width: "100%", height: "250px" }} />
              </div>
              <div className="carousel-item">
                <img src="https://images-static.nykaa.com/uploads/d87e959f-6a10-4524-89e7-717b0513388d.jpg?tr=w-1200,cm-pad_resize" alt="Chicago" className="d-block" style={{ width: "100%", height: "250px" }} />
              </div>
              <div className="carousel-item">
                <img src="https://images-static.nykaa.com/uploads/66350e64-13d1-4347-8842-fc3638b99b38.jpg?tr=w-1200,cm-pad_resize" alt="New York" className="d-block" style={{ width: "100%", height: "250px" }} />
              </div>
            </div>

            {/* <!-- Left and right controls/icons --> */}
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>

    )
  }
}

export default Carousel