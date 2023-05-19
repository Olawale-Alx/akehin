import React from 'react'
import mac from '../assets/mac.png'
import speaker from '../assets/speaker.jpg'
import watch from '../assets/watch.jpg'
import star45 from '../assets/star45.svg'
import star from '../assets/star.svg'
import star4 from '../assets/star4.svg'
import wish from '../assets/wish.svg'
import smartwatch from '../assets/smartwatch.png'
import smartwatch3 from '../assets/smartwatch3.png'
import headphone from '../assets/kidsheadphone.png'
import pro13 from '../assets/pro13.png'
import partybox from '../assets/partyboxcopy.png'
import FeatureCard from './FeatureCard'


function Popularproducts() {
  return (
    <div className='container-fluid container-lg mt-5 mb-5 px-0'>
        <h5 className='ps-0 pb-3'>Our Popular Projects</h5>

        <div className="row gap-2">
            <div className="col-12 col-lg-4 bg-white px-3 pb-5 rounded-3 feature pt-4">
                <div className="d-flex align-items-center mb-3 small-img">
                    <img src={watch} alt="" className='me-2' />
                    <small>Wristwatches</small>
                </div>

                <div className="d-flex align-items-center mb-3 small-img">
                    <img src={speaker} alt="" className='me-2' />
                    <small>Speakers</small>
                </div>

                <div className="d-flex align-items-center mb-5 small-img">
                    <img src={mac} alt="" className='me-2' />
                    <small>Laptops</small>
                </div>
            </div>

            <div className="col-12 col-lg-4 bg-dark text-light px-3 pb-5 rounded-3 feature pt-4 relative">
                <small className='fw-bold text-secondary'>15% OFF</small>
                <h4 className='py-2'>Party Speakers</h4>
                <small className='fw-bold text-secondary py-2'>From $399 or $17/mo for 24 mo.*</small>
                <div className="image-party">
                    <img src={partybox} alt="" />
                </div>
            </div>

            <FeatureCard favicon={wish} image={smartwatch} maker={'Havells'} product_desc={'Kids Headphones Bulk 10 Pack Multi Colored'} star={star45} price={'$100.00'}/>

            <FeatureCard favicon={wish} image={smartwatch3} maker={'Havells'} product_desc={'Kids Headphones Bulk 10 Pack Multi Colored'} star={star45} price={'$100.00'}/>

            <FeatureCard favicon={wish} image={headphone} maker={'Havells'} product_desc={'Kids Headphones Bulk 10 Pack Multi Colored'} star={star45} price={'$100.00'}/>

            <FeatureCard favicon={wish} image={pro13} maker={'Havells'} product_desc={'Kids Headphones Bulk 10 Pack Multi Colored'} star={star45} price={'$100.00'}/>
        </div>
    </div>
  )
}

export default Popularproducts