import Page from '../components/Page/Page';
import TitleSection from '../components/TitleSection/TitleSection';
import Slika from '../slike/gtf.jpg'

const Gtf=()=>{
    return(
        <div>
            <TitleSection title='Geotehnički fakultet' />
            <Page image={Slika} alt='GTF' smjerovi={['Inženjerstvo okoliša (PDS)', 'Geoinženjerstvo okoliša (DS)', 'Upravljanje vodama (DS)', 'Upravljanje okolišem (DS)']} web='gfv.unizg.hr' referada='studentska.referada@gfv.unizg.hr' adresa='Hallerova aleja 7' />
        </div>
    );
}

export default Gtf