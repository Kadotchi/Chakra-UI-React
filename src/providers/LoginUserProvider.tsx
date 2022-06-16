import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

import { User } from "../types/api/user";

type LoguinUserContextType = {
  loginUser: User | null;
  setLoguinUser: Dispatch<SetStateAction<User | null>>;
};

const LoguinUserContext = createContext<LoguinUserContextType>(
  {} as LoguinUserContextType
);

export const LoguinUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoguinUser] = useState<User | null>(null);
  return (
    <LoguinUserContext.Provider value={{ loginUser, setLoguinUser }}>
      {children}
    </LoguinUserContext.Provider>
  );
};
