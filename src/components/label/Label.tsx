import "./styles.css";
interface LabelProps {
  label: string;
}
export function Label({ label }: LabelProps) {
  return <label className="label">{label}</label>;
}
