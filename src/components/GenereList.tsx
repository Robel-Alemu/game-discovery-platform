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
interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenereList = ({ onSelectGenre }: Props) => {
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
                fontSize="lg"
                key={genre.name}
                variant="link"
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
