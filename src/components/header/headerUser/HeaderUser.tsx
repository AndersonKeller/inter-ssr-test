import { Avatar } from "../avatar/Avatar";
import { MiniCart } from "../miniCart/MiniCart";
import "./styles.css";
export function HeaderUser() {
  return (
    <div className="sci-header-user">
      <MiniCart />
      <div className="sci-name-user">{/* {{ name }} */}</div>
      <Avatar />
    </div>
  );
}
