import { API_DOCUMENTS_URL } from "@/lib/constants";

/**
 * @typedef {{
 *   data: {
 *     id: number,
 *     document_name: string,
 *     received_on: string,
 *   }[]
 * }} Documents
 */

/**
 * Get recent documents
 *
 * @returns {Promise<Documents>} The recent documents
 */
export const getRecentDocuments = async () => {
  return await fetch(API_DOCUMENTS_URL).then((res) => res.json());
};
