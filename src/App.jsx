import './App.css';
import gameData from './gameData';
import GameInfo from './gameInfo';
import genreData from './genreData';
import GenreInfo from './genreInfo';

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
          {genreData.map((genre) => <GenreInfo genre={genre}/>)}
        </div>
        <div className="cards-grid">
          {gameData.map((game) => <GameInfo game={game}/>)}
        </div>
      </div>
    </>
  );
}

export default App;