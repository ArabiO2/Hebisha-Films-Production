import "./App.css";
import Card from "/card";
import Header from "/header";
import { useState, useEffect } from "react";
function Wel() {
  return (
    <h1 className="wel">
      <span>💀 قناة حبيشة للإنتاج الإعلامي</span>
    </h1>
  );
}

function App() {
  const [films, setFilms] = useState([]);
  const [num, setNum] = useState(0);
  function Title() {
    return (
      <h3
        style={{
          width: "max-content",
          margin: "10px auto",
          padding: "10px",
          color: "#0f0",
          fontFamily: '"alg"',
          fontSize: "24px",
        }}
      >
        Films ({num})
      </h3>
    );
  }
  useEffect(() => {
    async function addFilms() {
      const API_KEY = "b09bfbe0032a2477431e0d76e65fb47e";
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
      const res = await fetch(url);

      const data = await res.json();

      let filmsArr = data.results;
      setFilms(filmsArr);
      setNum(filmsArr.length);
    }
    addFilms();
  });

  return (
    <>
      <Header />
      <Wel />
      <Title />
      <div className="cards">
        {films.map((film) => (
          <Card
            key={film.id}
            id={film.id}
            overview={film.overview}
            title={film.title}
            img={
              film.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${film.backdrop_path}`
                : ""
            }
            vote={film.vote_average}
            release={film.release_date}
          />
        ))}
      </div>
    </>
  );
}

export default App;
