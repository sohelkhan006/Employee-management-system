import React, { createContext } from 'react'

export const authContext = createContext()
const AuthProvider = ({children}) => {
  return (
    <div>
      <authContext.Provider value={'sohel'}>
        {children}
      </authContext.Provider>
    </div>
  )
}

export default AuthProvider
