import { useState } from 'react';
import { useEffect } from 'react';

import './modal.scss'
import {ReactComponent as Close} from './close.svg';

const Modal = ({modal,onAdd,changeModal,prevTitle,prevDescr})=>{
    const [title,setTitle] = useState(prevTitle);
    const [descr, setDescr] = useState(prevDescr);
    const onValueChange =(e)=>{
        e.target.name ==='title'? setTitle(e.target.value) : setDescr(e.target.value);
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        onAdd(title,descr)
        setTitle('');
        setDescr('');
        changeModal(!modal)
    }

    useEffect(()=>{
    setTitle(prevTitle);
    setDescr(prevDescr);
    },[prevTitle,prevDescr])

    return(
        <div className={modal ? 'modal modal__active': 'modal'}>
            <div className={modal ? 'modal__content modal__content-active': 'modal__content'} onClick={e=>e.stopPropagation()}>
            <button 
                onClick={()=>changeModal(!modal)}
                className="modal__exit"><Close style={{'width': '40px', 'height' : '40px', 'color' : '#fff'}}/></button>
                <h2 className="modal__title">Add FlashCard</h2>
                <form
                onSubmit={onSubmit}
                >
                    <div className="modal__subtitle">Question:</div>
                    <input
                    required
                    type='text'
                    name='title'
                    value={title}
                    onChange={onValueChange}
                    placeholder="Type the question here... "></input>
                    <div className="modal__subtitle">Answer:</div>
                    <input
                    required
                    type='text'
                    name='descr'
                    value={descr}
                    onChange={onValueChange}
                    placeholder="Type the answer here..."></input>
                    <button className="button button_modal">Save</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;