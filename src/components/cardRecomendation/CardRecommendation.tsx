import { api } from "@/service/api";
import { Recommendations } from "./Recommendations";
import "./styles.css";
export async function CardRecommendation() {
  const resSejaSocio = await api.get("cms/conteudos/Banner_seja_socio");
  const sejaSocioBanner = resSejaSocio.data.result;
  const resAlugueCadeira = await api.get("cms/conteudos/Banner_alugue_cadeira");
  const alugueCadeiraBanner = resAlugueCadeira.data.result;
  const tenhaBeneficios = await api.get(
    "cms/conteudos/Banner_tenha_beneficios"
  );
  const tenhaBeneficiosBanner = tenhaBeneficios.data.result;
  const manualSocio = await api.get("cms/conteudos/banner_manual_nsocio");
  const manualSocioBanner = manualSocio.data.result;
  const banners = [manualSocioBanner, alugueCadeiraBanner];
  const bannersSocio = [tenhaBeneficiosBanner, sejaSocioBanner];
  return (
    <div>
      <Recommendations bannersSocio={bannersSocio} banners={banners} />
    </div>
  );
}
