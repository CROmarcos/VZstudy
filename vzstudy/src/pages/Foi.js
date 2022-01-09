import MainImage from '../components/MainImage/MainImage';
import TextCard from '../components/TextCard/TextCard';
import Slika from '../slike/foi.jpg'

const Foi=()=>{
    return(
        <div>
            <h1>Fakultet organizacije i informatike</h1>
            <TextCard title="Smjerovi" content='IPS, EP, PITUP' />
            <MainImage image={Slika} alt='FOI'/>
            <TextCard title="Referada" content="099"/>
        </div>
    );
}

export default Foi