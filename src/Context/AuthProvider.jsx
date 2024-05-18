import { signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    // create user 
    const createUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(email, password);
    };
    const authInfo = { user };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;