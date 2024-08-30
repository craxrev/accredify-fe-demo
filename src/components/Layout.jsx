import PropTypes from "prop-types";
import { useRouterState } from "@tanstack/react-router";

import { UNAUTHENTICATED_ROUTES } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const Layout = ({ children }) => {
  const router = useRouterState();

  const renderLayout = UNAUTHENTICATED_ROUTES.some(
    (route) => route === router.location.pathname
  )
    ? "no-layout"
    : "default";

  if (renderLayout === "no-layout") {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-black-light relative">
      <Navbar />
      <Header />
      <div
        data-testid="authorized-route"
        className="flex-1 flex flex-col h-screen rounded-bl-2xl"
      >
        <main className="overflow-y-auto pb-10 flex-1 flex flex-col bg-white">
          {children}
        </main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
