import { destroyCookie } from "pages/contexts/AuthContexts";
import { Cookies } from "next/dist/server/web/spec-extension/cookies";

export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit
): Promise<any> => {
  const cookies = new Cookies();

  const res = await fetch(resource, init);

  if (!res.ok) {
    if (res.status === 403) {
      destroyCookie("token");
    }
    const errorRes = await res.json();
    const error = new Error(
      errorRes.message ?? "APIリクエスト時にエラーが起きました"
    );

    throw error;
  }
  return res.json();
};
