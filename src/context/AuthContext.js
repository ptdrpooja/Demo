import React,{createContext,useReducer} from "react";
import { SignInReducer } from "../reducer/AuthReducer";

export const SignInContext = createContext();

export const SignInContextProvider = (props)=>{
    const [signedIn, dispathSignedIn] = useReducer(SignInReducer,{
        userToken:null,
    })

    return(
        <SignInContext.Provider value ={{signedIn, dispathSignedIn}}>
            {props.children}

        </SignInContext.Provider>
    )

}

