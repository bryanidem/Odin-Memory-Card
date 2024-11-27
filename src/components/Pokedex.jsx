import "../styles/Pokedex.css";
import Card from "./Card";
import pokeballIcon from "../assets/images/pokeball.png";
import { useState } from "react";

const Pokedex = ({ pokemons, setPokemons }) => {
    const [guesses, setGuesses] = useState([]);
    const [bestScore, setBestScore] = useState(0);

    const shuffleArray = (arr) => {
        const shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const getColor = (index) => {
        return index < guesses.length
            ? "rgb(35, 202, 244)"
            : "rgb(15, 66, 233)";
    };

    const handleClick = (pokemon) => {
        console.log(`Card clicked: ${pokemon.name}`);
        if (!guesses.includes(pokemon.name)) {
            setGuesses([...guesses, pokemon.name]);
            setPokemons(shuffleArray(pokemons));
        } else {
            if (guesses.length > bestScore) {
                setBestScore(guesses.length);
            }
            setGuesses([]);
        }
    };
    return (
        <div id="pokedex">
            <div className="pokedex-top">
                <div className="buttons">
                    <div className="blue">
                        <div></div>
                    </div>
                    <div>
                        <button className="red"></button>
                        <button className="yellow"></button>
                        <button className="green"></button>
                    </div>
                </div>
            </div>
            <div className="pokedex-content">
                <div className="cards">
                    {pokemons.map((pokemon) => (
                        <Card
                            pokemon={pokemon}
                            key={pokemon.id}
                            onClick={() => handleClick(pokemon)}
                        />
                    ))}
                </div>

                <div className="display-score">
                    <div className="score">
                        <p>
                            Score: <img src={pokeballIcon} /> x {guesses.length}
                        </p>
                        <p>
                            Best Score: <img src={pokeballIcon} /> x {bestScore}
                        </p>
                    </div>

                    <div className="blue-buttons">
                        {Array.from({ length: 12 }, (_, index) => (
                            <div
                                key={index}
                                className="color-div"
                                style={{
                                    backgroundColor: getColor(index),
                                }}
                            ></div>
                        ))}
                    </div>

                    <div className="grey-buttons">
                        <div className="right-buttons">
                            <div></div>
                            <div></div>
                        </div>

                        <div className="left-buttons">
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pokedex-bottom">
                <p>
                    <img src={pokeballIcon} />
                    <a href="#">Source Code</a> |{" "}
                    <a href="https://github.com/bryanidem">bryanidem</a>
                </p>
            </div>
        </div>
    );
};

export default Pokedex;
