import React from 'react';

const Image:React.FC<{imageURL: string}> = (props):JSX.Element => {
  const {imageURL} = props;

  return (
    <img src={imageURL}/>
  )
}

export default Image;