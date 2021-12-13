import React from "react";

import { generatePath, Link } from "react-router-dom";

import { PersonSearch } from "@mui/icons-material";
import { Box, Button, Pagination, Stack, TextField } from "@mui/material";

import { MemberEntity } from "../member";
import { ApiResult, getUsers } from "../member/api";
import { OrganisationContext } from "../providers";
import { AppConstants } from "../app.constants";

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organisation, setOrganisation] = React.useState<string>("");
  const [page, setPage] = React.useState<number>(AppConstants.defaultPage);
  const [pageTotal, setPageTotal] = React.useState<number>(0);

  const organisationContext = React.useContext(OrganisationContext);

  React.useEffect(() => {
    setOrganisation(organisationContext.name);
    searchOrganisation(AppConstants.defaultPage);
  }, []);

  const searchOrganisation = (page: number) => {
    getUsers(getOrganisationName(), page, AppConstants.defaultPageSize)
      .then(updatePagination)
      .then(setMembers)
      .then(UpdateOrganisationContext);
  };

  const getOrganisationName = () =>
    organisation !== "" ? organisation : organisationContext.name;

  const UpdateOrganisationContext = () => {
    organisationContext.setOrganisationOnContext(organisation);
  };

  const updatePagination = (result: ApiResult): MemberEntity[] => {
    setPageTotal(result.total);
    return result.data;
  };

  const getPageNumber = () =>
    Math.ceil(pageTotal / AppConstants.defaultPageSize);
  const clearPagination = () => setPage(AppConstants.defaultPage);

  const changePageHandle = (
    event: React.ChangeEvent<HTMLInputElement>,
    newPage: number
  ) => {
    setPage(newPage);
    searchOrganisation(newPage);
  };

  const searchHandler = () => {
    clearPagination();
    searchOrganisation(AppConstants.defaultPage);
  };

  return (
    <>
      <h2>Hello from List page</h2>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          value={organisation}
          onChange={(value) => setOrganisation(value.target.value)}
          label="Buscar organización"
          variant="standard"
        />
        <Button
          variant="contained"
          endIcon={<PersonSearch />}
          onClick={searchHandler}
        >
          Buscar
        </Button>
      </Box>

      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {members &&
            members.map((member, index) => (
              <tr key={index}>
                <td>
                  <img src={member.avatar_url} style={{ width: "5rem" }} />
                </td>
                <td>
                  <span>{member.id}</span>
                </td>
                <td>
                  <Link to={generatePath("/detail/:id", { id: member.login })}>
                    {member.login}
                  </Link>{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Stack spacing={2}>
        <Pagination
          count={getPageNumber()}
          variant="outlined"
          onChange={changePageHandle}
          page={page}
        />
      </Stack>
    </>
  );
};
