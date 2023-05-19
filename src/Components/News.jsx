import React from 'react'
import Slider from 'react-slick'
import Newscard from './Newscard'
import vr from '../assets/blog-1.jpg'
import apple1 from '../assets/apple-product1.jpg'
import apple2 from '../assets/apple-product2.jpg'
import zfold from '../assets/samsung1.jpg'
import sony1 from '../assets/sony-product2.jpeg'
import sony2 from '../assets/sonyproduct1.jpg'
import tecno1 from '../assets/tecno1.jpg'
import tecno2 from '../assets/tecno2.jpg'


function News() {
  return (
    <div className="container-fluid container-lg mt-5 mb-3 px-0">
        <h5 className='fw-bold mb-3 px-0 featured-h5'>Our Latest News</h5>
            <div className="row px-0 gap-2">
                <Newscard image={apple1} date={'09 APRIL, 2023'} headline={'Apple Launch New Products'} />
                <Newscard image={vr} date={'17 APRIL, 2023'} headline={'The Rise of Virtual Reality'}/>
                <Newscard image={tecno2} date={'23 APRIL, 2023'} headline={'Announcing Tecno Camon 19'}/>
                <Newscard image={tecno1} date={'30 APRIL, 2023'} headline={'Tecno x Man City Announce Winners'}/>
                <Newscard image={sony2} date={'09 MAY, 2023'} headline={'Evolution of The Sony Brand'}/>
                <Newscard image={sony1} date={'14 MAY, 2023'} headline={'The Future of Photography'}/>
                <Newscard image={zfold} date={'17 MAY, 2023'} headline={'Samsung ZFold Specification'}/>
                <Newscard image={apple2} date={'23 MAY, 2023'} headline={'Nice To Have Apple Devices'}/>
            </div>
    </div>
  )
}

export default News

{/* <div className='container-fluid container-lg mt-5 mb-3 px-0'>
        <Newscard card={'bg-light rounded py-4 px-3 col-12 col-lg-3 text-secondary featuredbig'}/>
    </div> */}

{/* <Slider autoplay={true} autoplaySpeed={3000} slidesToScroll={1} slidesToShow={3} infinite={true} speed={500}>
            <Newscard />
            <Newscard />
            <Newscard />
            <Newscard />
            <Newscard />
            <Newscard />
            <Newscard />
            <Newscard />
        </Slider> */}