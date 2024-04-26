"use client";

import { Button, Stack } from "@mui/material";
import { FC } from "react";
import EmailInputComponent from "../../../components/inputs/EmailInput";
import PasswordInputComponent from "../../../components/inputs/PasswordInput";
import UsernameInputComponent from "../../../components/inputs/UsernameInput";
import HR from "../../../components/ui/HR";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../authValidator";
import { SignupCredentials } from "../types/authTypes";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import { useToast } from "@/lib/hooks/useToast";

const SignupForm: FC = () => {
  const router = useRouter();

  const { signup } = useAuth();
  const { openToast } = useToast();

  const handleSubmit = async (data: SignupCredentials) => {
    const { ok, message } = await signup(data);

    openToast(message, ok ? "success" : "error");
    ok && router.push("/vaults");
  };

  const {
    handleSubmit: onSubmit,
    formState: { errors },
    control,
  } = useForm<SignupCredentials>({
    resolver: zodResolver(signupSchema),
    defaultValues: { username: "", email: "", password: "" },
  });

  return (
    <Stack
      component="form"
      spacing={1.5}
      noValidate
      onSubmit={onSubmit(handleSubmit)}
      sx={{
        mt: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <UsernameInputComponent
        control={control}
        error={errors.username?.message}
      />
      <EmailInputComponent control={control} error={errors.email?.message} />
      <PasswordInputComponent
        control={control}
        error={errors.password?.message}
      />

      <HR />
      <Button type="submit" fullWidth variant="contained">
        Sign Up
      </Button>
    </Stack>
  );
};

export default SignupForm;
