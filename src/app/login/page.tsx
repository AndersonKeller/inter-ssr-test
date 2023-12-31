import { Button } from "@/components/button/Button";
import { Column } from "@/components/column/Column";
import { FormLogin } from "@/components/formLogin/FormLogin";
import { Headline } from "@/components/headline/Headline";
import { LinkComponent } from "@/components/link/Link";
import { ModalProblems } from "@/components/modalProblems/ModalProblems";
import { Providers } from "@/providers/Providers";
import "../globals.css";
import "./styles.css";

export default function Login() {
  return (
    <Providers>
      <div className="sci-login">
        <Column>
          <Headline type="h3" text="ENTRAR" color="red" font="cursive" />
          Escolha uma das opções abaixo para acessar
        </Column>
        <FormLogin />
        <Column className="forgot-password">
          <LinkComponent>
            <span>REDEFINIR SENHA / PRIMEIRO ACESSO SÓCIO</span>
          </LinkComponent>
        </Column>

        <div className="sci-or-signin">
          <Column>
            <Headline type="h4" text="Ainda Não tem conta?" color="red" />
            Então cadastre-se no Mundo Colorado!
          </Column>
          <Button label="CADASTRAR" tipo="cta-tertiary" size="cta-regular" />
        </div>
      </div>
      <ModalProblems />
    </Providers>
  );
}
//@click="$util.go('Cadastro', { tipo: 'socio' })"
// @click="getLogin(cadastro)"
//:disabled="cadastro.email.length < 6 || cadastro.senha.length < 6"
