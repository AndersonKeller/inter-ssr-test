import { avalon } from "@/styles/fonts";
import "./styles.css";
interface HeadlineProps {
  type: string;
  text: string;
  color: string;
  font?: string;
  className?: string;
}
export function Headline({ color, font, text, type }: HeadlineProps) {
  return (
    <h4
      className={`head-line sci-${type} color-${color} ${
        font == "cursive" ? avalon.className : ""
      }`}
    >
      {text}
    </h4>
  );
}
