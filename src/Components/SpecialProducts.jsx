import React from 'react'
import SpecialProductsCard from './SpecialProductsCard'
import {BiRightArrow, BiLeftArrow} from 'react-icons/bi'

function SpecialProducts() {
  return (
    <div className='container-fluid container-lg mt-5 mb-3 px-0'>
        <div className="d-flex align-items-center justify-content-between">
            <h5 className=''>Special Products</h5>
            <div>
                <BiLeftArrow className='me-2'/>
                <BiRightArrow />
            </div>
        </div>

        <div className="row gap-4 mt-3">
            <SpecialProductsCard />
        </div>
    </div>
  )
}

export default SpecialProducts