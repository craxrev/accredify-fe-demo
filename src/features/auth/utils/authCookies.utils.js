import CookiesService from "js-cookie";

import { AUTH_COOKIE } from "@/lib/constants";

/**
 * Set the auth cookies
 *
 * @param {Object} data - The data to set in the cookies
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
 * @returns {Object} The auth cookies
 */
export const getAuthCookies = () => {
  const cookie = CookiesService.get(AUTH_COOKIE);

  return cookie ? JSON.parse(cookie) : null;
};
