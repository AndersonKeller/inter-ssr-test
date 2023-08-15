import { Button } from "@/components/button/Button";
import GestaoSocio from "@/controllers/GestaoSocio.controller";
import { api } from "@/service/api";
import { Match } from "../NextMatchs";
import "./styles.css";

interface FazerCheckinProps {
  checkin: Match;
  abreModal?: boolean;
}
export async function FazerCheckin({ checkin, abreModal }: FazerCheckinProps) {
  const gestaoSocio = new GestaoSocio();
  const res = await api.post("CustomUserApps/Configs", { idpessoa_tipo: "" });
  const contratos = await gestaoSocio.gsContratos();
  console.log(res.data);
  console.log(contratos.data);
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
