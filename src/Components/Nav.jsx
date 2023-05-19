import React from 'react'
import {HiOutlineMenu, HiSearch, HiOutlineUser} from 'react-icons/hi'
// import {IoGitCompareOutline} from 'react-icons/io'
// import {BsCart4} from 'react-icons/bs'
// import {MdFavoriteBorder} from 'react-icons/md'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary text-white py-2">
      <div className="container-fluid container-lg">
        <a className="navbar-brand text-white me-lg-5" href="#">akehin.</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className=""><HiOutlineMenu color='white'/></span>
        </button>
        <div className="collapse navbar-collapse text-white" id="navbarNav">
          <div className="input-group my-3 w-50 my-lg-0 me-lg-5">
            <input type="text" className="form-control" placeholder="Search Product Here" aria-label="Search Product Here" aria-describedby="button-addon2"/>
            <button className="btn bg-warning" type="button" id="button-addon2">< HiSearch/></button>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item me-lg-3">
            <Link className="nav-link active lh-sm" aria-current="page" href="#">Compare<br />Products</Link>
            </li>
            <li className="nav-item lh-sm">
            <Link className="nav-link" href="#">Favorite<br />Wishlist</Link>
            </li>
            <li className="nav-item lh-sm">
            <Link className="nav-link" href="#">Login<br />My Account</Link>
            </li>
            <li className="nav-item lh-sm">
            <Link className="nav-link" href="#">0<br />My Account</Link>
            </li>
          </ul>
          </div>
      </div>
    </nav>
  )
}

export default Nav