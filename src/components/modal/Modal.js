import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {addFlashcard,deleteFlashcard,setChange} from '../../store/flashcardSlice'
import './modal.scss'
import {ReactComponent as Close} from './close.svg';
const Modal = ({modal,changeModal})=>{
    const dispatch = useDispatch();
    const flashcards= useSelector(store => store.flashcards.flashcards);
    const changedFlashcard = flashcards.find(flashcard=>flashcard.isChanged===true);
    const [title,setTitle] = useState();
    const [description, setDescription] = useState();
    const onValueChange =(e)=>{
        e.target.name ==='title'? setTitle(e.target.value) : setDescription(e.target.value);
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        // onAdd(title,descr)
        dispatch(addFlashcard({title,description}))
        setTitle('');
        setDescription('');
        changeModal(!modal)
    }
    console.log('asdfasdf')
    useEffect(()=>{
        console.log(changedFlashcard)
        if(changedFlashcard){
            setTitle(changedFlashcard.title);
            setDescription(changedFlashcard.description);
            dispatch(setChange({id:changedFlashcard.id}))
            dispatch(deleteFlashcard({id:changedFlashcard.id}))
        }
  
    },[changedFlashcard,dispatch])

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
                    value={description}
                    onChange={onValueChange}
                    placeholder="Type the answer here..."></input>
                    <button className="button button_modal">Save</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;