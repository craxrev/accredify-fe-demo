import { redirect } from "@tanstack/react-router";

import { UNAUTHENTICATED_ROUTES } from "@/lib/constants";
import { getAuthCookies } from "./authCookies.utils";

export const protectRoute = (opts) => {
  const cookies = getAuthCookies();

  if (
    !cookies?.data &&
    !UNAUTHENTICATED_ROUTES.some((route) => route === opts.location.pathname)
  ) {
    throw redirect({ to: "/login" });
  }
};
