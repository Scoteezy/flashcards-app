import { useState } from 'react';

import './card.scss'
import '../../style/button.scss'
import {ReactComponent as EditIcon} from './pen_icon.svg';
import {ReactComponent as DelIcon} from './del_icon.svg';


const Card = ({title,descr,onDelete,getPrevInfo,changeItem})=>{
    const [show, setShow] = useState(false);
    let visibility = 'none';
    const changeVisibility=()=>{
         setShow(show=>!show);
    }
    visibility = show ? 'block' : 'none';
    return(
        <div className="card">
            <div className="card__title">{title}</div>
            <button className="button button_card" onClick={changeVisibility}>Show/Hide</button>
            <div className="card__descr" style={{'display': visibility}}>{descr}</div>
            <div className="card__icons">
            <button 
            onClick={()=>{
                getPrevInfo();
                changeItem();
            }}
            
            className='card__icon' >
                <EditIcon  style={{'width': '30px', 'height' : '20px', 'color' : '#587ef4'}}/>
            </button>
            <button 
            onClick={onDelete}
            className='card__icon'><DelIcon style={{'width': '30px', 'height' : '20px', 'color' : '#ff5353'}}/></button>
            </div>
        </div>
    )
}

export default Card;