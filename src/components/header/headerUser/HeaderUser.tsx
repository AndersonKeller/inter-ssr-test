"use client";
import { useUserStore } from "@/store/modules/user/userStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Avatar } from "../avatar/Avatar";
import { MiniCart } from "../miniCart/MiniCart";
import "./styles.css";
export function HeaderUser() {
  const router = useRouter();
  const user = useUserStore().user;

  useEffect(() => {}, []);
  return (
    <div className="sci-header-user">
      <MiniCart />
      <div className="sci-name-user">
        Olá, {user && user.nome && user.nome.split(" ")[0]}
      </div>
      <Avatar />
    </div>
  );
}
