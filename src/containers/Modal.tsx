import React from 'react';
import Images from '../components/Images';
import Description from '../components/Description';

const Modal:React.FC<any> = (props):JSX.Element => {
  const {data} = props;

  function redirect() {
    const url: string = data.details.website;
    location.href= url;
  }

  console.log(data);

  return (
    <div className="modal">
      <div className="top">
        <h4>{data.name}</h4>
        <p>{data.location.lat + ',' + data.location.lon}</p>
        <button className="website" onClick={redirect}>Visit Website</button>
      </div>
      {data.details?.description && <Description description={data.details.description}/>}
      {data.images && <Images imageURLs={data.images}/>}
    </div>
  )
}

export default Modal;