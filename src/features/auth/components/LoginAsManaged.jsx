import { useNavigate } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";

import { login as loginApi } from "@/features/auth/api/login";
import { setAuthCookies } from "@/features/auth/utils/authCookies.utils";

/**
 * @typedef {import('../api/login').User} User
 */

/**
 * LoginAsManaged component
 *
 * @component
 * @returns {React.JSX.Element} LoginAsManaged component
 */
const LoginAsManaged = () => {
  const navigate = useNavigate();

  /**
   * @type {ReturnType<typeof useMutation<User>>}
   */
  const { mutateAsync: login } = useMutation({
    mutationFn: loginApi,
  });

  const handleLogin = async () => {
    try {
      const { data } = await login("managed");

      setAuthCookies(data);

      navigate({ to: "/dashboard" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login as Managed</button>
    </div>
  );
};

export default LoginAsManaged;
