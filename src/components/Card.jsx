const Card = ({ pokemon, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <img src={pokemon.sprite} alt={pokemon} />
            <p>{pokemon.name}</p>
        </div>
    );
};

export default Card;
