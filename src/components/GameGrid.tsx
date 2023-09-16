import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useFetchGames from "../hooks/UseFetchGames";
import { Spinner, Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, isLoading, error } = useFetchGames();

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
