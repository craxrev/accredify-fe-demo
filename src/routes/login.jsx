import { createFileRoute } from "@tanstack/react-router";
import LoginAsManaged from "@/features/auth/components/LoginAsManaged";
import LoginAsPersonal from "@/features/auth/components/LoginAsPersonal";

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginAsManaged />
      <LoginAsPersonal />
    </div>
  );
};

export const Route = createFileRoute("/login")({
  component: Login,
});
