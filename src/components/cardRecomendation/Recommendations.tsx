"use client";

import { useAuth } from "@/providers/user/UserProvider";
import Image from "next/image";
interface RecommendationsProps {
  banners: any;
}
export function Recommendations({ banners }: RecommendationsProps) {
  const { user } = useAuth();
  console.log(user.idpessoa_tipo == "100001");
  console.log(banners);
  return (
    <div>
      <div className="hub-recommendation">
        {banners &&
          banners.map((banner: any) => {
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
        {/* {alugueCadeiraBanner &&
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
          })} */}
      </div>
    </div>
  );
}
