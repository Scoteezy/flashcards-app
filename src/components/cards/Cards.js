import Card from '../card/Card'

import '../../style/container.scss'
import './Cards.scss'
import { useSelector } from 'react-redux'
const Cards = ({openModal})=>{    
    const flashcards = useSelector(store => store.flashcards.flashcards)
    return(
        <div className="cards" >
            <div className="cards__container">
            {flashcards.map(flashcard => <Card key={flashcard.id} openModal={openModal} {...flashcard}/>)}
            </div>
        </div>
    )
}
export default Cards;