import { Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { CharacterEntity, getCharacterById } from "../character";

export const RickAndMortyDetailPage: React.FC = () => {
  const [character, setCharacter] = React.useState<CharacterEntity>(null);
  const { id } = useParams();

  React.useEffect(() => {
    getCharacterById(id).then(setCharacter);
  }, []);

  return (
    <div>
      {character && (
        <section>
          <Typography variant="h4" component="div">
            {character.name}
          </Typography>
          <Typography variant="h5" component="div">
            {character.species} - {character.gender}
          </Typography>
          <img src={character.image}></img>
        </section>
      )}
      <Link to="/rick-and-morty">Back to list page</Link>
    </div>
  );
};
