import { Headline } from "@/components/headline/Headline";
import { api } from "@/service/api";
import Image from "next/image";
import "./styles.css";
interface Patrocinadores {
  logo: string;
  link: string;
}
interface Parceiros {
  logo: string;
  link: string;
}
interface LogosLinks {
  link_patrocinadores: Patrocinadores[];
  link_parceiros: Parceiros[];
}
export async function FooterPartners() {
  const res = await api.post("CustomUserApps/Configs");
  const logos: LogosLinks = res.data.result.footer_logos_link;
  return (
    <div className="sci-footer-logos">
      <Headline color="black" type="h6" text="Patrocinadores" />
      <div className="footer-sponsors">
        {logos.link_patrocinadores.map((item, index) => {
          return (
            <a
              className="sponsors-logo"
              href={item.link}
              target="_blank"
              key={index}
            >
              <Image alt="logo-sponsor" src={item.logo} />
            </a>
          );
        })}
      </div>
      <Headline color="black" type="h6" text="Parceiros" />
      <div className="footer-partners">
        {logos.link_parceiros.map((item, index) => {
          return (
            <a
              className="partners-logo"
              href={item.link}
              target="_blank"
              key={index}
            >
              <Image alt="logo-sponsor" src={item.logo} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
