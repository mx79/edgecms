"use client";

import {PropsWithChildren} from "react";
import {ThemeProvider} from "next-themes";
import {SessionProvider} from "next-auth/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "@/components/ui/sonner";

const queryClient = new QueryClient();

export default function Providers({children}: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster/>
          {children}
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};
