import Card from "../card/card.component";
import './card-list.styles.css'
//deconstruction = cast it as a variable and use it as a variable

const CardList =({ monsters })=>(
        //prop = properties
        //if ui is based on props then the page must rerender
        //props directly gives us new elmements
        //in this case the monsters are the props
            <div className='card-list' >
               {monsters.map((monster)=>{
                return <Card monster={monster} key={monster.id}/>;
                })}
            </div>
);


export default CardList;