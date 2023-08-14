"use client";
import { useAuth } from "@/providers/user/UserProvider";
import { Avatar } from "../avatar/Avatar";
import { MiniCart } from "../miniCart/MiniCart";
import "./styles.css";
export function HeaderUser() {
  const { user } = useAuth();

  return (
    <div className="sci-header-user">
      <MiniCart />
      <div className="sci-name-user">
        Olá, {user.nome && user.nome.split(" ")[0]}
      </div>
      <Avatar />
    </div>
  );
}
