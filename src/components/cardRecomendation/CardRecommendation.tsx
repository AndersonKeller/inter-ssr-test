import { api } from "@/service/api";
import Image from "next/image";
import "./styles.css";
export async function CardRecommendation() {
  const resSejaSocio = await api.get("cms/conteudos/Banner_seja_socio");
  const sejaSocioBanner = resSejaSocio.data.result;
  const resAlugueCadeira = await api.get("cms/conteudos/Banner_alugue_cadeira");
  const alugueCadeiraBanner = resAlugueCadeira.data.result;
  return (
    <div>
      <div className="hub-recommendation">
        {sejaSocioBanner &&
          sejaSocioBanner.map((banner: any) => {
            return (
              <Image
                key={banner.idconteudo}
                alt="seja-socio-banner"
                src={banner.imagem}
                width={500}
                height={500}
                className="member-recommendation"
              />
            );
          })}
        {alugueCadeiraBanner &&
          alugueCadeiraBanner.map((banner: any) => {
            return (
              <Image
                key={banner.idconteudo}
                className="member-recommendation"
                alt="seja-socio-banner"
                src={banner.imagem}
                width={500}
                height={500}
              />
            );
          })}
      </div>
    </div>
  );
}
