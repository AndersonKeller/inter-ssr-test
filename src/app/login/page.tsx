import { Headline } from "@/components/headline/Headline";
import "../globals.css";
import "./styles.css";
import { Column } from "@/components/column/Column";
export default function Login() {
  return (
    <div className="sci-login">
      <Column>
        <Headline type="h3" text="ENTRAR" color="red" font="cursive" />
        Escolha uma das opções abaixo para acessar
      </Column>
    </div>
  );
}
