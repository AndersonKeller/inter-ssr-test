import { Headline } from "@/components/headline/Headline";
import { api } from "@/service/api";
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
        {logos.link_patrocinadores.map((item) => {
          return (
            <a className="sponsors-logo" href={item.link} target="_blank">
              <img src={item.logo} />
            </a>
          );
        })}
      </div>
      <Headline color="black" type="h6" text="Parceiros" />
      <div className="footer-partners">
        {logos.link_parceiros.map((item) => {
          return (
            <a className="partners-logo" href={item.link} target="_blank">
              <img src={item.logo} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
