import React from 'react'


function FeaturedbigCard({image, h4_css, h4text, smalltext, card, ptext}) {
  return (
    <div className={card}>
        <small>{smalltext}</small>
        <h4 className={h4_css}>{h4text}</h4>
        <p>{ptext}</p>

        <div className="mt-5 mt-3 text-center">
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default FeaturedbigCard


// fw-bold my-2 text-light -h4css
// bg-dark rounded py-4 px-3 col-12 col-lg-3 text-secondary featuredbig - card