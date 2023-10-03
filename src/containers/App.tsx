import React from 'react';
import Search from './Search';
import Modal from './Modal';
import Map from './Map';
import { useSelector } from 'react-redux';
import { modalStateType, reducersType } from '../interfaces/interfaces';
import '../styles/main.css';

const App:React.FC<{}> = ():JSX.Element => {
  //extracts modal state from the redux store
  const {isOpen, data} = useSelector((state:reducersType):modalStateType => state.modal);
  
  return (
    <div className="app">
      <Search/>
      {isOpen && <Modal data={data}/>}
      <Map/>
    </div>
  )
}

export default App;