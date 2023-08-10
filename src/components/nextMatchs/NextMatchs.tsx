import Gestaosocio from "@/controllers/GestaoSocio.controller";
import { Card } from "../card/Card";
import { Headline } from "../headline/Headline";
import { MatchInfos } from "./infos/MatchInfos";
import "./styles.css";
export interface Match {
  idevento: string;
  idlogin: string;
  titulo: string;
  dscevento: string;
  depara: string;
  ordem: number;
  dthr_evento: string;
  dthr_evento_fim: string;
  dthr_abertura: string;
  url: string;
  imagem: string;
  escudos: {
    team_home: string;
    club_crest_home: string;
    team_away: string;
    club_crest_away: string;
    event_description: string;
    team_home_akronym: string;
    team_away_akronym: string;
    fora: string;
    slug_data: string;
    slug_campeonato: string;
    slug_nome: string;
  };
}
export async function NextMatchs() {
  const gestaoSocio = new Gestaosocio();
  const res = await gestaoSocio.getProximosJogos();

  const nextMatchs: Match[] = res.data.result.splice(0, 2);
  // console.log(nextMatchs);
  return (
    <>
      {/* {nextMatchs.map((item: any) => {
        return <p>{item.imagem}</p>;
      })} */}
      <div className="next-matchs">
        <div className="lettering">
          <Headline
            type="h4"
            text="Próximos"
            className="word-next"
            font="cursive"
            color="white"
          />
          <Headline
            type="h1"
            text="Jogos"
            className="word-matchs"
            font="cursive"
            color="white"
          />
          {/* <Button
                :label="$t_('card_ver')"
                type="cta-primary"
                size="cta-regular"
                @click="$util.go('Jogos')"
            /> */}
        </div>

        <div className="matchs">
          {/* <Card v-for="(dados, index) in disponivel" :key="index">
                <MatchInfos type="resume" :match="dados" />
        </Card>*/}
          {nextMatchs.map((match) => {
            return (
              <Card key={match.idevento}>
                <MatchInfos type="resume" match={match} />
              </Card>
            );
          })}
          <Card className="fake-card"></Card>
        </div>
      </div>
    </>
  );
}

// async getProximosJogos() { // FUNC: getPlgetProximosJogosano()
//     return await this.getDados('gsEventosOnda', "GestaoSocio", [])
// }
// async getDados(method, classe = 'GestaoSocio', params = []) { // FUNC: getDados()
//     return await this.$http.post(`router.php?method=${method}&class=${classe}`, { class: classe, method: method, params: params })
// }
