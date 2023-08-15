import { Banner } from "@/components/banner/Banner";
import { CardRecommendation } from "@/components/cardRecomendation/CardRecommendation";
import { CarrousselOTT } from "@/components/carrousselOTT/CarrousselOTT";
import { Fila } from "@/components/fila/Fila";
import { Footer } from "@/components/footer/Fotter";
import { FooterPartners } from "@/components/footer/footerPartners/FooterPartners";
import { Header } from "@/components/header/Header";
import { NextMatchs } from "@/components/nextMatchs/NextMatchs";
import { Providers } from "@/providers/Providers";
import { api } from "@/service/api";

export default async function Home() {
  const banners = await api.get("cms/conteudos/banners_intenacional");
  console.log(banners.data);
  const allBanners =
    banners.data.result &&
    banners.data.result.filter((banner: any) => {
      if (banner.tags.includes("Banner_Hub")) {
        return banner;
      }
    });
  return banners.data.result ? (
    <Providers>
      <Header />
      {allBanners && <Banner images={allBanners} />}
      <NextMatchs />
      <CarrousselOTT />
      {/* <CarrousselOTT />
      <!-- <Banner :images="bannerComingSoon" /> -->*/}
      <CardRecommendation />
      {/* {banners.data.result} */}
      <FooterPartners />
      <Footer />
    </Providers>
  ) : (
    <Fila />
  );
}
