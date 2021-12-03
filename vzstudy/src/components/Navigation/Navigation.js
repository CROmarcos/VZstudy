import { Link } from "react-router-dom";
import './Navigation.scss';

const Navigation = () => {
  return (
    <ul className="Navigation">
      <li className="Navigation__Item">
        <Link className="Navigation__Link" to="/foi">FOI</Link>
      </li>
      <li className="Navigation__Item">
        <Link className="Navigation__Link" to="/gtf">GTF</Link>
      </li>
      <li className="Navigation__Item">
        <Link className="Navigation__Link" to="/unin">Sjever</Link>
      </li>
      <li className="Navigation__Item">
        <Link className="Navigation__Link" to="/ttf">TTF</Link>
      </li>
    </ul>
  );
};

export default Navigation;
