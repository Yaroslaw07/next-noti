import { Metadata } from "next";
import Welcome from "./welcome";

export const metadata: Metadata = {
  title: "Noti | Welcome",
  description: "Welcome to Noti",
};

export default function WelcomePage() {
  return <Welcome />;
}
