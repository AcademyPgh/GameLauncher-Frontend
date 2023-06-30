import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

function GameCard({ game }) {
  // Vanilla Tilt solution (backstop in case Spring doesn't pan out)
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card-shape"), {
      max: 10,
      scale: 1.05,
      glare: true,
      "max-glare": 0.25,
    });
  });

  return (
    <div className="card-shape">
      <img className="card-image" src={game.image} />
      <div className="card-text">
        <div className="title">{game.title}</div>
        <div className="blurb">{game.blurb}</div>
        <a
          className="launch"
          href="https://youtu.be/p7YXXieghto"
          target="_blank"
        >
          Launch
        </a>
      </div>
    </div>
  );
}

export default GameCard;
