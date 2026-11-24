import "../css/card.css";

function Card({ title, img, release, vote, overview, id }) {
  return (
    <>
      <div className="card">
        <span
          style={{
            padding: "15px",
            background: "#000",
            borderRadius: "10px",
            zIndex: "10",
            position: "absolute",
            left: "5px",
            top: "5px",
            color: "#0f0",
            fontFamily: '"alg"',
          }}
        >
          #{id}
        </span>
        <div className="image">
          <img src={img} alt={title} />
        </div>
        <div className="info">
          <p>
            <span>{title}</span>
          </p>
          <p>
            <span>{release}</span>
          </p>
          <p>
            <span>Vote: {vote}</span>
          </p>
          <p>
            <span>{overview}</span>
          </p>
        </div>
      </div>
    </>
  );
}
export default Card;
