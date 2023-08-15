"use client";
import { useAuth } from "@/providers/user/UserProvider";
import { api } from "@/service/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../button/Button";
import { Column } from "../column/Column";
import { Label } from "../label/Label";
const loginSchema = z.object({
  _username: z.string(),
  _password: z.string(),
});
type LoginData = z.infer<typeof loginSchema>;
export function FormLogin() {
  const { setUser, setAccessToken } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });
  async function getLogins(data: LoginData) {
    await api.post("CustomUserApps/aceiteTermo", {
      username: data._username,
    });

    const logins = await api.get(`logins`);
    const idLogin = logins.data.result.logins[0].id;
    async function login() {
      const res = await api.post("login/" + idLogin, data);

      if (!res.data.error) {
        setAccessToken(res.data.result.access_token);
        setUser({
          ...res.data.result.user,
          access_token: res.data.result.access_token,
        });
        setCookie(
          null,
          "@user-session-mundoColorado",
          JSON.stringify({
            ...res.data.result.user,
          }),
          {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          }
        );
        setCookie(
          null,
          "@token-session-mundoColorado",
          JSON.stringify(res.data.result.access_token),
          {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          }
        );
        router.push("/");
      }
    }
    login();
  }
  return (
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
  );
}
