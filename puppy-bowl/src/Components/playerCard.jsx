import { Link } from "react-router-dom";

function PlayerCard({ player }) {
  return (
    <div>
      <h3>{player.name}</h3>
      <img src={player.imageUrl} alt={player.name} width="100" />
      <p>Breed: {player.breed}</p>
      <Link to={`/player/${player.id}`}>See Details</Link>
    </div>
  );
}

export default PlayerCard;
