import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import {
  getAuthCookies,
} from "@/features/auth/utils/authCookies.utils";
import { getUser } from "@/features/dashboard/api/user";

export const useUser = () => {
  const [currentUserType, setCurrentUserType] = useState(null);

  useEffect(() => {
    const cookies = getAuthCookies();

    if (cookies?.data) {
      setCurrentUserType(
        cookies.data.current_organisation.is_personal ? "personal" : "managed",
      );
    }
  }, []);

  const { data: user, isLoading } = useQuery({
    queryKey: ["user", currentUserType],
    queryFn: () => getUser(currentUserType),
  });

  return { user, isLoading: isLoading || !user };
};
