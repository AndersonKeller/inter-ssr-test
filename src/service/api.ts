// async todosBanners() {
//   await this.$http
//       .get("GETCONTEUDOS", "banners_intenacional")
//       .then((response) => {
//           sessionStorage.setItem(
//               "banners_internacional",
//               JSON.stringify(response)
//           );
//           return;
//       });
// }
import axios from "axios";
const endpoints = {
  producao: "https://internacional.eleventickets.com/",
  preproducao: "https://internacionalpreprodadmin.eleventickets.com/",
  homologacao: "https://ahinter.eleventickets.com/",
};

export const api = axios.create({
  baseURL: endpoints.homologacao,
  timeout: 5000,
});
// GETCONTEUDOS              : 'cms/conteudos/',
//             GETCONTEUDO               : 'cms/conteudo/',
