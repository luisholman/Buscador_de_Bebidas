import {useState, useEffect, useContext, createContext} from 'react'
import axios from 'axios'

export const BebidasContext = createContext ()

export const BebidasProvider = ({children})=>{

   
    return(
        <BebidasContext.Provider
        value={{
            
        }}
        >
            {children}
        </BebidasContext.Provider>
    )
}
