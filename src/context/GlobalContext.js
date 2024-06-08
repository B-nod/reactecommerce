import React, {createContext} from 'react';

export const Global = createContext()

const GlobalContextProvider=(props)=>{
    <Global.Provider value={'React js'}>

        {props.children}
    </Global.Provider>

}

export default GlobalContextProvider