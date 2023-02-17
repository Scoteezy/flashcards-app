import { useState } from 'react'
import '../../style/button.scss'
import '../../style/container.scss'
import './header.scss'
const Header = (props)=>{

    return (
        <header className='header'>
                <div className="header__container">
            <button className="button" onClick={()=>{props.changeModal()}}>Add FlashCard</button>
                </div>
        </header>
    )
}

export default Header;