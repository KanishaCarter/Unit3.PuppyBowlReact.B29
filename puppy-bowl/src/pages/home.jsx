import { useEffect, useState } from "react";
import { fetchPlayers } from "../api";
import PlayerList from "../components/PlayerList";
import SearchBar from "../components/SearchBar";

function Home() {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getPlayers() {
      const data = await fetchPlayers();
      setPlayers(data);
    }
    getPlayers();
  }, []);

  // Filter players by search input
  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Puppy Bowl Players</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <PlayerList players={filteredPlayers} />
    </div>
  );
}

export default Home;
