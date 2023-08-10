import { Match } from "../NextMatchs";
import "./styles.css";
interface MatchInfosProps {
  match: Match;
  type?: string;
}
export function MatchInfos({ match, type }: MatchInfosProps) {
  return (
    <div className="match-infos">
      {type == "resume" && <div className="resume"></div>}
    </div>
  );
}
