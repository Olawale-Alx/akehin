import React from 'react'
import FeaturedbigCard from './FeaturedbigCard'
import smartwatch from '../assets/smartwatch3.png'
import laptop from '../assets/laptop.jpg'
import smartphone from '../assets/pro13.png'
import partybox from '../assets/partybox.png'


function Featuredbig() {
  return (
    <div className='container-fluid container-lg mt-5 mb-3'>
        <div className="row gap-3">
            <FeaturedbigCard smalltext={'BIG SCREEN'} card={'bg-dark rounded py-4 px-3 col-12 col-lg-3 text-secondary featuredbig'} image={smartwatch} ptext={'From $399 or $17/mo for 24 mo.*'} h4_css={'fw-bold my-2 text-light'} h4text={'Smart Watch Series 7'}/>
            
            <FeaturedbigCard smalltext={'STUDIO DISPLAY'} card={'bg-light rounded py-4 px-3 col-12 col-lg-3 text-secondary featuredbig'} image={laptop} ptext={'14-Inch 5k Retina display'} h4_css={'fw-bold my-2 text-dark'} h4text={'600 nitss of brightness'}/>

            <FeaturedbigCard smalltext={'SMARTPHONES'} card={'bg-light rounded py-4 px-3 col-12 col-lg-3 text-secondary featuredbig'} image={smartphone} ptext={'Now in Green. From $999.00'} h4_css={'fw-bold my-2 text-dark'} h4text={'Smartphone 13 Pro'}/>

            <FeaturedbigCard smalltext={'PARTY SPEAKERS'} card={'bg-light rounded py-4 px-3 col-12 col-lg-3 text-secondary featuredbig'} image={partybox} ptext={'From $699 or $1116/mo for 12 mo.*'} h4_css={'fw-bold my-2 text-dark'} h4text={'Room-filling sound'}/>
        </div>
    </div>
  )
}

export default Featuredbig