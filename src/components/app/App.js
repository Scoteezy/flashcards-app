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
  const [prevTitle, setPrevTitle] = useState('');
  const [prevDescr, setPrevDescr] = useState('');
  useEffect(()=>{
    for(let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      const newItem = {
        title: key, 
        descr: localStorage.getItem(key),
        id:Math.random()
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
      id:Math.random()
    }
    setItems(items => [...items,newItem]);
    localStorage.setItem(title, descr);
  }
  const onDelItem = (title,id)=>{
    console.log(items);
    localStorage.removeItem(title);
    setItems(items => items.filter((item)=>item.id!==id));
  } 
  const getPrevInfo = (title)=>{
    const prevTitle = title;
    const prevDescr = localStorage.getItem(title);
    setPrevTitle(prevTitle);
    setPrevDescr(prevDescr); 
  }
  const changeItem = (title)=>{
    setModal(true);
    localStorage.removeItem(title);
    setItems(items => items.filter((item)=>item.title!==title));

  }
  return (
   <div className="container" >
      <Header changeModal={openModal} modal={modal}/>
      <Cards
      cards={items}
      onDelete={onDelItem}
      getPrevInfo={getPrevInfo}
      changeItem={changeItem}
      />
      <Modal
      prevTitle={prevTitle}
      prevDescr={prevDescr}
      changeModal={openModal} 
      modal={modal}
      onAdd={onAddItem}
      />
    </div>
  );
}

export default App;
