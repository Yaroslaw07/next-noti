import { useRouter } from "next/navigation";
import { authService } from "../services/authService";
import { LoginCredentials, SignupCredentials } from "../types/authTypes";

export const useAuth = () => {
  const router = useRouter();

  const login = async (credentials: LoginCredentials) => {
    return authService.login(credentials);
  };

  const signup = async (credentials: SignupCredentials) => {
    return authService.signup(credentials);
  };

  const logout = async () => {
    await authService.logout();
    router.push("/auth/login");
  };

  return {
    login,
    signup,
    logout,
  };
};
