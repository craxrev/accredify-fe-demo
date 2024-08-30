import { API_CAREER_GOAL_URL } from "@/lib/constants";

/**
 * @typedef {{
 *   data: {
 *     id: number,
 *     name: string,
 *     description: string,
 *     progress: number
 *   }[]
 * }} Goals
 */

/**
 * Get career goals
 *
 * @returns {Promise<Goals>} The career goals
 */
export const getGoals = async () => {
  return await fetch(API_CAREER_GOAL_URL).then((res) => res.json());
};
