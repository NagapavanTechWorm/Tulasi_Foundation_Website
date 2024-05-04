import { useContext, createContext, useState } from "react";

const AppContext = createContext();


export const AppProvider = ({children}) => {
    const[hello,setHello] = useState("hello");
  return (
    <AppContext.Provider value={{hello}}>
        {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
    return useContext(AppContext);
};