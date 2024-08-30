import { redirect } from "@tanstack/react-router";

import { UNAUTHENTICATED_ROUTES } from "@/lib/constants";
import { getAuthCookies } from "./authCookies.utils";

/**
 * Protects a route
 *
 * @param {Object} opts - The options for the route
 * @param {Object} opts.location - The location object
 * @throws Error if the user is not authenticated (no cookie) and the route is not in the UNAUTHENTICATED_ROUTES array
 */
export const protectRoute = (opts) => {
  const cookies = getAuthCookies();

  if (
    !cookies?.data &&
    !UNAUTHENTICATED_ROUTES.some((route) => route === opts.location.pathname)
  ) {
    throw redirect({ to: "/login" });
  }
};
