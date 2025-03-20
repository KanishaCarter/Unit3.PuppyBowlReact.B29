import PlayerCard from "./PlayerCard";

function PlayerList({ players }) {
  return (
    <div>
      {players.length > 0 ? (
        players.map(player => <PlayerCard key={player.id} player={player} />)
      ) : (
        <p>No players found.</p>
      )}
    </div>
  );
}

export default PlayerList;
