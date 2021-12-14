import { Box, TextField } from "@mui/material";
import React from "react";
import { useDebounce } from "use-debounce/lib";
import { AppConstants } from "../app.constants";
import {
  CharacterEntity,
  CharacterList,
  getCharactersByName,
} from "../character";

const RickAndMortyPage: React.FC = () => {
  const [list, setList] = React.useState<CharacterEntity[]>([]);
  const [filter, setFilter] = React.useState<string>("");
  const [searchTerm] = useDebounce(
    filter,
    AppConstants.searchDebounceThreshold
  );

  React.useEffect(() => {
    getCharactersByName(filter).then(renderCharacters);
  }, [searchTerm]);

  const renderCharacters = ({ results }) => {
    setList(results);
  };

  return (
    <Box sx={{ backgroundColor: "whitesmoke", padding: "1rem" }}>
      <h2>Hi from Rick & Morty Page</h2>

      <TextField
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        label="Search Character"
        variant="standard"
      />
      <CharacterList list={list}></CharacterList>
    </Box>
  );
};

export default RickAndMortyPage;
