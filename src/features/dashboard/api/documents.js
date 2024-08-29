import { API_DOCUMENTS_URL } from "@/lib/constants";

export const getRecentDocuments = async () => {
  return await fetch(API_DOCUMENTS_URL).then((res) => res.json());
};
