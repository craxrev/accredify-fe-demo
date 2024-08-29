import { API_CAREER_GOAL_URL } from "@/lib/constants";

export const getGoals = async () => {
  return await fetch(API_CAREER_GOAL_URL).then((res) => res.json());
};
