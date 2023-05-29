import { useState } from "react";
import { createContext } from "react";

export const context = createContext();

const Provider = ({ children }) => {

    const [login, setLogin] = useState(false);

    let data = {login,setLogin};

    console.log(login);
  return <context.Provider value={data}>{children}</context.Provider>;
};

export default Provider;
