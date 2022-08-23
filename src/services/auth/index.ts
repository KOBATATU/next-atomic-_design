import { ApiContext, User, SignupResponse } from "types/data";
import { fetcher } from "utils/fetcher";

export type SigninParams = {
  username: string;
  password: string;
};

//ログイン
/**
 *
 * @param context
 * @param params
 * @returns
 */
export const signin = async (
  context: ApiContext,
  params: SigninParams
): Promise<SignupResponse> => {
  return await fetcher(`${context.apiRootUrl}/api/auth/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
};
