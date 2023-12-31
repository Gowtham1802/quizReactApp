import { createContext, useContext, useState } from "react";

const UserContext = createContext();
console.log(UserContext);

export const UserProvider = ({ children }) => {
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
    <UserContext.Provider
      value={{
        userEmail,
        displayName,
        setUser,
        formFields,
        setFormFields,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  console.log(useContext(UserContext));
  return useContext(UserContext);
};
