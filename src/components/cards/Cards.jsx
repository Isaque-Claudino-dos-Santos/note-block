import './style.css';


export default function Cards(props) {
    let title = props.title;
    let note = props.note;
    
     return (
        <li>
            <h1>{title}</h1>
            <p>{note}</p>
        </li>
    )
}