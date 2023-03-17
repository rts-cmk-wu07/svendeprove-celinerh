import { useContext, useState, createContext, useEffect } from "react";
import { getCookie } from "react-use-cookie";

const TokenContext = createContext(null);

export const useToken = () => {
  return useContext(TokenContext);
};

function TokenProvider({ children }) {
  const [token, setToken] = useState(JSON.parse(getCookie("token", null)));

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}

export default TokenProvider;
