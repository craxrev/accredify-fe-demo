import { createFileRoute, Link } from "@tanstack/react-router";

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
