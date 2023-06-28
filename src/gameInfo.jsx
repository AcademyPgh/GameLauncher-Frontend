function GameInfo({game}) {
    return (
        <div className="card-shape">
            <img className="card-image" src={game.image} />
            <div className="card-text">
                <div className="title">{game.title}</div>
                <div className="blurb">{game.blurb}</div>
                <a className="launch" href="https://youtu.be/p7YXXieghto" target="_blank">Launch</a>
            </div>
        </div>
    );
}

export default GameInfo;