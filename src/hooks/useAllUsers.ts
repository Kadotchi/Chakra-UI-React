/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      //受け取る値の型を定義<Array<User>>
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        showMessage({ title: "ユーザー取得に失敗しました。", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { getUsers, loading, users };
};
