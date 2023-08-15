import { parseCookies } from "nookies";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "@/service/api";
import { UserData } from "./interfaces";
interface UserProps {
  children: ReactNode;
}

interface UserValues {
  user: UserData;
  setUser: Dispatch<SetStateAction<UserData>>;
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  configs: any;
  setConfigs: Dispatch<SetStateAction<any>>;
}
export const userContext = createContext({} as UserValues);

export function UserProvider({ children }: UserProps) {
  const [user, setUser] = useState<UserData>({} as UserData);
  const [accessToken, setAccessToken] = useState("");
  const [configs, setConfigs] = useState("");
  async function verifyLogged() {
    const cookies = parseCookies();
    if (cookies["@user-session-mundoColorado"]) {
      setUser(JSON.parse(cookies["@user-session-mundoColorado"]));
      const token = cookies["@token-session-mundoColorado"];
      console.log(token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }

  async function getConfigs() {
    const res = await api.post("CustomUserApps/Configs", { idpessoa_tipo: "" });
    console.log();
    setConfigs(res.data.result);
  }
  useEffect(() => {
    verifyLogged();
    getConfigs();
  }, []);
  return (
    <userContext.Provider
      value={{
        configs,
        setConfigs,
        accessToken,
        setAccessToken,
        setUser,
        user,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
export const useAuth = () => useContext(userContext);
