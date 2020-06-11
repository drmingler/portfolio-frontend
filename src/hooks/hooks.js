import { useEffect, useState } from "react";
import { getUser} from "../utils/api";

export const useContact = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser(1).then(response => setUser(response));
  }, []);

  return user;
};