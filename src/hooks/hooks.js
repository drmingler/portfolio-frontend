import { useEffect, useState } from "react";
import { getUser } from "../utils/api";

export const useContact = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser(1).then(response => setUser(response));
  }, []);

  return user;
};

export const useForm = callback => {
  const [userInput, setUserInput] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setUserInput(userInput => ({ ...userInput, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    callback(userInput);
    setUserInput({});
  };

  return {
    handleChange,
    handleSubmit,
    userInput
  };
};

