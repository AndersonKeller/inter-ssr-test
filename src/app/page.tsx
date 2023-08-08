import { Banner } from "@/components/banner/Banner";
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
      {allBanners && <Banner images={allBanners} />}
      {/* <NextMatchs />
        <CarrousselOTT />
        <!-- <Banner :images="bannerComingSoon" /> -->
        <CardRecommendation /> */}
      {/* {banners.data.result} */}
    </>
  );
}
