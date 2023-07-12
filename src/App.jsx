import "./App.css";
import gameData from "./gameData";
import GameCard from "./gameCard";
import genreData from "./genreData";
import GenreFilter from "./genreFilter";

function App() {
  return (
    <>
      <div className="header">
        <div className="app-logo"></div>
        <input className="search-bar" placeholder="Search game title"></input>
      </div>
      <div className="main">
        <div className="sidebar">
          <div className="sidebar-title">Genre</div>
          {genreData.map((genre) => (
            <GenreFilter genre={genre} />
          ))}
        </div>
        <div className="card-grid">
          {gameData.map((game) => (
            <GameCard game={game} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
