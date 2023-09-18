import React from "react";
import useFetchGenere from "../hooks/useGenres";
import { Text, VStack } from "@chakra-ui/react";

const GenereList = () => {
  const { genres, error } = useFetchGenere();

  return (
    <>
      {genres.map((genre) => (
        <VStack>
          {" "}
          {error && <Text> {error}</Text>}
          <Text> {genre.name}</Text>
        </VStack>
      ))}
    </>
  );
};

export default GenereList;
