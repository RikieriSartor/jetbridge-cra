import React, { useState, useContext, useCallback, createContext } from "react"

interface IUserProps {
  id: string
  name: string
  email: string
}

interface IAuthContextProps {
  user?: IUserProps
  signIn(email: string, password: string): IUserProps | null
  signOut(): void
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps)

export function useAuth(): IAuthContextProps {
  const context = useContext(AuthContext)
  return context
}

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUserProps | undefined>()

  const signIn = useCallback((email: string, password: string): IUserProps | null => {
    if (email && password) {
      const fakeUser = {
        id: "1",
        name: "Username",
        email: email,
      }

      setUser(fakeUser)
      return fakeUser
    } else {
      return null
    }
  }, [])

  const signOut = useCallback(() => {
    setUser(undefined)
  }, [])

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}
