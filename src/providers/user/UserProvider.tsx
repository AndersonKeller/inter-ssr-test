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
}
export const userContext = createContext({} as UserValues);

export function UserProvider({ children }: UserProps) {
  const [user, setUser] = useState<UserData>({} as UserData);
  const [accessToken, setAccessToken] = useState("");
  async function verifyLogged() {
    const cookies = parseCookies();
    if (cookies["@user-session-mundoColorado"]) {
      setUser(JSON.parse(cookies["@user-session-mundoColorado"]));
      api.defaults.headers.common.Authorization = `Bearer ${
        JSON.parse(cookies["@user-session-mundoColorado"]).access_token
      }`;
    }
  }
  useEffect(() => {
    verifyLogged();
  }, []);
  return (
    <userContext.Provider
      value={{ accessToken, setAccessToken, setUser, user }}
    >
      {children}
    </userContext.Provider>
  );
}
export const useAuth = () => useContext(userContext);
