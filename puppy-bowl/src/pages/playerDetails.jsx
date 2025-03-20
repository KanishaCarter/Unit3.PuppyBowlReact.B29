import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPlayerById } from "../api";

function PlayerDetails() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function getPlayer() {
      const data = await fetchPlayerById(id);
      setPlayer(data);
    }
    getPlayer();
  }, [id]);

  if (!player) return <p>Loading...</p>;

  return (
    <div>
      <h2>{player.name}</h2>
      <img src={player.imageUrl} alt={player.name} width="150" />
      <p>Owner: {player.owner}</p>
      <p>Team: {player.teamName}</p>
    </div>
  );
}

export default PlayerDetails;
