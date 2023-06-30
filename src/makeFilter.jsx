function GenreFilter({genre}) {
    return (
        <div className="genre">
            <img className="genre-icon" src={genre.icon}></img>
            <div className="genre-name">{genre.name}</div>
        </div>
    );
}

export default GenreFilter;