import "./App.css";
import gameData from "./gameData";
import MakeCard from "./makeCard";
import genreData from "./genreData";
import MakeFilter from "./makeFilter";

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
          {genreData.map((genre) => <MakeFilter genre={genre}/>)}
        </div>
        <div className="card-grid">
          {gameData.map((game) => <MakeCard game={game}/>)}
        </div>
      </div>
    </>
  );
};

export default App;