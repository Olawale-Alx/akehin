import React from 'react'

function Navbar() {
  return (
    <div className='bg-primary fs-6 text-white border-bottom border-secondary'>
      <div className="container-fluid container-lg py-1 d-flex align-items-center justify-content-between">
        <div className="">
          <small className="fs-6">Free shipping from $100 and above</small>
        </div>
        <div className="">
          <small className="fs-6 me-3">Hotline: +234 90XXXXXXXX</small>

          <select name="language" id="language" className='me-3 text-white bg-primary border border-0' defaultValue={'English'}>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="arabic">Arabic</option>
          </select>

          <select name="currency" id="currency" className='me-3 text-white bg-primary border border-0' defaultValue={'NGN'}>
            <option value="ngn">NGN</option>
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Navbar