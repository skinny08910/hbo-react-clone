import React, { useContext, useState } from "react";

export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function HBOProvider({ children }) {
  const [user, setUser] = useState("");
  const defaultUserImg =
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=73a9df4b7bd1b330db1e903e08575ec1";
  const createUserAction = (e) => {
    setUser(e.target.value);
    console.log(user);
  };

  return (
    <StateContext.Provider value={{ user, createUserAction, defaultUserImg }}>
      {children}
    </StateContext.Provider>
  );
}
