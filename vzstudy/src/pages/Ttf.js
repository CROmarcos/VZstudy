import Page from '../components/Page/Page';
import TitleSection from '../components/TitleSection/TitleSection';
import Slika from '../slike/ttf.jpg'

const Ttf=()=>{
    return(
        <div>
            <TitleSection title='Tekstilno-tehnološki fakultet' />
            <Page image={Slika} alt='TTF' smjerovi={['Tekstilni i modni dizajn (3+2)', 'Tekstilna tehnologija i inženjerstvo (3+2)', 'Tekstilna, odjevna i obućarska tehnologija (PDS)']} web='ttf.unizg.hr' referada='referada@ttf.unizg.hr' adresa='Hallerova aleja 6' />
        </div>
    );
}

export default Ttf