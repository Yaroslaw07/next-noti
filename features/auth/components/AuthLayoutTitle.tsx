"use client";

import { Box, Link, Typography } from "@mui/material";
import { FC } from "react";
import { Icons } from "../../../components/Icons";

interface AuthLayoutTitleProps {
  title: string;
}

const AuthLayoutTitle: FC<AuthLayoutTitleProps> = ({ title }) => {
  return (
    <Box>
      <Link href="../">
        <Icons.Logo sx={{ fontSize: "135px" }} />
      </Link>
      <Typography
        component="h1"
        variant="h5"
        sx={{
          fontSize: "2.4rem",
          fontWeight: "500",
          marginTop: "-0.5rem",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default AuthLayoutTitle;
