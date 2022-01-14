import "./TextCard.scss";

const TextCard = (props) => {
  return (
    <div className="TextCard">
      <div className="TextCard__Header">
        <h2 className="TextCard__Title">{props.title}</h2>
      </div>
      <p className="TextCard__Content">
        {props.smjerovi.map((smjer) => (
          <li>{smjer}</li>
        ))}
      </p>
    </div>
  );
};

export default TextCard;