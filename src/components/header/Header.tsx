import Image from "next/image";
import config from "../../../app.config.json";
import { HeaderUser } from "./headerUser/HeaderUser";
import { Menu } from "./menu/Menu";
import "./styles.css";
export function Header() {
  const logo = config.globalConfigs.mundoColorado;
  return (
    <header className="sci-header">
      <Menu />
      <a className="sci-logo-header">
        <Image
          width={80}
          height={80}
          alt="logo"
          src={logo}
          className="sci-logo-mobile"
        />
      </a>

      <HeaderUser />
    </header>
  );
}
