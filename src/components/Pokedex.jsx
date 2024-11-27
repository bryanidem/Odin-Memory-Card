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

    const handleClick = (pokemon) => {
        console.log(`Card clicked: ${pokemon.name}`);
        if (!guesses.includes(pokemon.name)) {
            setGuesses([...guesses, pokemon.name]);
            setPokemons(shuffleArray(pokemons));
            setBestScore(guesses.length + 1);
        } else {
            console.log(`${pokemon.name} is already on choosen`);
        }
        console.log(guesses);
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
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
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
            <div className="pokedex-bottom"></div>
        </div>
    );
};

export default Pokedex;
