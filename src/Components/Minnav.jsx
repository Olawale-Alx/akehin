import React from 'react'
import { Link } from 'react-router-dom'

function Minnav() {
  return (
    <div className='minnav py-1'>
        <div className="container-fluid container-lg d-flex">
            <select className="text-white border border-0 text-bold py-1 px-3 me-5 border-end border-secondary select" aria-label="Default select example" name='SHOP CATEGORIES'>
                <option value={'SHOP CATEGORIES'}>SHOP CATEGORIES</option>
                <option value="electronics">ELECTRONICS</option>
                <option value="computers & laptops">COMPUTERS AND LAPTOPS</option>
                <option value="cameras & videos">CAMERAS AND VIDEOS</option>
                <option value="SMARTWATCHES">SMARTWATCHES</option>
                <option value="MUSIC & GAMING">MUSIC & GAMING</option>
                <option value="MOBILES AND TABLETS">MOBILES AND TABLETS</option>
                <option value="HEADPHONES">HEADPHONES</option>
                <option value="ACCESSORIES">ACCESSORIES</option>
                <option value="HOME APPLIANCES">HOME APPLIANCES</option>
                <option value="PORTABLE SPEAKERS">PORTABLE SPEAKERS</option>
            </select>

            <div className="">
                <ul className='d-flex flex-row navbar-nav'>
                    <li className='me-4 nav-item'>
                        <Link className='nav-link'>HOME</Link>
                    </li>
                    <li className='me-4 nav-item'>
                        <Link className='nav-link'>OUR STORE</Link>
                    </li>
                    <li className='me-4 nav-item'>
                        <Link className='nav-link'>BLOG</Link>
                    </li>
                    <li className='me-4 nav-item'>
                        <Link className='nav-link'>CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Minnav