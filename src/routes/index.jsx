import { createFileRoute } from "@tanstack/react-router";

const Index = () => {
  return (
    <div>
      <h1>Landing Page</h1>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
