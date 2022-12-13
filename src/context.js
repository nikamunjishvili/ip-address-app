import { useState, useContext, createContext, useEffect } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [address, setAddress] = useState([]);
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    const resp = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_moiOBACOKKyPhePH3BfUSWTGsnB3F&ipAddress=${query}`
    );
    const data = await resp.json();
    console.log(data);
    setAddress(data);
    console.log(address);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        address,
        query,
        setQuery,
        fetchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
