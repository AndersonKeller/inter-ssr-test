"use client";
import { Button } from "@/components/button/Button";
import { api } from "@/service/api";
import { useUserStore } from "@/store/modules/user/userStore";
import { useEffect } from "react";
import { Match } from "../NextMatchs";
import "./styles.css";

interface FazerCheckinProps {
  checkin: Match;
  abreModal?: boolean;
}
export function FazerCheckin({ checkin, abreModal }: FazerCheckinProps) {
  const { token, user } = useUserStore();
  async function getContratos() {
    const body = { method: "gsContratos" };

    const res = await api.post(
      `router.php?class=GestaoSocio&method=gsContratos`,
      body,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(res.data);
  }

  useEffect(() => {
    getContratos();
  }, [token]);
  return (
    <div className="checkin">
      {" "}
      <div>
        <Button
          label="FAZER CHECK-IN"
          tipo="cta-secondary"
          size="cta-regular"
        />
      </div>
    </div>
  );
}
//@click="pegaEvento(event)"
