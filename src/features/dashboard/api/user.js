import { API_PERSONAL_USER_URL, API_MANAGED_USER_URL } from "@/lib/constants";

/**
 * Get the user
 *
 * @param {'personal' | 'managed'} type - The type of user to get
 * @returns {Promise<Object>} The user object
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
