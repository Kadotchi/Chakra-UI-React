import { useContext } from "react";

import {
  LoginUserContext,
  LoginUserContextType
} from "../providers/LoginUserProvider";

// コンポーネントからuseLoginUserを使う事によってコンテキストの値を参照できる
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
