import Cards from "./components/cards";
import {data} from "./data";
export default function App() {
    const datashow =data.map((el) => <Cards img={el.img} title={el.title} desc={el.desc} review={el.review} price={el.price} />);

    return(
        <div>
            {datashow}   
        </div>
    );
    
}
