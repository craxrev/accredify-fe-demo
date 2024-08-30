import { createFileRoute, Link } from "@tanstack/react-router";

/**
 * Index route component
 *
 * @component
 * @returns {React.JSX.Element} Index route component
 */
const Index = () => {
  return (
    <div>
      <h1>Landing Page</h1>

      <p>Welcome to the Landing Page</p>
      <Link to="/login">Login?</Link>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
