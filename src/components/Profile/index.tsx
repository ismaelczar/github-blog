import { useContext } from 'react'
import { ArrowSquareOut, GithubLogo, MapPin, Users } from 'phosphor-react'
import { Header, ProfileContainer, SummaryProfile, Tags } from './styled'
import { UserContext } from '../../contexts/UserContext'

export function Profile() {
  const { user } = useContext(UserContext)
  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="" />
      <SummaryProfile>
        <Header>
          <h1>{user.name}</h1>
          <a
            href="https://github.com/ismaelczar"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <ArrowSquareOut weight="bold" size={12} />
          </a>
        </Header>
        <p>{user.bio}</p>
        <Tags>
          <span>
            <GithubLogo size={18} weight="bold" />
            <p>{user.login}</p>
          </span>
          <span>
            <MapPin size={18} weight="bold" />
            <p>{user.location}</p>
          </span>
          <span>
            <Users size={18} weight="bold" />
            <p>{user.followers} seguidores</p>
          </span>
        </Tags>
      </SummaryProfile>
    </ProfileContainer>
  )
}
