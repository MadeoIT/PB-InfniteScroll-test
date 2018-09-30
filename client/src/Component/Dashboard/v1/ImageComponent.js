import React from 'react';

const ImageComponent = props => {
  return (

    <img
      className='dashboard__container__cell'
      src={props.image.imageLink}
      alt={props.image.imageName}
    />

  )
}

export default ImageComponent;