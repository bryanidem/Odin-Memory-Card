import "../styles/Pokedex.css";
import Card from "./Card";

const Pokedex = ({ pokemons }) => {
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
                        <Card pokemon={pokemon} key={pokemon.id} />
                    ))}
                </div>

                <div className="display-score">
                    <div className="score">
                        <p>Score: </p>
                        <p>Best Score:</p>
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
