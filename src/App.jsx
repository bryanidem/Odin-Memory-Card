import { useEffect, useState } from "react";

const downloadImages = async () => {
    const TOTAL_POKEMON = 1010;
    const randomIds = Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * TOTAL_POKEMON + 1)
    );

    const fetches = randomIds.map(async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return data.name;
    });

    const data = await Promise.all(fetches);
    console.log(data);
};

const App = () => {
    const [score, setScore] = useState(0);
    const [images, setImages] = useState([]);

    downloadImages();

    return <h1>Hi</h1>;
    // useEffect()
};

export default App;
