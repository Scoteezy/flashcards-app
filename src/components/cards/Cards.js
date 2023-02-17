import Card from '../card/Card'

import '../../style/container.scss'
import './Cards.scss'

const Cards = ({title,description})=>{



    // const element = data.map(item=>{
    // const {id, ...itemProps}=item;
    //     return(
    //         <Card
    //         key={id}
    //         {...itemProps}

    //         />
    //     )
    // })
    return(
        <div className="cards">
            <div className="cards__container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>
    )
}
export default Cards;