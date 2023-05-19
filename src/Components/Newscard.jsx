import React from 'react'


function Newscard({image, date, headline}) {
  return (
    <div className='bg-light px-0 pb-4 col-12 col-lg-3 text-secondary newscard mb-3'>
        <div className="image-round">
            <img src={image} alt="" />
        </div>

        <div className="pt-3 px-3">
            <small className='fw-bold'>{date}</small>

            <h6 className='fw-bold text-dark mt-3'>{headline}</h6>

            <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem adipisci sapiente rem nemo? Quidem eaque incidunt non ea unde fugit!</small>
        </div>

        <div className='read-btn d-flex justify-content-around'>
            <button className='text-center fw-bold py-2 rounded-4 bg-dark text-secondary mt-4'> READ MORE</button>
        </div>
    </div>
  )
}

export default Newscard