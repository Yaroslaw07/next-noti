import { Box, Container } from "@mui/material";

export default function AuthPagesFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            height: "100dvh",
            display: "flex",
            gap: "0.5rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginX: { xs: "1rem", sm: "1.5rem" },
          }}
        >
          {children}
        </Box>
      </Container>
    </>
  );
}
