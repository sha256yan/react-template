import React, {useState, createContext, useContext} from "react";

const getAuthContext = createContext({});
const setAuthContext = createContext({});

function AuthProvider(props) {
    const [emailAuth, setEmailAuth] = useState(true);
    const [web3Auth, setWeb3Auth] = useState(false);

    return (
        <setAuthContext.Provider value={{setEmailAuth, setWeb3Auth}}>
            <getAuthContext.Provider value={{emailAuth, web3Auth}}>
                {props.children}
            </getAuthContext.Provider>
        </setAuthContext.Provider>
    )
}



function useGetAuth() {
    return useContext(getAuthContext);
}

function useSetAuth() {
    return useContext(setAuthContext);
}




export { AuthProvider, useGetAuth, useSetAuth}





