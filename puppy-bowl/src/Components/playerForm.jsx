import { useState } from "react";
import { createPlayer } from "../api";

function PlayerForm({ onPlayerAdded }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPlayer = await createPlayer({ name, breed });
    onPlayerAdded(newPlayer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Player Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <button type="submit">Add Player</button>
    </form>
  );
}

export default PlayerForm;
