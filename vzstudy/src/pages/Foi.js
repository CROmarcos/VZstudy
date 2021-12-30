import MainImage from '../components/MainImage/MainImage';
import Slika from '../slike/foi.jpg'

const Foi=()=>{
    return(
        <div>
            <h1>Fakultet organizacije i informatike</h1>
            <MainImage image={Slika} alt='FOI'/>
        </div>
    );
}

export default Foi