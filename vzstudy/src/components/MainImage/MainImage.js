import './MainImage.scss'

const MainImage=(props)=>{
    return(
        <div className='Main-Container'>
            <img className='Main-Image' src={props.image} alt={props.alt} />
        </div>
    )
}

export default MainImage