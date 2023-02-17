import './modal.scss'
import {ReactComponent as Close} from './close.svg';

const Modal = (props)=>{


    return(
        <div className={props.modal ? 'modal modal__active': 'modal'}>
            <div className={props.modal ? 'modal__content modal__content-active': 'modal__content'} onClick={e=>e.stopPropagation()}>
                <button 
                onClick={()=>props.changeModal(!props.modal)}
                className="modal__exit"><Close style={{'width': '40px', 'height' : '40px', 'color' : '#fff'}}/></button>
                <h2 className="modal__title">Add FlashCard</h2>
                <form>
                    <div className="modal__subtitle">Question:</div>
                    <textarea placeholder="Type the question here... "></textarea>
                    <div className="modal__subtitle">Answer:</div>
                    <textarea placeholder="Type the answer here..."></textarea>
                    <button className="button button_modal">Save</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;