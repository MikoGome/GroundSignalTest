import React from 'react';
import Images from '../components/Images';
import Description from '../components/Description';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/actions';
import IconPin from '../components/IconPin';

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

  return (
    <div className="modal" onClick={closeModal}>
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
      </div>
    </div>
  )
}

export default Modal;