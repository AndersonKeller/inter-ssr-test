import Image from "next/image";
import config from "../../../app.config.json";
import "./styles.css";
export function Header() {
  const logo = config.globalConfigs.mundoColorado;
  return (
    <header className="sci-header">
      {/* <Menu /> */}

      <a className="sci-logo">
        <Image
          width={80}
          height={80}
          alt="logo"
          src={logo}
          className="sci-logo-mobile"
        />
      </a>

      {/* //   <MenuContext v-if="menus" :menus="menus" />
//   <div v-else></div> */}

      {/* <HeaderUser /> */}
    </header>
  );
}
