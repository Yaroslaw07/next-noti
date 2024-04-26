"use client";

import createEmotionCache from "@/lib/ui/emotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider as PreferredThemeProvider } from "next-themes";
import MUIThemeProvider from "./MuiThemeProvider";
import { CssBaseline } from "@mui/material";
import { ToastProvider } from "@/lib/contexts/toastContext";

const clientSideEmotionCache = createEmotionCache();

type ProvidersProps = {
  children?: React.ReactNode;
  emotionCache?: EmotionCache;
};

export const Providers = ({
  children,
  emotionCache = clientSideEmotionCache,
}: ProvidersProps) => {
  return (
    <PreferredThemeProvider>
      <CacheProvider value={emotionCache}>
        <MUIThemeProvider>
          <CssBaseline enableColorScheme />
          <ToastProvider>{children}</ToastProvider>
        </MUIThemeProvider>
      </CacheProvider>
    </PreferredThemeProvider>
  );
};
