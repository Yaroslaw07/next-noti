import React from "react";
import { Providers } from "@/components/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <Providers>
          <body className={inter.className}>{children}</body>
        </Providers>
      </AppRouterCacheProvider>
    </html>
  );
}
