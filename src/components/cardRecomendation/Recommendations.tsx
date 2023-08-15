"use client";

import { useAuth } from "@/providers/user/UserProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
interface RecommendationsProps {
  banners: any;
  bannersSocio: any;
}
export function Recommendations({
  bannersSocio,
  banners,
}: RecommendationsProps) {
  const { user } = useAuth();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (user.idpessoa_tipo == "100001") {
      setRecommendations(banners);
    } else {
      setRecommendations(bannersSocio);
    }
  }, []);
  return (
    <div>
      <div className="hub-recommendation">
        {recommendations &&
          recommendations.map((banner: any) => {
            return (
              <Image
                key={banner[0].idconteudo}
                alt="seja-socio-banner"
                src={banner[0].imagem}
                width={500}
                height={500}
                className="member-recommendation"
              />
            );
          })}
      </div>
    </div>
  );
}
