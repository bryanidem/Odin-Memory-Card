const Card = ({ pokemon }) => {
    return (
        <div className="card">
            <img src={pokemon.sprite} alt={pokemon.name} />
            <p>{pokemon.name}</p>
        </div>
    );
};

export default Card;
