import { createContext, useContext, useState } from "react";

const userContext = createContext();

export const userProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [displayName, setDisplayName] = useState(null);

  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    cofirmPassword: "",
  });

  const setUser = (email, name) => {
    setUserEmail(email);
    setDisplayName(name);
  };

  return (
    <userContext.Provider
      value={{
        userEmail,
        displayName,
        setUser,
        formFields,
        setFormFields,
      }}
    >
      {children}
    </userContext.Provider>
  );
};



export const useUser = () => {
  return useContext(userContext);
};
