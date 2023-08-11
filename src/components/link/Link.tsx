import "./styles.css";
interface LinkProps {
  color?: string;
  children: React.ReactNode;
}
export function LinkComponent({ children, color }: LinkProps) {
  return <a className={`sci-link color-${color}`}>{children}</a>;
}
// @click="$emit('click')"
