import React from 'react';
import Images from '../components/Images';
import Description from '../components/Description';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/actions';
import IconPin from '../components/IconPin';
import BarChart from '../components/BarChart';
import IconExit from '../components/IconExit';

const Modal:React.FC<any> = (props):JSX.Element => {
  const {data} = props;
  const dispatch = useDispatch();

  function redirect() {
    const url: string = data.details.website;
    location.href= url;
  }

  function closeModal() {
    dispatch(actions.closeModal());
  }

  console.log(data);

  return (
    <div className="modal">
      <div className="modal-box">
        <div className="modal-top">
          <div className="modal-top-left">
            <IconPin className="modal-location-icon-pin"/>
            <div>
              <h4 className="modal-location-name">{data.name}</h4>
              <p className="modal-location-coordinates">{data.location.lat + ', ' + data.location.lon}</p>
            </div>
          </div>
          {data.details?.website && <button className="website-button" onClick={redirect}>Visit Website</button>}
        </div>
        {data.details?.description && <Description description={data.details.description}/>}
        {data.images && <Images imageURLs={data.images}/>}
        {data.details?.avgStoreTraffic && <BarChart chartData={data.details.avgStoreTraffic}/>}
      </div>
      <button>
        <IconExit className="icon-exit" handleClick={closeModal}/>
      </button>
    </div>
  )
}

export default Modal;