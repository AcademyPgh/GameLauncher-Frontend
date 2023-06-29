import { useState } from "react";
import { useSpring, animated } from "react-spring";

const calculate = (x, y, s) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.05];
const transform = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function MakeCard({game}) {
    const [isToggled, setToggle] = useState(false);
    const tilt = useSpring();
    const flyout = useSpring();

    return (
        <animated.div className="card-shape" onClick={() => setToggle(!isToggled)}>
            <img className="card-image" src={game.image} />
            <div className="card-text">
                <div className="title">{game.title}</div>
                <div className="blurb">{game.blurb}</div>
                <a className="launch" href="https://youtu.be/p7YXXieghto" target="_blank">Launch</a>
            </div>
        </animated.div>
    );
};

export default MakeCard;