import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { generatePath, useHistory } from "react-router-dom";
import { CharacterEntity } from ".";

interface Props {
  list: CharacterEntity[];
}
export const CharacterList: React.FC<Props> = (props) => {
  const { list } = props;
  const history = useHistory();

  const handleClick = (id: number) => {
    history.push(generatePath("/rick-and-morty/:id", { id }));
  };

  return (
    <div>
      {list?.map((item) => {
        return (
          <Card key={item.id} sx={{ maxWidth: 345, margin: "1rem" }}>
            <CardActionArea
              onClick={() => {
                handleClick(item.id);
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                  {item.species} - {item.gender}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
};
