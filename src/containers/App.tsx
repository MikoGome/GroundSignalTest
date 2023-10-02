import React from 'react';
import SearchBar from './SearchBar';
import Modal from './Modal';
import Map from './Map';
import { useSelector } from 'react-redux';
import '../styles/main.css';

const App:React.FC = ():JSX.Element => {
  const {isOpen, data} = useSelector(state => state.modal);
  
  return (
    <div className="App">
      <h1 className="text-red-500 font-bold underline">I should be red</h1>
      <SearchBar/>
      {isOpen && <Modal data={data}/>}
      <Map/>
    </div>
  )
}

export default App;