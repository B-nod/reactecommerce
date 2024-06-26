import React, {createContext} from 'react';

export const Global = createContext()

const student = {
    fullName : 'Binod Tamang',
    subject:'web development'
}

const GlobalContextProvider=(props)=>(
    <Global.Provider value={student}>

        {props.children}
    </Global.Provider>

)

export default GlobalContextProvider