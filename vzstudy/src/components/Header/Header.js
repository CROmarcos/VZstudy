import HomeIcon from "../HomeIcon/HomeIcon";
import Navigation from "../Navigation/Navigation";
import HambyMenu from "../HambyMenu/HambyMenu";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__Part LeftSide">
        <div className="Header__IconContainer">
          <HomeIcon />
        </div>
        <h1 className="Header__Title">Studiraj u Varaždinu</h1>
      </div>
      <div className="Header__Part RightSide">
        <div className="Header__Desktop">
          <Navigation />
        </div>
        <div className="Header__Smartphone">
          <HambyMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
