import { createFileRoute } from "@tanstack/react-router";

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
};

export const Route = createFileRoute("/login")({
  component: Login,
});