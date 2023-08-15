import iconMinhaConta from "@/assets/icons/sci-account.svg";
import close from "@/assets/icons/sci-close.svg";
import iconJogos from "@/assets/icons/sci-matchs.svg";
import logo from "@/assets/icons/sci-nav.svg";
import iconConteudos from "@/assets/icons/sci-ott.svg";
import iconPlanos from "@/assets/icons/sci-plans.svg";
import Image from "next/image";
import config from "../../../../app.config.json";
// import navBarlogo from config.globalConfigs.logoNavBar;
import "./styles.css";

export function Menu() {
  const navBarLogo = config.globalConfigs.logoNavBar;
  const items = [
    {
      title: "JOGOS E INGRESSOS",
      icon: iconJogos,
      link: "Jogos",
    },
    {
      title: "PLANOS",
      icon: iconPlanos,
      link: "Planos",
    },
    {
      title: "CONTEÚDOS",
      icon: iconConteudos,
      link: "",
    },
    {
      title: "MINHA CONTA",
      icon: iconMinhaConta,
      link: "Perfil",
    },
  ];
  return (
    <div className="menu">
      <Image alt="logo" src={logo} className="nav-icon-mobile" />
      <div
        className="nav-sidebar"
        id="nav-sidebar"
        // v-bind:class="{ visible: NavVisible }"
      >
        <Image
          alt="close"
          src={close}
          className="nav-close-icon-mobile"
          width={40}
          height={40}
          // @click="toggle_nav()"
          //   v-bind:class="{ visible: NavVisible }"
        />

        <a className="sci-logo">
          <Image
            alt="logo"
            src={navBarLogo}
            className="sci-logo-desktop"
            width={80}
            height={80}
          />
        </a>
        <div className="nav-list">
          {items.map((item, index) => {
            return (
              <a
                className="nav-link"
                key={index}
                // @click="toGo(item)"
                // :key="key"
              >
                <div className="icon">
                  <Image
                    alt="icon-link"
                    src={item.icon}
                    width={45}
                    height={45}
                    className="icon-image"
                  />
                </div>
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
      <div
        className="nav-mobile-layer"
        // v-bind:class="{ visible: NavVisible }"
      ></div>
    </div>
  );
}
