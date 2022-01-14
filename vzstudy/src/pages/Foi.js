import Page from '../components/Page/Page';
import TitleSection from '../components/TitleSection/TitleSection';
import Slika from '../slike/foi.jpg'

const Foi=()=>{
    console.log(Slika)
    return(
        <div>
            <TitleSection title='Fakultet organizacije i informatike' />
            <Page image={Slika} alt='FOI' smjerovi={['Informatika (3+2)', 'Ekonomika poduzetništva (3+2)', 'PITUP (Stručni studij)']} web='foi.unizg.hr' referada='referada@foi.unizg.hr' adresa='Pavlinska 2' />
        </div>
    );
}

export default Foi