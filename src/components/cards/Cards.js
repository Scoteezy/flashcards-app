import Card from '../card/Card'

import '../../style/container.scss'
import './Cards.scss'

const Cards = ({cards,onDelete,getPrevInfo,changeItem})=>{    

    const elements = cards.map(item=>{
    const {id,title, ...itemProps}=item;
        return(
            <Card
            key={id}
            {...itemProps}
            title={title}
            onDelete={()=>onDelete(title,id)}
            getPrevInfo={()=>getPrevInfo(title)}
            changeItem={()=>{changeItem(title)}}
            />
        )
    })
    return(
        <div className="cards" >
            <div className="cards__container">
            {elements}
            </div>
        </div>
    )
}
export default Cards;