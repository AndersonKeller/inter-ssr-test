interface BannerProps {
  images: BannerImages[];
}
interface BannerImages {
  idconteudo: string;
  titulo: string;
  subtitulo: string;
  desktop: string;
  imagem: string;
  link: string;
  ordem: number;
  tags: string[];
}
import Image from "next/image";
export function Banner({ images }: BannerProps) {
  return (
    <div>
      {images.map((img) => (
        <Image
          key={img.idconteudo}
          loading="lazy"
          className="w-full h-auto block bg-gray-100"
          alt="banner"
          src={img.imagem}
          width={900}
          height={600}
        />
      ))}
      {/* {images} */}
    </div>
  );
}
// background-color: var(--dl-color-grey-light);
//     width: 100%;
//     height: auto;
//     display: block;
