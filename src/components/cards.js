export default function card(props) {
    return (
        <>
        
        <div id="card">
            <img src={props.img} alt="img" style={{ width: '300px',borderRadius:'15px'}} />
            <h2>{props.title}</h2>
            <h5>{props.desc}</h5>
            <p>{props.review}</p>
            <p>{props.price}</p>
        </div>
        </>
    );
}
