"use client";

import { ReactNode } from "react";
import { UserProvider } from "./user/UserProvider";
interface Props {
  children: ReactNode;
}
export function Providers({ children }: Props) {
  return <UserProvider>{children}</UserProvider>;
}
