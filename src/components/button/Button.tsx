import "./styles.css";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  loading?: boolean;
  size: string;
  tipo: string;
}
//props: ['label', 'type', 'size', 'disabled', 'loading'],
export function Button({ label, loading, size, tipo, ...rest }: ButtonProps) {
  return (
    <button className={`cta-button ${tipo} ${size}`} {...rest}>
      {label}
    </button>
  );
}
