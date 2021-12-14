interface Constants {
  defaultPageSize: number;
  defaultPage: number;
  organisationInitial: string;
  searchDebounceThreshold: number;
  apiUrl: string;
}

export const AppConstants: Constants = {
  defaultPage: 1,
  defaultPageSize: 5,
  organisationInitial: "lemoncode",
  searchDebounceThreshold: 1000,
  apiUrl: "https://rickandmortyapi.com/api/character/",
};
