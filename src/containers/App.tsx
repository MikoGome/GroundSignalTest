import React from 'react';
import Search from './Search';
import Modal from './Modal';
import Map from './Map';
import { useSelector } from 'react-redux';
import '../styles/main.css';

const App:React.FC = ():JSX.Element => {
  const {isOpen, data} = useSelector(state => state.modal);
  
  return (
    <div className="app">
      <Search/>
      {isOpen && <Modal data={data}/>}
      <Map/>
    </div>
  )
}

export default App;