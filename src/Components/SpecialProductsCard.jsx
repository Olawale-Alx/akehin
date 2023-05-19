import React from 'react'
import favicon from '../assets/wish.svg'
import wish_black from '../assets/wish-black.svg'
import tab1 from '../assets/tab1r.png'
import sonya from '../assets/sonya7111.png'
import partybox from '../assets/partybox.png'
import iPhone from '../assets/ipad2.png'
import laptop from '../assets/laptop.jpg'
import fstar from '../assets/fstar.svg'
import star45 from '../assets/star45.svg'
import milanese from '../assets/watch.jpg'


function SpecialProductsCard() {
  return (
    // First One
    <>
    <div className='col-12 col-lg-4 d-flex justify-content-between align-items-center p-3 bg-light rounded specialcard'>
        <div className="me-2">
            <div className="d-flex align-items-center justify-content-between">
                <small className='px-2 bg-warning fw-bold rounded-4'></small>
                <img src={favicon} alt="" />
            </div>

            <div className='productimg mb-4'>
                <img src={tab1} alt="" />
            </div>

            <div className="d-flex align-items-center justify-content-around">
                <div className="border product-card rounded">
                    <img src={tab1} alt="" />
                </div>

                <div className="border product-card rounded">
                    <img src={tab1} alt="" />
                </div>
            </div>
        </div>

        <div className="bg-light py-3 pe-4 text-dark">
            <small className='fw-bold text-danger'>Samsung</small>
            <h6 className='my-3 fw-bold'>Samsung Galaxy Tab a SM-T295, 4G</h6>
            <img src={fstar} alt="" className='mb-2'/>

            <h6 className='my-2 text-danger'>$11.00 <span className='ms-2 text-secondary'> <s>$25.00</s> </span> </h6>

            <p className='labe'><b>286</b> Days</p>

            <label htmlFor="products" className='labe fw-bold text-secondary'>Products: 200</label><br />
            <progress id='file' value={'154'} max={'200'} className='mb-3'></progress>

            <button className='py-1 px-3 fw-bold bg-dark text-secondary border-0 rounded-4 mb-3'>OPTION</button>
        </div>
    </div>

    <div className='col-12 col-lg-4 d-flex justify-content-between align-items-center p-3 bg-light rounded specialcard'>
        <div className="me-2">
            <div className="d-flex align-items-center justify-content-between wish_bar">
                <small className='px-2 bg-warning fw-bold rounded-4'>-46%</small>
                <img src={wish_black} alt="" />
            </div>

            <div className='productimg mb-4'>
                <img src={sonya} alt="" />
            </div>

            <div className="d-flex align-items-center justify-content-around">
                <div className="border product-card rounded">
                    <img src={sonya} alt="" />
                </div>

                <div className="border product-card rounded">
                    <img src={sonya} alt="" />
                </div>
            </div>
        </div>

        <div className="bg-light py-3 pe-4 text-dark">
            <small className='fw-bold text-danger'>Bajaj</small>
            <h6 className='my-3 fw-bold'>Sonya Action Camera with 32MP Lens</h6>
            <img src={star45} alt="" className='mb-2'/>

            <h6 className='my-2 text-danger'>$16.00 <span className='ms-2 text-secondary'> <s>$30.00</s> </span> </h6>

            <p className='labe'><b>90</b> Days</p>

            <label htmlFor="products" className='labe fw-bold text-secondary'>Products: 200</label><br />
            <progress id='file' value={'50'} max={'90'} className='mb-3'></progress>

            <button className='py-1 px-3 fw-bold bg-dark text-secondary border-0 rounded-4 mb-3'>OPTION</button>
        </div>
    </div>

    <div className='col-12 col-lg-4 d-flex justify-content-between align-items-center p-3 bg-light rounded specialcard'>
        <div className="me-2">
            <div className="d-flex align-items-center justify-content-between wish_bar">
                <small className='px-2 bg-warning fw-bold rounded-4'>-33%</small>
                <img src={wish_black} alt="" />
            </div>

            <div className='productimg mb-4'>
                <img src={partybox} alt="" />
            </div>

            <div className="d-flex align-items-center justify-content-around">
                <div className="border product-card rounded">
                    <img src={partybox} alt="" />
                </div>

                <div className="border product-card rounded">
                    <img src={partybox} alt="" />
                </div>
            </div>
        </div>

        <div className="bg-light py-3 pe-4 text-dark">
            <small className='fw-bold text-danger'>Bajaj</small>
            <h6 className='my-3 fw-bold'>Partbox A1 Party Bluetooth Speaker</h6>
            <img src={fstar} alt="" className='mb-2'/>

            <h6 className='my-2 text-danger'>$500.00 <span className='ms-2 text-secondary'> <s>$740.00</s> </span> </h6>

            <p className='labe'><b>120</b> Days</p>

            <label htmlFor="products" className='labe fw-bold text-secondary'>Products: 13</label><br />
            <progress id='file' value={'50'} max={'120'} className='mb-3'></progress>

            <button className='py-1 px-3 fw-bold bg-dark text-secondary border-0 rounded-4 mb-3'>OPTION</button>
        </div>
    </div>

    <div className='col-12 col-lg-4 d-flex justify-content-between align-items-center p-3 bg-light rounded specialcard'>
        <div className="me-2">
            <div className="d-flex align-items-center justify-content-between wish_bar">
                <small className='px-2 bg-warning fw-bold rounded-4'>-10%</small>
                <img src={favicon} alt="" />
            </div>

            <div className='productimg mb-4'>
                <img src={iPhone} alt="" />
            </div>

            <div className="d-flex align-items-center justify-content-around">
                <div className="border product-card rounded">
                    <img src={iPhone} alt="" />
                </div>

                <div className="border product-card rounded">
                    <img src={iPhone} alt="" />
                </div>
            </div>
        </div>

        <div className="bg-light py-3 pe-4 text-dark">
            <small className='fw-bold text-danger'>Apple</small>
            <h6 className='my-3 fw-bold'>IPad 3. In Green, Red and Black color</h6>
            <img src={fstar} alt="" className='mb-2'/>

            <h6 className='my-2 text-danger'>$1,280.00 <span className='ms-2 text-secondary'> <s>$1,400.00</s> </span> </h6>

            <p className='labe'><b>13</b> Days</p>

            <label htmlFor="products" className='labe fw-bold text-secondary'>Products: 5</label><br />
            <progress id='file' value={'4'} max={'5'} className='mb-3'></progress>

            <button className='py-1 px-3 fw-bold bg-dark text-secondary border-0 rounded-4 mb-3'>OPTION</button>
        </div>
    </div>

    <div className='col-12 col-lg-4 d-flex justify-content-between align-items-center p-3 bg-light rounded specialcard'>
        <div className="me-2">
            <div className="d-flex align-items-center justify-content-between wish_bar">
                <small className='px-2 bg-warning fw-bold rounded-4'>-15%</small>
                <img src={wish_black} alt="" />
            </div>

            <div className='productimg mb-4'>
                <img src={laptop} alt="" />
            </div>

            <div className="d-flex align-items-center justify-content-around">
                <div className="border product-card rounded">
                    <img src={laptop} alt="" />
                </div>

                <div className="border product-card rounded">
                    <img src={laptop} alt="" />
                </div>
            </div>
        </div>

        <div className="bg-light py-3 pe-4 text-dark">
            <small className='fw-bold text-danger'>HP</small>
            <h6 className='my-3 fw-bold'>AlienWare 13 16GB RAM 1TB SSD.</h6>
            <img src={fstar} alt="" className='mb-2'/>

            <h6 className='my-2 text-danger'>$1,700.00 <span className='ms-2 text-secondary'> <s>$2,000.00</s> </span> </h6>

            <p className='labe'><b>45</b> Days</p>

            <label htmlFor="products" className='labe fw-bold text-secondary'>Products: 12</label><br />
            <progress id='file' value={'9'} max={'12'} className='mb-3'></progress>

            <button className='py-1 px-3 fw-bold bg-warning text-dark border-0 rounded-4 mb-3'>ADD TO CART</button>
        </div>
    </div>

    <div className='col-12 col-lg-4 d-flex justify-content-between align-items-center p-3 bg-light rounded specialcard'>
        <div className="me-2">
            <div className="d-flex align-items-center justify-content-between wish_bar">
                <small className='px-2 bg-warning fw-bold rounded-4'>-30%</small>
                <img src={favicon} alt="" />
            </div>

            <div className='productimg mb-4'>
                <img src={milanese} alt="" />
            </div>

            <div className="d-flex align-items-center justify-content-around">
                <div className="border product-card rounded">
                    <img src={milanese} alt="" />
                </div>

                <div className="border product-card rounded">
                    <img src={milanese} alt="" />
                </div>
            </div>
        </div>

        <div className="bg-light py-3 pe-4 text-dark">
            <small className='fw-bold text-danger'>Sony</small>
            <h6 className='my-3 fw-bold'>Milanese Loop Watch Band for Apple</h6>
            <img src={fstar} alt="" className='mb-2'/>

            <h6 className='my-2 text-danger'>$7.00 <span className='ms-2 text-secondary'> <s>$10.00</s> </span> </h6>

            <p className='labe'><b>31</b> Days</p>

            <label htmlFor="products" className='labe fw-bold text-secondary'>Products: 100</label><br />
            <progress id='file' value={'25'} max={'100'} className='mb-3'></progress>

            <button className='py-1 px-3 fw-bold bg-dark text-secondary border-0 rounded-4 mb-3'>OPTION</button>
        </div>
    </div>
    </>
  )
}

export default SpecialProductsCard