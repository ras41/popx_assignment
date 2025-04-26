import { createContext, useContext, useState } from "react";

// 1. Create the context
const UserContext = createContext();

// 2. Create provider to wrap app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Create custom hook to use easily
export const useUser = () => useContext(UserContext);
