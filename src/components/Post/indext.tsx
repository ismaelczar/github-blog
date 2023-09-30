import { useContext } from 'react'
import { GridPosts, PostsCard, PostsCardHeader, Separator } from './styled'
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

  console.log(issues[0]?.body)

  return (
    <GridPosts>
      {issues.map((issue, index) => (
        <PostsCard key={issue.id} to={`/issue/${index}`}>
          <Separator>
            <PostsCardHeader>
              <strong>{issue.title}</strong>
              <time>{DistenceToNow(issue.created_at)}</time>
            </PostsCardHeader>
            <p>{issue.body}</p>
          </Separator>
        </PostsCard>
      ))}
    </GridPosts>
  )
}
