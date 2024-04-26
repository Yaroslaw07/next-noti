import Link from "@/components/ui/Link";
import AuthLayoutTitle from "@/features/auth/components/AuthLayoutTitle";
import SignupForm from "@/features/auth/components/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noti | Signup",
  description: "Create new account",
};

export default function SignupPage() {
  return (
    <>
      <AuthLayoutTitle title="Sign up" />
      <SignupForm />
      <Link
        href="login"
        variant="subtitle1"
        style={{ textAlign: "center", width: "100%" }}
      >
        {"Already have an account? Log In"}
      </Link>
    </>
  );
}
