"use client";
import { useAuth } from "@/providers/user/UserProvider";
import { Avatar } from "../avatar/Avatar";
import { MiniCart } from "../miniCart/MiniCart";
import "./styles.css";
export function HeaderUser() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="sci-header-user">
      <MiniCart />
      <div className="sci-name-user">{user && user.nome}</div>
      <Avatar />
    </div>
  );
}
