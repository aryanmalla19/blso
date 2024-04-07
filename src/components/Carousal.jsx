import React from 'react';
// Carousel.js or any component using Bootstrap JS
import '../App.css'
import Button from './Button';
class Carousel extends React.Component {

  render() {
    return (
      <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active c-item transition-opacity duration-1000 ease-in-out">
            <img src="https://i.pinimg.com/564x/03/62/a2/0362a2994affd201e42bf3d3b689eb72.jpg" className="d-block w-100 c-img" alt="Slide 1" />
            <div className="carousel-caption top-0 mt-4">
              <p className="mt-5 text-base lg:text-2xl text-uppercase">Everyone can help</p>
              <h1 className="display-1 text-2xl lg:text-4xl fw-bolder text-capitalize">BLSO Nepal</h1>
               <div className='my-10'>
                <Button/>
                </div> 
            </div>
          </div>
          <div className="carousel-item c-item transition-opacity duration-1000 ease-in-out">
            <img src="https://i.pinimg.com/564x/d0/c3/3c/d0c33c40b3711910b1e2ebeb0970a0fb.jpg" className="d-block w-100 c-img" alt="Slide 2" />
            <div className="carousel-caption top-0 mt-4">
              <p className="text-uppercase text-base lg:text-2xl mt-5">Transforming Little Lives, One Support at a Time</p>
              <p className="display-1 text-2xl lg:text-4xl fw-bolder text-capitalize">Give love Once</p>
              <div className='my-10'>
                <Button/>
                </div> 
            </div>
          </div>
          <div className="carousel-item c-item transition-opacity duration-1000 ease-in-out">
            <img src="https://i.pinimg.com/564x/35/82/b9/3582b9e4fa770269f044a110be7e609a.jpg" className="d-block w-100 c-img" alt="Slide 3" />
            <div className="carousel-caption top-0 mt-4">
              <p className="text-uppercase text-base lg:text-2xl mt-5">Join Better Life Social Organization and Transform Lives Together.</p>
              <p className="display-1 fw-bolder text-2xl text-capitalize">Be a Volunter</p>
              <a href="#volunteer">
              <button className="btn btn-primary px-4 py-2 fs-5 mt-5" >Join now</button>
              </a>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Carousel;
