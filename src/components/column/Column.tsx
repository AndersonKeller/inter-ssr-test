import "./styles.css";
interface ColumnProps {
  children: React.ReactNode;
  size?: string;
  flex?: string;
  className?: string;
}
export function Column({ children, size, flex, className }: ColumnProps) {
  return (
    <div
      className={`sci-column w-${size} ${flex ? " flex" : ""} ${
        className && className
      }`}
    >
      {children}
    </div>
  );
}
