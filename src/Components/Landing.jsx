import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Featured from './Featured'
import main_banner from '../assets/main-banner.jpg'
import main_banner1 from '../assets/main-banner-1.jpg'
import small_banner1 from '../assets/catbanner-01.jpg'
import small_banner2 from '../assets/catbanner-02.jpg'
import small_banner3 from '../assets/catbanner-03.jpg'
import small_banner4 from '../assets/catbanner-04.jpg'
import service1 from '../assets/service.png'
import service2 from '../assets/service-02.png'
import service3 from '../assets/service-03.png'
import service4 from '../assets/service-04.png'
import service5 from '../assets/service-05.png'
import computers from '../assets/laptop.jpg'
import camera from '../assets/camera.jpg'
import television from '../assets/tv.jpg'


import tablet from '../assets/tab1.jpg'
import headphones from '../assets/headphone.jpg'
import accessories from '../assets/acc.jpg'
import speakers from '../assets/speaker.jpg'
import homeappliance from '../assets/homeapp.jpg'
import Featuredbig from './Featuredbig'
import SpecialProducts from './SpecialProducts'
import Popularproducts from './Popularproducts'
import Brands from './Brands'
import News from './News'


function Landing() {
  return (
    <>
      <section className="home-wrapper py-5 mt-3">
        <div className="container-fluid container-lg">
          <div className="row">
            <div className="col-12 col-lg-6">
              <Slider autoplay={true} autoplaySpeed={3000} slidesToScroll={1} slidesToShow={1} infinite={true} speed={500}>
                <div className="main-banner-content px-1 position-relative">
                  <img src={main_banner} alt="Main banner" className='img-fluid rounded-3'/>
                  <div className="main-banner-content p-5 position-absolute top-0 start-0">
                    <h4 className='h6 mb-4 text-danger'>SUPERCHARGED FOR PROS</h4>
                    <h5 className='h2 mb-2 fw-bold'>iPad S13+ Pro.</h5>
                    <p className='mb-5 fs-6 fs_6 fw-bold'>From $999 or $118 per month<br /> for 9 months</p>
                    <Link className='text-bold py-2 px-3 rounded-4'>BUY NOW</Link>
                  </div>
                </div>

                <div className="main-banner-content px-1 position-relative">
                  <img src={main_banner1} alt="Main banner" className='img-fluid rounded-3'/>
                  <div className="main-banner-content p-5 position-absolute top-0 start-0">
                    <h4 className='h6 mb-4 text-danger'>SUPERCHARGED FOR PROS</h4>
                    <h5 className='h2 mb-2 fw-bold'>iPad S13+ Pro.</h5>
                    <p className='mb-5 fs-6 fs_6 fw-bold'>From $999 or $118 per month<br /> for 9 months</p>
                    <Link className='text-bold py-2 px-3 rounded-4'>BUY NOW</Link>
                  </div>
                </div>
              </Slider>
            </div>

            <div className="col-12 col-lg-6">
              <div className="d-flex flex-wrap gap-1 justify-content-between align-items-center">
                <div className="side-banner p-0 mb-1 position-relative">
                  <img src={small_banner1} alt="Main banner" className='img-fluid rounded-3'/>
                  <div className="side-banner-content p-3 position-absolute top-0 start-0">
                    <h4 className='h6 mb-2 text-danger'>BEST SELL</h4>
                    <h5 className='h4 mb-2 fw-bold'>Laptops Max</h5>
                    <p className='mb-5 fs-6 fs_6 fw-bold'>From $1699 or<br />$200/mo</p>
                  </div>
                </div>

                <div className="side-banner p-0 mb-1 position-relative">
                  <img src={small_banner3} alt="Main banner" className='img-fluid rounded-3'/>
                  <div className="side-banner-content p-3 position-absolute top-0 start-0">
                    <h4 className='h6 mb-2 text-danger'>NEW ARRIVAL</h4>
                    <h5 className='h4 mb-2 fw-bold'>Buy iPad Air</h5>
                    <p className='mb-5 fs-6 fs_6 fw-bold'>From $599 or <br />$50/mo for 12 mo. *</p>
                  </div>
                </div>

                <div className="side-banner p-0 position-relative">
                  <img src={small_banner2} alt="Main banner" className='img-fluid rounded-3'/>
                  <div className="side-banner-content p-3 position-absolute top-0 start-0">
                    <h4 className='h6 mb-2 text-danger'>15% OFF</h4>
                    <h5 className='h4 mb-2 fw-bold'>Smartwatch 7</h5>
                    <p className='mb-5 fs-6 fs_6 fw-bold'>Shop the latest band<br />styles and colors</p>
                  </div>
                </div>

                <div className="side-banner p-0 position-relative">
                  <img src={small_banner4} alt="Main banner" className='img-fluid rounded-3'/>
                  <div className="side-banner-content p-3 position-absolute top-0 start-0">
                    <h4 className='h6 mb-2 text-danger'>FREE ENGRAVING</h4>
                    <h5 className='h4 mb-2 fw-bold'>Airpods Max</h5>
                    <p className='mb-5 fs-6 fs_6 fw-bold'>High-fidelity playback &<br />ultra-low distortion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5 mt-3">
        <div className="container-fluid container-lg">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img src={service1} alt="" className='me-4 img-fluid' />
                  <div className="">
                    <h6 className='fw-bold'>Free Shipping</h6>
                    <small className='text-secondary'>From all orders over $100</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img src={service2} alt="" className='me-4 img-fluid' />
                  <div className="">
                    <h6 className='fw-bold'>Daily Surprise Offers</h6>
                    <small className='text-secondary'>Save up to 25% off</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img src={service3} alt="" className='me-4 img-fluid' />
                  <div className="">
                    <h6 className='fw-bold'>Support 24/7</h6>
                    <small className='text-secondary'>Shop with an expert</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img src={service4} alt="" className='me-4 img-fluid' />
                  <div className="">
                    <h6 className='fw-bold'>Affordable Prices</h6>
                    <small className='text-secondary'>Get factory direct price</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img src={service5} alt="" className='me-4 img-fluid' />
                  <div className="">
                    <h6 className='fw-bold'>Secured Payments</h6>
                    <small className='text-secondary'>100% Protected Payments</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="categories container-fluid container-lg mt-5 rounded-3 mb-5">
          <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between">
            <div className="d-flex gap-30 justify-content-between align-items-center border-end border-bottom categories-inner">
              <div className="">
                <h6 className=''>Computers & Laptop</h6>
                <small>27 Items</small>
              </div>
                <img src={computers} alt="" className='img-fluid' />
            </div>

            <div className="d-flex gap-30 justify-content-between align-items-center border-end border-bottom categories-inner">
              <div className="ms-3">
                <h6 className=''>Cameras & Videos</h6>
                <small>8 Items</small>
              </div>
                <img src={camera} alt="" className='img-fluid' />
            </div>

            <div className="d-flex gap-30 justify-content-between align-items-center border-end border-bottom categories-inner">
              <div className="ms-3">
                <h6>Smart Television</h6>
                <small>5 Items</small>
              </div>
                <img src={television} alt="" className='img-fluid' />
            </div>

            <div className="d-flex gap-30 justify-content-between align-items-center border-end border-bottom categories-inner">
              <div className="ms-3">
                <h6>Smartwatches</h6>
                <small>10 Items</small>
              </div>
                <img src={computers} alt="" className='img-fluid' />
            </div>

            <div className="d-flex gap-30 justify-content-between align-items-center border-bottom categories-inner">
              <div className="ms-3">
                <h6>Music & Gaming</h6>
                <small>8 Items</small>
              </div>
                <img src={computers} alt="" className='img-fluid' />
            </div>
          </div>
          
          <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between">
            <div className="d-flex gap-30 justify-content-between align-items-center border-end categories-inner">
                <div className="">
                  <h6>Mobiles & Tablets</h6>
                  <small>3 Items</small>
                </div>
                  <img src={computers} alt="" className='img-fluid' />
            </div>

            <div className="d-flex gap-30 justify-content-between align-items-center border-end categories-inner">
                <div className="ms-3">
                  <h6>Headphones</h6>
                  <small>70 Items</small>
                </div>
                  <img src={headphones} alt="" className='img-fluid' />
            </div>

            <div className="d-flex gap-30 justify-content-between align-items-center border-end categories-inner">
                <div className="ms-3">
                  <h6>Accessories</h6>
                  <small>16 Items</small>
                </div>
                  <img src={accessories} alt="" className='img-fluid' />
            </div>

            <div className="d-flex gap-30 justify-content-between align-items-center border-end categories-inner">
                <div className="ms-3">
                  <h6>Portable Speakers</h6>
                  <small>19 Items</small>
                </div>
                  <img src={speakers} alt="" className='img-fluid' />
            </div>

            <div className="d-flex gap-30 justify-content-between align-items-center categories-inner">
                <div className="ms-3">
                  <h6>Home Appliances</h6>
                  <small>77 Items</small>
                </div>
                  <img src={homeappliance} alt="" className='img-fluid' />
            </div>
          </div>
        </section>

        <Featured />

        <Featuredbig />

        <SpecialProducts />

        <Popularproducts />

        <Brands />

        <News />

      </section>


    </>
  )
}

export default Landing