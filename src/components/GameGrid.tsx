import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useFetchGames from "../hooks/UseFetchGames";
import { SimpleGrid, Skeleton, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeletons from "./GameCardSkeletons";

const GameGrid = () => {
  const { games, isLoading, error } = useFetchGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeletons key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
