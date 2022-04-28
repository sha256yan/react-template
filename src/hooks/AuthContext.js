import React, {useState, createContext, useContext} from "react";

const AuthContext = createContext({});


function AuthProvider(props) {
    const [emailAuth, setEmailAuth] = useState();
    const [web3Auth, setWeb3Auth] = useState();

    return (
        <AuthContext.Provider value={{emailAuth, setEmailAuth, web3Auth, setWeb3Auth}}>
            {props.children}
        </AuthContext.Provider>
    )
}



function useAuth() {
    return useContext(AuthContext);
}




export { AuthProvider, useAuth}





