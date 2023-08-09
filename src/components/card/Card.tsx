import "./styles.css";
interface CardProps {
  children?: React.ReactNode;
  size?: string;
  flex?: string;
  className?: string;
}
export function Card({ children, size, flex }: CardProps) {
  return (
    <div className={`sci-card w- ${size} ${flex ? "flex" : ""}`}>
      {children}
    </div>
  );
}
