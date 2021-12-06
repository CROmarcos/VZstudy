import icon from "../../slike/HomeIcon.png";
import "./HomeIcon.scss";
import { Link } from "react-router-dom";

const HomeIcon = () => {
  return (
    <div className="Ikona">
      <Link to="/">
        <img src={icon} alt="početna" />
      </Link>
    </div>
  );
};

export default HomeIcon;
