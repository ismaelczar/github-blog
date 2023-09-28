import { useContext } from 'react'
import { GridPosts, PostsCard, PostsCardHeader } from './styled'
import { IssuesContext } from '../../contexts/IssuesContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Posts() {
  const { issues } = useContext(IssuesContext)

  function DistenceToNow(argument: string) {
    return formatDistanceToNow(new Date(argument), {
      locale: ptBR,
      addSuffix: true,
    })
  }

  return (
    <GridPosts>
      {issues.map((issue, index) => (
        <PostsCard key={issue.id} to={`/issue/${index}`}>
          <PostsCardHeader>
            <strong>{issue.title}</strong>
            <time>{DistenceToNow(issue.created_at)}</time>
          </PostsCardHeader>
          <small>{issue.body}</small>
        </PostsCard>
      ))}
    </GridPosts>
  )
}
