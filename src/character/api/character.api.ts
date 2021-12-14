import { AppConstants } from "../../app.constants";

export const getCharactersByName = (name: string) => {
  return fetch(getByName(name)).then((response) => response.json());
};

export const getCharacterById = (id: number) => {
  return fetch(getById(id)).then((response) => response.json());
};

const getByName = (searchTerm: string) =>
  `${AppConstants.apiUrl}?name=${searchTerm}`;
const getById = (searchTerm: number) => `${AppConstants.apiUrl}${searchTerm}`;
