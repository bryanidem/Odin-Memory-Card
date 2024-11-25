import "../styles/Pokedex.css";

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
                <div>
                    <ul>
                        {pokemons.map((pokemon) => (
                            <li key={pokemon.name}>
                                <div className="card">
                                    <img
                                        src={pokemon.sprite}
                                        alt={pokemon.name}
                                    />
                                    <p>{pokemon.name}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="pokedex-bottom"></div>
        </div>
    );
};

export default Pokedex;
