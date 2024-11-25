import { useEffect, useState } from "react";
import Pokedex from "./components/Pokedex";

const App = () => {
    const [score, setScore] = useState(0);
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            const TOTAL_POKEMON = 1010;
            const randomIds = Array.from({ length: 6 }, () =>
                Math.floor(Math.random() * TOTAL_POKEMON + 1)
            );
            try {
                const fetches = randomIds.map(async (id) => {
                    const response = await fetch(
                        `https://pokeapi.co/api/v2/pokemon/${id}`
                    );
                    const data = await response.json();
                    console.log(data);
                    return {
                        name: data.name,
                        sprite: data.sprites.front_default,
                    };
                });
                const pokemonInfo = await Promise.all(fetches);

                setPokemons(pokemonInfo);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPokemons();
    }, []);
    return <Pokedex pokemons={pokemons} />;

    // useEffect()
};

export default App;
