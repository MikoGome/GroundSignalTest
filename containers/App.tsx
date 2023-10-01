import React from 'react';
import SearchBar from './SearchBar';
import Modal from './Modal';
import Map from './Map';
import '../styles/main.css';
import { useSelector } from 'react-redux';

const App:React.FC = ():JSX.Element => {
  const {isOpen, data} = useSelector(state => state.modal);
  
  return (
    <div className="App">
      <SearchBar/>
      {isOpen && <Modal data={data}/>}
      <Map/>
    </div>
  )
}

export default App;