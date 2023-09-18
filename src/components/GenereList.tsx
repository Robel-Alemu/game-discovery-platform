import useGenre from "../hooks/useGenres";
import { Text, VStack } from "@chakra-ui/react";

const GenereList = () => {
  const { data, error } = useGenre();

  return (
    <>
      {data.map((data) => (
        <VStack>
          {" "}
          {error && <Text> {error}</Text>}
          <Text> {data.name}</Text>
        </VStack>
      ))}
    </>
  );
};

export default GenereList;
