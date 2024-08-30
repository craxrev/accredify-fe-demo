import { API_MANAGED_USER_URL, API_PERSONAL_USER_URL } from "@/lib/constants";

/**
 * @typedef {{
 *   data: {
 *     id: number,
 *     name: string,
 *     email: string,
 *     profile_picture_url: string,
 *     current_organisation: {
 *       id: number,
 *       name: string,
 *       is_personal: boolean,
 *     }
 *   },
 * }} User
 */

/**
 * Get the user
 *
 * @param {'managed' | 'personal'} type - The type of user to get
 * @returns {Promise<User>} The user object
 */
export const getUser = async (type) => {
  if (type === "managed") {
    return await fetch(API_MANAGED_USER_URL).then((res) => res.json());
  }

  if (type === "personal") {
    return await fetch(API_PERSONAL_USER_URL).then((res) => res.json());
  }

  return null;
};
