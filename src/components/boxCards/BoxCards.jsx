import Cards from "../cards/Cards"
import './style.css';

export default function BoxCards(props) {
       
    return (
        <ul className='boxCards'>
            {
                props.cardsValue.map((element,index) => {
                    return ( 
                        <Cards key={index} title={element.title} note={element.note}/>
                    )
                })
            }
        </ul>
    )
}