import { useState } from 'react'
import Header from '../header/Header'
import Cards from '../cards/Cards'
import Modal from '../modal/Modal'

import '../../style/container.scss'
import './App.css';

function App() {
  const [modal, setModal] = useState(false);

  const openModal=()=>{
    setModal(!modal);
  }
  return (
   <div className="container" >
      <Header changeModal={openModal} modal={modal}/>
      <Cards
      openModal={openModal}
      />
      <Modal
      changeModal={openModal} 
      modal={modal}
      />
    </div>
  );
}

export default App;
