"use client";

import { Icons } from "@/components/Icons";
import { Button, Link, Stack, Typography } from "@mui/material";

const welcomeButtonStyle = {
  fontSize: { xs: "1.25rem", sm: "1.5rem" },
  padding: "0.5rem 1.25rem",
  textTransform: "none",
};

export default function Welcome() {
  return (
    <Stack
      spacing={0}
      height={"100dvh"}
      alignItems="center"
      justifyContent="center"
      textAlign={"center"}
    >
      <Icons.Logo
        sx={{
          fontSize: {
            xs: "160px",
            md: "200px",
          },
        }}
      />
      <Typography
        variant="h1"
        sx={{
          lineHeight: "1",
          fontWeight: "500",
          marginTop: "-0.5rem",
          fontSize: { xs: "3.5rem", sm: "6rem", md: "7rem" },
        }}
      >
        Welcome to Noti
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "1.8rem", md: "2,25rem" },
          lineHeight: "2.5rem",
          fontWeight: "400",
        }}
      >
        {"Let's create some "}
        <Typography
          component="span"
          sx={{
            fontSize: { xs: "1.8rem", md: "2,25rem" },
            lineHeight: "2.5rem",
            fontWeight: "400",
            textDecoration: "underline",
          }}
        >
          {"notes"}
        </Typography>
      </Typography>
      <Stack
        direction={"row"}
        spacing={2}
        sx={{ marginTop: "1rem" }}
        justifyContent="center"
      >
        <Link href={"auth/login"}>
          <Button
            variant="contained"
            color="primary"
            component="button"
            sx={welcomeButtonStyle}
          >
            Log In
          </Button>
        </Link>
        <Link href={"auth/signup"}>
          <Button
            variant="contained"
            color="secondary"
            component="button"
            sx={welcomeButtonStyle}
          >
            Sign Up
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}
