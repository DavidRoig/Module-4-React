import React from 'react';
import { AppConstants } from "../app.constants";

interface Organisation {
  name: string;
}
interface Context extends Organisation {
  setOrganisationOnContext: (organisation: string) => void;
}

export const OrganisationContext = React.createContext<Context>({
  name: AppConstants.organisationInitial,
  setOrganisationOnContext: () =>
    console.warn("Error: El contexto ha sido usado fuera del provider "),
});

export const OrganisationContextProvider: React.FC = (props) => {
  const { children } = props;
  const [organisation, setOrganisation] = React.useState<string>(
    AppConstants.organisationInitial
  );
  return (
    <OrganisationContext.Provider
      value={{ name: organisation, setOrganisationOnContext: setOrganisation }}
    >
      {children}
    </OrganisationContext.Provider>
  );
};
