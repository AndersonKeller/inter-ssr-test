import { Button } from "@/components/button/Button";
import { Match } from "../NextMatchs";
import "./styles.css";

interface FazerCheckinProps {
  checkin: Match;
  abreModal?: boolean;
}
export function FazerCheckin({ checkin, abreModal }: FazerCheckinProps) {
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
