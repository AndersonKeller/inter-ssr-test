"use client";
import torcida from "@/assets/images/Torcida-Inter-apoio.jpg";
import { api } from "@/service/api";
import Image from "next/image";
import { useState } from "react";
import config from "../../../app.config.json";
import "./styles.css";

export function Fila() {
  const [segundos, setSegundos] = useState(25);
  async function res() {
    const res = await api.post("CustomUserApps/Configs", { idpessoa_tipo: "" });
    console.log(res.data);
  }
  // let time = setInterval(() => {
  //   if (segundos > 0) {
  //     setSegundos(segundos - 1);
  //   }
  //   if (segundos == 0) {
  //     clearInterval(time);
  //     window.location.reload();
  //   }
  // }, 1000);
  // useEffect(() => {
  //   res();
  // }, []);
  return (
    <main
      className="app-fila"
      style={{ backgroundImage: "url(" + torcida.src + ")" }}
    >
      <div className="text-center ma-3">
        <Image
          alt="logo"
          src={config.globalConfigs.mundoColorado}
          width={120}
          height={70}
          loading="lazy"
          className="mx-auto mb-5"
        />

        <h1 className="mb-0 mt-5">Aguarde alguns instantes...</h1>
        <small style={{ color: "#7f7f7f" }}>Please wait</small>

        <div style={{ maxWidth: "300px !important;" }}>
          <label>Sua posição é: {segundos} (s)</label>

          <h1
            style={{
              marginBottom: "0px; display: flex; justify-content: center;",
            }}
            className="mt-5"
          ></h1>
        </div>

        <div style={{ maxWidth: "720px !important;" }}>
          <p>
            No momento, estamos recebendo muitos acessos para a compra de
            ingressos. Assim que possível, você será redirecionado
            automaticamente para continuar sua navegação. Mantenha-se conectado.
            Obrigado pela compreensão!
          </p>

          <small style={{ color: "#7f7f7f;" }}>
            We are getting a lot of hits.To maintain the quality of our service,
            you are in the queue. As soon as possible, you ll be redirected
            automatically. Wait a little.
          </small>
        </div>
      </div>
    </main>
  );
}
