import { API_DOCUMENTS_URL } from "@/lib/constants";

/**
 * Get recent documents
 *
 * @returns {Promise<Object>} The recent documents
 */
export const getRecentDocuments = async () => {
  return await fetch(API_DOCUMENTS_URL).then((res) => res.json());
};
