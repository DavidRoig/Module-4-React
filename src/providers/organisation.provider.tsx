import React from 'react';

interface Organisation {
  name: string;
}
interface Context extends Organisation {
  setOrganisationOnContext: (organisation: string) => void;
}
const initialOrganisation = "lemoncode";

export const OrganisationContext = React.createContext<Context>({
  name: initialOrganisation,
  setOrganisationOnContext: () =>
    console.warn("Error: El contexto ha sido usado fuera del provider "),
});

export const OrganisationContextProvider: React.FC = (props) => {
  const { children } = props;
  const [organisation, setOrganisation] =
    React.useState<string>(initialOrganisation);
  return (
    <OrganisationContext.Provider
      value={{ name: organisation, setOrganisationOnContext: setOrganisation }}
    >
      {children}
    </OrganisationContext.Provider>
  );
};
