import { Match } from "../NextMatchs";
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
    </div>
  );
}
