import { useState } from 'react';

import './card.scss'
import '../../style/button.scss'
import {ReactComponent as EditIcon} from './pen_icon.svg';
import {ReactComponent as DelIcon} from './del_icon.svg';


const Card = ()=>{
    const [show, setShow] = useState(false);
    let visibility = 'none';
    const changeVisibility=()=>{
         setShow(show=>!show);
    }
    visibility = show ? 'block' : 'none';
    return(
        <div className="card">
            <div className="card__title">Some text apples orange asdfasfasdfasdf askfjalkasda adasdfjakls dfjkl</div>
            <button className="button button_card" onClick={changeVisibility}>Show/Hide</button>
            <div className="card__descr" style={{'display': visibility}}>some description apple is green? orange is orange</div>
            <div className="card__icons">
            <button className='card__icon' >
                <EditIcon  style={{'width': '30px', 'height' : '20px', 'color' : '#587ef4'}}/>
            </button>
            <button className='card__icon'><DelIcon style={{'width': '30px', 'height' : '20px', 'color' : '#ff5353'}}/></button>
            </div>
        </div>
    )
}
export default Card;