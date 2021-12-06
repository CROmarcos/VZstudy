import HomeIcon from "../HomeIcon/HomeIcon";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__Part">
        <div className="Header__IconContainer">
          <HomeIcon />
        </div>
        <h1 className="Header__Title">Studiraj u Varaždinu</h1>
      </div>
      <div className="Header__Part RightSide">
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
