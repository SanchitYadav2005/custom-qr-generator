import React from "react";

import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <div>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </div>
  );
};
