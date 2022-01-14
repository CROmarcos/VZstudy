import Page from '../components/Page/Page';
import TitleSection from '../components/TitleSection/TitleSection';
import Slika from '../slike/sjever.jpg'

const Unin=()=>{
    return(
        <div>
            <TitleSection title='Sveučilište Sjever' />
            <Page image={Slika} alt='UNIN' smjerovi={['Elektrotehnika', 'Proizvodno strojarstvo', 'Multimedija, oblikovanje i primjena', 'Logistika i mobilnost', 'Graditeljstvo', 'Sestrinstvo', 'Mehatronika', 'Fizioterapija', 'Komunikologija, mediji i novinarstvo', 'Medijski dizajn', 'Poslovanje i menadžment',
             'Prehrambena tehnologija', 'Geodezija i geomatika', 'Glazba i mediji', 'Zaštita okoliša, recikliranje i ambalaža']}
             web='unin.hr' referada='referada.vz@unin.hr' adresa='104. brigade 3'
             />
        </div>
    );
}

export default Unin