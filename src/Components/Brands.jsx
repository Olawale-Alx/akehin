import React from 'react'
import Slider from 'react-slick'
import brand1 from '../assets/brand-01.png'
import brand2 from '../assets/brand-02.png'
import brand3 from '../assets/brand-03.png'
import brand4 from '../assets/brand-04.png'
import brand5 from '../assets/brand-05.png'
import brand6 from '../assets/brand-06.png'
import brand7 from '../assets/brand-07.png'
import brand8 from '../assets/brand-08.png'


function Brands() {

    return (
        <div className='container-fluid container-lg mt-3 mb-5 px-0 brand rounded-1'>
            <div className="bg-light ps-5 pe-1 py-0 text-dark">            
                <Slider autoplay={true} autoplaySpeed={3000} slidesToScroll={1} slidesToShow={5} infinite={true} speed={500}>
                    <div>
                        <img src={brand1} alt="" />
                    </div>
                    <div>
                        <img src={brand2} alt="" />
                    </div>
                    <div>
                        <img src={brand3} alt="" />
                    </div>
                    <div>
                        <img src={brand4} alt="" />
                    </div>
                    <div>
                        <img src={brand5} alt="" />
                    </div>
                    <div>
                        <img src={brand6} alt="" />
                    </div>
                    <div>
                        <img src={brand7} alt="" />
                    </div>
                    <div>
                        <img src={brand8} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Brands