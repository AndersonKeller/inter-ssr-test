"use client";
import { Button } from "@/components/button/Button";
import { api } from "@/service/api";
import { useConfigStore } from "@/store/modules/configs/configStore";
import { useUserStore } from "@/store/modules/user/userStore";
import { useEffect, useState } from "react";
import { Match } from "../NextMatchs";
import "./styles.css";

interface FazerCheckinProps {
  checkin: Match;
  abreModal?: boolean;
}
export function FazerCheckin({ checkin, abreModal }: FazerCheckinProps) {
  const { token, user } = useUserStore();
  const { configs } = useConfigStore();
  const [planoCheckin, setPlanoCheckin] = useState(false);
  const [userContratos, setUserContratos] = useState([]);
  async function getContratos() {
    const body = { method: "gsContratos" };

    const res = await api.post(
      `router.php?class=GestaoSocio&method=gsContratos`,
      body,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (res.data.result) {
      const contratos = res.data.result.map((plano: any) => plano.idplano);
      setUserContratos(contratos);
    }
  }
  function validateCheckin() {
    const isCheckin = configs.idplanos_checkin.some(
      (plano: string, index: number) => {
        return userContratos[index] == plano;
      }
    );
    setPlanoCheckin(isCheckin);
  }
  useEffect(() => {
    getContratos();
  }, [token]);
  useEffect(() => {
    if (configs) {
      validateCheckin();
    }
  }, [configs]);
  return (
    <div className="checkin">
      {" "}
      {planoCheckin && (
        <div>
          <Button
            label="FAZER CHECK-IN"
            tipo="cta-secondary"
            size="cta-regular"
          />
        </div>
      )}
    </div>
  );
}
//@click="pegaEvento(event)"
