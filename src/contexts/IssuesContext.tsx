import { createContext, useEffect, useState } from 'react'
import { apiIssues } from '../lib/axios'

interface IssuesProps {
  id: number
  title: string
  body: string
  created_at: string
}

interface IssuesContextProps {
  issues: IssuesProps[]
}

interface IssueProviderProps {
  children: React.ReactNode
}

export const IssuesContext = createContext({} as IssuesContextProps)

export function IssuesProvider({ children }: IssueProviderProps) {
  const [issues, setIssues] = useState<IssuesProps[]>([])

  async function fetchIssues() {
    const response = await apiIssues.get('issues', {})
    setIssues(response.data)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues }}>
      {children}
    </IssuesContext.Provider>
  )
}
