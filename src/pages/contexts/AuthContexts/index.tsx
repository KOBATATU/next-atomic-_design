import React, { useContext } from "react";
import useSWR from "swr";
import { signin } from "services/auth/index";
import type { ApiContext, SignupResponse, User } from "types/data";
import { fetcher } from "utils/fetcher";
import {
  parseCookies,
  setCookie as _setCookie,
  destroyCookie as _destroyCookie,
} from "nookies";
import { NextPageContext } from "next";

type AuthContextType = {
  authUser?: User;
  isLoading: boolean;
  signin: (username: string, password: string) => Promise<void>;
  mutate: (
    data?: User | Promise<User>,
    shouldRevalidate?: boolean
  ) => Promise<User | undefined>;
};

type AuthContextProviderProps = {
  context: ApiContext;
  authUser?: User;
};

//初期値
const AuthContext = React.createContext<AuthContextType>({
  authUser: undefined,
  isLoading: false,
  signin: async () => Promise.resolve(),
  mutate: async () => Promise.resolve(undefined),
});

//汎用Context作成
export const useAuthContext = () => useContext<AuthContextType>(AuthContext);

export function getCookie(ctx?: NextPageContext) {
  const cookie = parseCookies(ctx);
  return cookie;
}

export function destroyCookie(key: string, ctx?: NextPageContext) {
  _destroyCookie(ctx, key);
}

export function setCookie(
  cookie: { key: string; value: string },
  ctx?: NextPageContext
) {
  _setCookie(ctx, cookie.key, cookie.value, {
    maxAge: 30 * 24 * 60 * 60,
  });
}

/**
 * 認証コンテキストプロバイダー
 * @param params パラメータ
 */
export const AuthContextProvider = ({
  context,
  authUser,
  children,
}: React.PropsWithChildren<AuthContextProviderProps>) => {
  //https://swr.vercel.app/ja/docs/mutation
  const { data, error, mutate } = useSWR<User>(
    [
      `${context.apiRootUrl.replace(/\/$/g, "")}/api/user`,
      {
        headers: { Authorization: `Bearer ${getCookie().token}` },
      },
    ],
    fetcher
  );
  const isLoading = !data && !error;

  // サインイン
  const signinInternal = async (username: string, password: string) => {
    await signin(context, { username, password }).then(
      (data: SignupResponse) => {
        setCookie({ key: "token", value: data.token });
      }
    );
    //signup終了後、api/userを呼び出してユーザを取得する
    await mutate();
  };

  return (
    <AuthContext.Provider
      value={{
        authUser: data ?? authUser,
        isLoading,
        signin: signinInternal,
        mutate: mutate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
