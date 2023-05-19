import React from 'react'
import FeatureCard from './FeatureCard'
import wish from '../assets/wish.svg'
import kids_headphone from '../assets/kidsheadphone.png'
import star45 from '../assets/star45.svg'
import camera from '../assets/sonya7111.png'
import star from '../assets/star.svg'
import star4 from '../assets/star4.svg'
import fstar from '../assets/fstar.svg'
import tablet from '../assets/tab.jpg'
import speaker from '../assets/speaker.jpg'
import watche from '../assets/watch.jpg'
import xg500 from '../assets/partybox.png'


function Featured() {
  return (
    <div className='container-fluid container-lg'>
        <h5 className='fw-bold mb-3 px-0 featured-h5'>Featured Collection</h5>

        <div className="row gap-2 ms-1">
            <FeatureCard favicon={wish} image={kids_headphone} maker={'Havells'} product_desc={'Kids Headphones Bulk 10 Pack Multi Colored'} star={star45} price={'$100.00'}/>
            
            <FeatureCard favicon={wish} image={camera} maker={'Sony'} product_desc={'Olympus Pen E-PL9 Kit with 14.42, EZ Lens, Camera'} star={star} price={'$10.00'}/>

            <FeatureCard favicon={wish} image={tablet} maker={'Havells'} product_desc={'Honor T1 7.0 1GB RAM 8 GB ROM'} star={star4} price={'$80.00'}/>

            <FeatureCard favicon={wish} image={speaker} maker={'Bajaj'} product_desc={'Beoplay A1 Portable Bluetooth Speaker'} star={fstar} price={'$500.00'} discount={'discount fw-bold px-2 bg-warning rounded-4 text-danger'} discount_amt={'-10%'} dis={'$750.00'} />

            <FeatureCard favicon={wish} image={watche} maker={'Sony'} product_desc={'Milanese Loop Watch Band for 42mm.44mm Apple'} star={fstar} price={'$10.00'}/>

            <FeatureCard favicon={wish} image={xg500} maker={'Bajaj'} product_desc={'Sony Extra Bass Portable Splash-Proof Wireless'} star={star} price={'$220.00'}/>
                   
        </div>
    </div>
  )
}

export default Featured