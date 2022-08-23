export type User = {
  id: string;
  userName: string;
  roles: Array<string>;
};
export type SignupResponse = User & {
  token: string;
  refreshToken: string;
};

export type ApiContext = {
  apiRootUrl: string;
};
