import Card from '../card/Card'

import '../../style/container.scss'
import './Cards.scss'

const Cards = ({cards,onDelete})=>{    

    const elements = cards.map(item=>{
    const {id,title, ...itemProps}=item;
        return(
            <Card
            key={id}
            {...itemProps}
            title={title}
            onDelete={()=>onDelete(title,id)}   
            />
        )
    })
    return(
        <div className="cards">
            <div className="cards__container">
            {elements}
            </div>
        </div>
    )
}
export default Cards;