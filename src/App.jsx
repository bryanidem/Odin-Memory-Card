import { useEffect, useState } from "react";
import Pokedex from "./components/Pokedex";
import "./styles/App.css";

const App = () => {
    const [pokemons, setPokemons] = useState([]);

    const uniqueRandomNumbers = (count, min, max) => {
        const range = Array.from({ length: max - min + 1 }, (_, i) => i + min);
        for (let i = range.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [range[i], range[j]] = [range[j], range[i]];
        }
        return range.slice(0, count);
    };

    useEffect(() => {
        const fetchPokemons = async () => {
            const TOTAL_POKEMON = 1025;
            const randomIds = uniqueRandomNumbers(12, 0, TOTAL_POKEMON);
            try {
                const fetches = randomIds.map(async (id) => {
                    const response = await fetch(
                        `https://pokeapi.co/api/v2/pokemon/${id}`
                    );
                    const data = await response.json();

                    return {
                        name: data.name,
                        sprite: data.sprites.front_default,
                        id: data.id,
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
    return <Pokedex pokemons={pokemons} setPokemons={setPokemons} />;

    // useEffect()
};

export default App;
