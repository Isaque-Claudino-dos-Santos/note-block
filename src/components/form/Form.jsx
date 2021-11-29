import './style.css';

export default function Form (props) {
    
    
    let submitValue = (ev) => {
        let title = document.querySelector('.title').value;
        let text =  document.querySelector('.note').value;
        
        ev.preventDefault();
        props.getValue(title,text);
    }

    return (
        <form>
            <label>
                Title
                <input type='text' className='title' />
            </label>
            <label>
                Note
                <textarea className='note'/>
            </label>
            <input type="submit" value="Enviar" onClick={submitValue}/>
        </form>
    )
}