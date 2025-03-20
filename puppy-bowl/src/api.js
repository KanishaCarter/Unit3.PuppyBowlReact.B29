const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/players";

export async function fetchPlayers() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.data.players;
  } catch (error) {
    console.error("Error fetching players:", error);
  }
}

export async function fetchPlayerById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data.data.player;
  } catch (error) {
    console.error("Error fetching player details:", error);
  }
}

export async function createPlayer(playerData) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(playerData),
    });
    return response.json();
  } catch (error) {
    console.error("Error adding player:", error);
  }
}

export async function deletePlayer(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  } catch (error) {
    console.error("Error deleting player:", error);
  }
}
