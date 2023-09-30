import { GithubLogo, MapPin, Users } from 'phosphor-react'
import { Header } from '../../components/Header'
import {
  IssueBody,
  IssueComponent,
  IssueHeader,
  IssueLink,
  Tags,
} from './styled'
import { IssuesContext } from '../../contexts/IssuesContext'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'

export function Issue() {
  const { issues } = useContext(IssuesContext)

  const { id } = useParams()
  const navigate = useNavigate()

  if (id === undefined) {
    return <p>Parâmetro id não definido</p>
  }

  const idNumber = parseInt(id, 10)
  const issue = issues[idNumber]

  function distanceToNow(argument: string) {
    return formatDistanceToNow(new Date(argument), {
      locale: ptBR,
      addSuffix: true,
    })
  }

  return (
    <>
      <Header />
      <IssueComponent>
        <IssueHeader>
          <IssueLink>
            <button onClick={() => navigate('/')}>VOLTAR</button>
            <a href="">VER NO GITHUB</a>
          </IssueLink>
          <strong>{issue.title}</strong>
          <Tags>
            <span>
              <GithubLogo size={18} weight="bold" />
              <p>{issue.user.login}</p>
            </span>
            <span>
              <MapPin size={18} weight="bold" />
              <p>{distanceToNow(issue.created_at)}</p>
            </span>
            <span>
              <Users size={18} weight="bold" />
              <p>{issue.comments} comentários</p>
            </span>
          </Tags>
        </IssueHeader>
        <IssueBody>
          <Markdown>{issue.body}</Markdown>
        </IssueBody>
      </IssueComponent>
    </>
  )
}
