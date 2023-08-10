import { api } from "@/service/api";
import { Headline } from "../headline/Headline";
import "./styles.css";
export async function CarrousselOTT() {
  const res = await api.get("CustomUserApps/OTT/getVideos");
  //   console.log(videos.data);
  const videos = res.data.result.splice(0, 6);

  return (
    <div className="sci-ott">
      <Headline type="h3" text="NOSSOS VÍDEOS" color="white" />
      {/* <div className="icone" v-for="(n, index) in ott" key="index">
                <a  className="ott-content">
                    <img src="n.thumbnail_url" class="content-cover" />
                </a>
            </div> */}
      <div className="ott-container">
        {videos.map((video: any, index: number) => {
          return (
            <div className="icone" key={index}>
              <a className="ott-content">
                <img src={video.thumbnail_url} className="content-cover" />
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
