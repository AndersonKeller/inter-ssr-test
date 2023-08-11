import { Banner } from "@/components/banner/Banner";
import { CardRecommendation } from "@/components/cardRecomendation/CardRecommendation";
import { CarrousselOTT } from "@/components/carrousselOTT/CarrousselOTT";
import { Footer } from "@/components/footer/Fotter";
import { FooterPartners } from "@/components/footer/footerPartners/FooterPartners";
import { Header } from "@/components/header/Header";
import { NextMatchs } from "@/components/nextMatchs/NextMatchs";
import { api } from "@/service/api";

export default async function Home() {
  const banners = await api.get("cms/conteudos/banners_intenacional");

  const allBanners = banners.data.result.filter((banner: any) => {
    if (banner.tags.includes("Banner_Hub")) {
      return banner;
    }
  });
  return (
    <>
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
    </>
  );
}
