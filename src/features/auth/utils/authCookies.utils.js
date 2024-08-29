import CookiesService from "js-cookie";

import { AUTH_COOKIE } from "@/lib/constants";

export const setAuthCookies = (data) => {
  if (data) {
    CookiesService.set(AUTH_COOKIE, JSON.stringify({ data }));
  }
};

export const removeAuthCookies = () => {
  CookiesService.remove(AUTH_COOKIE);
};

export const getAuthCookies = () => {
  const cookie = CookiesService.get(AUTH_COOKIE);

  return cookie ? JSON.parse(cookie) : null;
};
