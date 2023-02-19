import { useState } from 'react';

import './modal.scss'
import {ReactComponent as Close} from './close.svg';

const Modal = (props)=>{

    const [title,setTitle] = useState('');
    const [descr, setDescr] = useState('');
    let error = false;
    let opacityStyle = '0';
    const onValueChange =(e)=>{
        e.target.name ==='title'? setTitle(e.target.value) : setDescr(e.target.value);
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        props.onAdd(title,descr)
        setTitle('');
        setDescr('');
        props.changeModal(!props.modal)
    }
    error ? opacityStyle='1' : opacityStyle='0';

    return(
        <div className={props.modal ? 'modal modal__active': 'modal'}>
            <div className={props.modal ? 'modal__content modal__content-active': 'modal__content'} onClick={e=>e.stopPropagation()}>
                <button 
                onClick={()=>props.changeModal(!props.modal)}
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
                    <p style={{'opacity': opacityStyle}}>Fields are empty </p>
                    <button className="button button_modal">Save</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;