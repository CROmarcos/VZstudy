import HomeIcon from "../HomeIcon/HomeIcon";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div>
        <HomeIcon />
      </div>
      <h1 className="Header__Title">Studiraj u Varaždinu</h1>
      <Navigation />
    </div>
  );
};

export default Header;
