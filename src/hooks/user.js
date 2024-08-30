import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getAuthCookies } from "@/features/auth/utils/authCookies.utils";
import { getUser } from "@/features/dashboard/api/user";

/**
 * @typedef {import('../features/dashboard/api/user').User} User
 * @typedef {import('../features/auth/utils/authCookies.utils').getAuthCookies} GetAuthCookies
 */

/**
 * UseUser hook
 */
export const useUser = () => {
  /**
  /* @type {ReturnType<typeof useState<'managed' | 'personal' | null>>}
   */
  const [currentUserType, setCurrentUserType] = useState(null);

  useEffect(() => {
    /**
     * @type {ReturnType<GetAuthCookies>}
     */
    const cookies = getAuthCookies();

    if (cookies?.data) {
      setCurrentUserType(
        cookies.data.current_organisation.is_personal ? "personal" : "managed",
      );
    }
  }, []);

  /**
   * @type {ReturnType<typeof useQuery<User>>}
   */
  const { data: user, isLoading } = useQuery({
    queryKey: ["user", currentUserType],
    queryFn: () => getUser(currentUserType),
  });

  return { user, isLoading: isLoading || !user };
};
