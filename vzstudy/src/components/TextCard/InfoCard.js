import "./TextCard.scss";
import HomePageIcon from "../../slike/homepage.png";
import LocationIcon from "../../slike/location.png";
import MailboxIcon from "../../slike/mailbox.png";

const InfoCard = (props) => {
  return (
    <div className="TextCard Info">
      <div className="TextCard__Header">
        <h2 className="TextCard__Title">Informacije</h2>
      </div>
      <p className="TextCard__Content">
        <li>
          <img className="Info__Icon" src={HomePageIcon} alt="web stranica" />{" "}
          {props.web}
        </li>
        <li>
          <img
            className="Info__Icon"
            src={MailboxIcon}
            alt="mail adresa referade"
          />{" "}
          {props.referada}{" "}
        </li>
        <li>
          <img className="Info__Icon" src={LocationIcon} alt="lokacija" />{" "}
          {props.adresa}
        </li>
      </p>
    </div>
  );
};

export default InfoCard;
