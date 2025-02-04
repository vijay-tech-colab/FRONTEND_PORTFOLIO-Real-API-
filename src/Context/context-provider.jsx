import { createContext, useState } from "react";

const AuthContext = createContext({
    user: null,
    setUser : () => {}
});

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };