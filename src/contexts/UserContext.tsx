import { createContext, useEffect, useState } from 'react'
import { apiUser } from '../lib/axios'

interface UserProps {
  avatar_url?: string
  name?: string
  bio?: string
  login?: string
  location?: string
  followers?: number
}

interface UserContextProviderProps {
  children: React.ReactNode
}

interface UserContextProps {
  user: UserProps
}

export const UserContext = createContext({} as UserContextProps)

export function UserProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<UserProps>({})

  async function fetchUser() {
    const response = await apiUser.get('ismaelczar', {})

    setUser(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}
