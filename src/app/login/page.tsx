"use client";
import { Button } from "@/components/button/Button";
import { Column } from "@/components/column/Column";
import { Headline } from "@/components/headline/Headline";
import { Label } from "@/components/label/Label";
import { LinkComponent } from "@/components/link/Link";
import { ModalProblems } from "@/components/modalProblems/ModalProblems";
import { api } from "@/service/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "../globals.css";
import "./styles.css";
const loginSchema = z.object({
  _username: z.string(),
  _password: z.string(),
});
type LoginData = z.infer<typeof loginSchema>;

export default function Login() {
  // const [loginData, setLoginData] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });
  async function getLogins(data: LoginData) {
    console.log(data);
    const termos = await api.post("CustomUserApps/aceiteTermo", {
      username: data._username,
    });
    console.log(termos.data);
    const logins = await api.get(`logins`);
    console.log(logins.data.result);
    async function login() {
      const res = await api.post(
        "login/" + logins.data.result.logins[0].id,
        data
      );
      console.log(res.data);
    }
    login();
  }
  return (
    <>
      <div className="sci-login">
        <Column>
          <Headline type="h3" text="ENTRAR" color="red" font="cursive" />
          Escolha uma das opções abaixo para acessar
        </Column>
        <form onSubmit={handleSubmit(getLogins)}>
          <Column>
            <Label label="CPF, MATRÍCULA, PASSAPORTE ou DNI" />
            <input
              {...register("_username")}
              type="text"
              placeholder="Somente Números e Letras"
            ></input>
          </Column>
          <Column>
            <Label label="SENHA" />
            <input {...register("_password")} type="password"></input>
          </Column>
          <Button
            type="submit"
            label="ENTRAR"
            tipo="cta-primary"
            size="cta-regular"
          />
        </form>
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
    </>
  );
}
//@click="$util.go('Cadastro', { tipo: 'socio' })"
// @click="getLogin(cadastro)"
//:disabled="cadastro.email.length < 6 || cadastro.senha.length < 6"
