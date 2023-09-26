import { useContext } from 'react'
import { GridPosts, PostsCard, PostsCardHeader } from './styled'
import { IssuesContext } from '../../contexts/IssuesContext'

export function Posts() {
  const { issues } = useContext(IssuesContext)

  return (
    <GridPosts>
      {issues.map((issue) => (
        <PostsCard key={issue.id}>
          <PostsCardHeader>
            <strong>{issue.title}</strong>
            <span>{issue.created_at}</span>
          </PostsCardHeader>
          <small>{issue.body}</small>
        </PostsCard>
      ))}
    </GridPosts>
  )
}
