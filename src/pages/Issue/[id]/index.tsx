import { GithubLogo, MapPin, Users } from 'phosphor-react'
import { Header } from '../../../components/Header'
import {
  IssueBody,
  IssueComponent,
  IssueHeader,
  IssueLink,
  Tags,
} from './styled'
import { IssuesContext } from '../../../contexts/IssuesContext'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function Issue() {
  const { issues } = useContext(IssuesContext)
  const { id } = useParams()
  const navigate = useNavigate()

  if (id === undefined) {
    return <p>Parâmetro id não definido</p>
  }

  const idNumber = parseInt(id, 10)

  return (
    <>
      <Header />
      <IssueComponent>
        <IssueHeader>
          <IssueLink>
            <button onClick={() => navigate('/')}>VOLTAR</button>
            <a href="">VER NO GITHUB</a>
          </IssueLink>
          <strong>{issues[idNumber].title}</strong>
          <Tags>
            <span>
              <GithubLogo size={18} weight="bold" />
              <p></p>
            </span>
            <span>
              <MapPin size={18} weight="bold" />
              <p>{issues[idNumber].created_at}</p>
            </span>
            <span>
              <Users size={18} weight="bold" />
              <p> comentários</p>
            </span>
          </Tags>
        </IssueHeader>
        <IssueBody>{issues[idNumber].body}</IssueBody>
      </IssueComponent>
    </>
  )
}
