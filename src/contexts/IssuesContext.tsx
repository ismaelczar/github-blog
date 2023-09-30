import { createContext, useEffect, useState } from 'react'
import { apiIssues, apiSearch } from '../lib/axios'

interface user {
  login: string
}

interface IssuesProps {
  id: number
  title: string
  body: string
  created_at: string
  user: user
  comments: number
}

interface IssuesContextProps {
  issues: IssuesProps[]
  searchIssues: (query: string) => Promise<void>
}

interface IssueProviderProps {
  children: React.ReactNode
}

export const IssuesContext = createContext({} as IssuesContextProps)

export function IssuesProvider({ children }: IssueProviderProps) {
  const [issues, setIssues] = useState<IssuesProps[]>([])

  async function fetchIssues() {
    const response = await apiIssues.get('issues')
    setIssues(response.data)
  }

  async function searchIssues(query?: string) {
    const apiURL = `https://api.github.com/search/issues?q=${query}%20repo:ismaelczar/github-blog`
    const response = await apiSearch.get(apiURL)
    const ressult = response.data.items

    setIssues(ressult)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues, searchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
