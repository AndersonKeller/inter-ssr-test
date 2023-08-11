import { Button } from "@/components/button/Button";
import { Column } from "@/components/column/Column";
import { Headline } from "@/components/headline/Headline";
import { Label } from "@/components/label/Label";
import "../globals.css";
import "./styles.css";
export default function Login() {
  return (
    <div className="sci-login">
      <Column>
        <Headline type="h3" text="ENTRAR" color="red" font="cursive" />
        Escolha uma das opções abaixo para acessar
      </Column>
      <Column>
        <Label label="CPF, MATRÍCULA, PASSAPORTE ou DNI" />
        <input type="text" placeholder="Somente Números e Letras"></input>
      </Column>
      <Column>
        <Label label="SENHA" />
        <input type="password"></input>
      </Column>
      <Button label="ENTRAR" tipo="cta-primary" size="cta-regular" />
    </div>
  );
}
// @click="getLogin(cadastro)"
//:disabled="cadastro.email.length < 6 || cadastro.senha.length < 6"
