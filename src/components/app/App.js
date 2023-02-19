import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../header/Header'
import Cards from '../cards/Cards'
import Modal from '../modal/Modal'

import '../../style/container.scss'
import './App.css';

function App() {
  const [items,setItems] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(()=>{
    for(let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      const newItem = {
        title: key, 
        descr: localStorage.getItem(key),
        id:Date.now()
      }
        setItems(items => [...items,newItem]);
    }
  },[])

  const openModal=()=>{
    setModal(!modal);
  }
  const onAddItem = (title, descr)=>{
    const newItem = {
      title: title,
      descr : descr,
      id:Date.now()
    }
    setItems(items => [...items,newItem]);
    localStorage.setItem(title, descr);
  }
  const onDelItem = (title,id)=>{
    console.log(items);
    localStorage.removeItem(title);
    setItems(items => items.filter((item)=>item.id!==id));
  } 
  return (
   <div className="container">
      <Header changeModal={openModal} modal={modal}/>
      <Cards 
      cards={items}
      onDelete={onDelItem}
      />
      <Modal 
      changeModal={openModal} 
      modal={modal}
      onAdd={onAddItem}
      />
    </div>
  );
}

export default App;
