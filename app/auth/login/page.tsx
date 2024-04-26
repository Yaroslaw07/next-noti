import Link from "@/components/ui/Link";
import AuthLayoutTitle from "@/features/auth/components/AuthLayoutTitle";
import LoginForm from "@/features/auth/components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noti | Login",
  description: "Login to Noti account",
};

export default function LoginPage() {
  return (
    <>
      <AuthLayoutTitle title="Log In" />
      <LoginForm />
      <Link
        href="/auth/signup"
        variant="subtitle1"
        style={{ textAlign: "center", width: "100%" }}
      >
        {"Don't have an account? Sign Up"}
      </Link>
    </>
  );
}
