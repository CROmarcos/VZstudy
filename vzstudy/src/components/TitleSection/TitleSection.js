import './TitleSection.scss'

const TitleSection=(props)=>{
    return(
        <div className='Title'>
            <h1>{props.title}</h1>
        </div>
    )
}

export default TitleSection