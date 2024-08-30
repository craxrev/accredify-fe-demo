import { API_PERSONAL_USER_URL, API_MANAGED_USER_URL } from "@/lib/constants";

/**
 * Login API
 *
 * @param {'personal' | 'managed'} type - The type of user to login
 * @returns {Promise<Object>} The user object
 */
export const login = async (type) => {
  if (type === "managed") {
    return await fetch(API_MANAGED_USER_URL).then((res) => res.json());
  }

  if (type === "personal") {
    return await fetch(API_PERSONAL_USER_URL).then((res) => res.json());
  }

  return null;
};
