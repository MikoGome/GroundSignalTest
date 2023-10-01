import React from 'react';
import Image from './Image';

const Images: React.FC<{imageURLs: string[]}> = (props): JSX.Element => { 
  const {imageURLs} = props;

  return (
    <div className="Images">
      {
        imageURLs.map((imageURL, idx) => (
          <Image key={'image_' + idx} imageURL={imageURL}/>
        ))
      }
    </div>
  )
}

export default Images;