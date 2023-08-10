import Image from "next/image";
import { Match } from "../NextMatchs";
import "./styles.css";
interface MatchTeamsProps {
  match: Match;
  type?: string;
}
export function MatchTeams({ match, type }: MatchTeamsProps) {
  return (
    <div className="match-teams">
      {type == "resume" && (
        <div className="match-teams-resume">
          <Image
            width={50}
            height={50}
            alt="team-creast"
            className="team"
            src={match.escudos.club_crest_home}
          />
          <strong className="versus">VS</strong>
          <Image
            width={50}
            height={50}
            alt="team-creast"
            className="team"
            src={match.escudos.club_crest_away}
          />
        </div>
      )}
    </div>
  );
}
