import "./styles.css";
interface ColumnProps {
  children: React.ReactNode;
  size?: string;
  flex?: string;
}
export function Column({ children, size, flex }: ColumnProps) {
  return (
    <div className={`sci-column w-${size} ${flex ? " flex" : ""}`}>
      {children}
    </div>
  );
}
