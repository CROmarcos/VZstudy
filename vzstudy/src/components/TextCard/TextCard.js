import './TextCard.scss'

const TextCard=(props)=>{
    return(
        <div className='TextCard'>
            <h2 className='TextCard__Title'>{props.title}</h2>
            <p className='TextCard__Content'>{props.content}</p>
        </div>
    );
}

export default TextCard