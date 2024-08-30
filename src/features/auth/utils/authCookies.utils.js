import CookiesService from "js-cookie";

import { AUTH_COOKIE } from "@/lib/constants";

/**
 * @typedef {import('../api/login').User["data"]} UserData
 */

/**
 * Set the auth cookies
 *
 * @param {UserData} data - The data to set in the cookies
 */
export const setAuthCookies = (data) => {
  if (data) {
    CookiesService.set(AUTH_COOKIE, JSON.stringify({ data }));
  }
};

/**
 * Remove the auth cookies
 */
export const removeAuthCookies = () => {
  CookiesService.remove(AUTH_COOKIE);
};

/**
 * Get the auth cookies
 *
 * @returns {{ data: UserData } | null} The auth cookies
 */
export const getAuthCookies = () => {
  const cookie = CookiesService.get(AUTH_COOKIE);

  return cookie ? JSON.parse(cookie) : null;
};
