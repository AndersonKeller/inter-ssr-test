import { api } from "@/service/api";
import Image from "next/image";
import { Headline } from "../headline/Headline";
import "./styles.css";
export const revalidate = 60 * 60 * 24;
export async function CarrousselOTT() {
  const res = await api.get("CustomUserApps/OTT/getVideos");
  //   console.log(videos.data);
  let sortedOtt: any = res.data.result;
  sortedOtt = sortedOtt.sort((a: any, b: any) => {
    if (a.created_at > b.created_at) {
      return -1;
    }
    if (a.created_at < b.created_at) {
      return 1;
    }
    return 0;
  });
  const videos = sortedOtt.splice(0, 6);

  return (
    <div className="sci-ott">
      <Headline type="h3" text="NOSSOS VÍDEOS" color="white" />

      <div className="ott-container">
        {videos.map((video: any, index: number) => {
          return (
            <div className="icone" key={index}>
              <a className="ott-content">
                <Image
                  width={175}
                  height={265}
                  alt="video-ott"
                  src={video.thumbnail_url}
                  className="content-cover"
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// await this.$http.get("GETRECOMENDACOES", []).then((response) => {
//     if (response) {
//         let sortedOtt = response;
//         sortedOtt = sortedOtt.sort((a, b) => {
//             if (a.created_at > b.created_at) {
//                 return -1;
//             }
//             if (a.created_at < b.created_at) {
//                 return 1;
//             }
//             return 0;
//         });
//         this.ott = sortedOtt.splice(0, 6);
//     }
// });
