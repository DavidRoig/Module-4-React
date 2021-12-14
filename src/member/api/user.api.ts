import { MemberEntity } from '../';

export const getUsers = (
  organisation: string,
  page: number,
  pageSize: number
): Promise<ApiResult> => {
  return fetch(`https://api.github.com/orgs/${organisation}/members`)
    .then((response) => response.json())
    .then(validateApiResult)
    .then((result) => paginate(result, page, pageSize));
};

const validateApiResult = (memberResult: MemberEntity[]): MemberEntity[] => {
  if (!Array.isArray(memberResult)) {
    throw Error("Opps.... Organisation not found.");
  }
  return memberResult;
};

const paginate = (
  memberList: MemberEntity[],
  page: number,
  pageSize: number
): ApiResult => {
  return {
    data: memberList.slice(
      pageSize * (page - 1),
      pageSize * (page - 1) + pageSize
    ),
    total: memberList.length,
  };
};

export interface ApiResult {
  data: MemberEntity[];
  total: number;
}
