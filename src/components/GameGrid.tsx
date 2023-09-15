import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}
interface GameObject {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GameObject>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return (
    <div>
      <ul>
        {games.map((game) => (
          <li>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
