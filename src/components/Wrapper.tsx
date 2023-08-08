import { ReactNode } from "react";
import "./styles.css";
interface WrapperProps {
  children: ReactNode;
}
export function Wrapper({ children }: WrapperProps) {
  return <main className="sciWrapper">{children}</main>;
}
