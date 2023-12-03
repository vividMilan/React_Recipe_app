import React from 'react'

const CustomImage = ({imgSrc, pt}) => {
  return (
    <div className='custom-image' style={{paddingTop: pt}}>
        <img src={imgSrc} />
    </div>
  )
}

export default CustomImage