import MainImage from "../MainImage/MainImage";
import InfoCard from "../TextCard/InfoCard";
import TextCard from "../TextCard/TextCard";
import "./Page.scss";

const Page = (props) => {
  return (
    <div className="Page">
      <div className="Page__Side Desktop">
        <TextCard title="Studiji" smjerovi={props.smjerovi} />
      </div>
      <div className="Page__Center">
        <MainImage image={props.image} alt={props.alt} />
      </div>
      <div className="Page__Side Desktop">
        <InfoCard
          web={props.web}
          referada={props.referada}
          adresa={props.adresa}
        />
      </div>
      <div className="Tablet">
        <div className="Page__Side">
          <TextCard title="Studiji" smjerovi={props.smjerovi} />
        </div>
        <div className="Page__Side">
          <InfoCard
            web={props.web}
            referada={props.referada}
            adresa={props.adresa}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
