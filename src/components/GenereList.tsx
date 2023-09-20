import useGenre, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { wrap } from "framer-motion";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenereList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenre();
  if (error) return null;
  return (
    <>
      {isLoading && <Spinner />}

      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="40px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />

              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                key={genre.name}
                variant="unstyled"
                textDecoration="none"
                onClick={() => onSelectGenre(genre)}
              >
                {" "}
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenereList;
