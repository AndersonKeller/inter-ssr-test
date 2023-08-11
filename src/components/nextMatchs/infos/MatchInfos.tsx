import pin from "@/assets/icons/sci-pin.svg";
import { Button } from "@/components/button/Button";
import Image from "next/image";
import { Match } from "../NextMatchs";
import { FazerCheckin } from "../checkin/FazerCheckin";
import { MatchTeams } from "../team/MatchTeams";
import "./styles.css";
interface MatchInfosProps {
  match: Match;
  type?: string;
}
export function MatchInfos({ match, type }: MatchInfosProps) {
  // console.log(match);
  const date = new Date(match.dthr_evento);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <div className="match-infos">
      {type == "resume" && (
        <div className="resume">
          <div>{match.escudos.event_description.toUpperCase()}</div>
          <div>{`${day} DE ${month} DE ${year}`}</div>
          <MatchTeams type="resume" match={match} />
        </div>
      )}
      <div className="match-controls">
        <div className="match-stadium">
          <Image
            alt="pin-icon"
            src={pin}
            width={15}
            height={20}
            className="icon-pin"
          />
          <strong>{match.imagem}</strong>
        </div>
        <div className="controls">
          {match.url_redirect && <FazerCheckin checkin={match} />}
          <Button label="INGRESSOS" tipo="cta-primary" size="cta-regular" />
        </div>
      </div>
    </div>
  );
}
