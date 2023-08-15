"use client";
import { useAuth } from "@/providers/user/UserProvider";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import { Avatar } from "../avatar/Avatar";
import { MiniCart } from "../miniCart/MiniCart";
import "./styles.css";
export function HeaderUser() {
  const router = useRouter();
  const { user, setUser } = useAuth();

  useEffect(() => {
    const cookies = parseCookies();
    if (cookies["@user-session-mundoColorado"]) {
      const userSession = JSON.parse(cookies["@user-session-mundoColorado"]);
      // console.log(userSession);
      if (!userSession.nome) {
        router.push("/login");
      }
      setUser(userSession);
    } else {
      router.push("/login");
    }
  }, []);
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
