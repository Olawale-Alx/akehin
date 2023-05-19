import React from 'react'

function FeatureCard({favicon, image, discount, maker, product_desc, star, price, discount_amt, dis}) {
  return (
    <div className="col-12 col-lg-4 bg-white px-3 py-2 rounded-3 feature">
      <div className="d-flex justify-content-between align-items-center">
          <small className={discount}>{discount_amt}</small>
          <img src={favicon} alt="" />
      </div>

      <div className="text-center mt-4">
          <img src={image} alt="" className='img-fluid img' />
      </div>

      <div className="mt-4">
          <small className='text-danger'>{maker}</small>

          <h6 className="my-3 fw-bold lh-sm">{product_desc}</h6>

          <img src={star} alt="" />

          <h6 className="my-3 lh-sm">{price} <span className='ms-2 text-secondary fw-bold'> <s>{dis}</s> </span></h6>
      </div>
    </div>
  )
}


export default FeatureCard


// 'discount fw-bold px-2 py-1 bg-warning rounded-4'