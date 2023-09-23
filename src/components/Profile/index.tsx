import { Alien, ArrowSquareOut } from 'phosphor-react'
import Avatar from '../../assets/avatar.svg'
import { Header, ProfileContainer, SummaryProfile, Tags } from './styled'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={Avatar} alt="" />
      <SummaryProfile>
        <Header>
          <h1>Cameron Williamson</h1>
          <a href="#">
            GITHUB <ArrowSquareOut weight="bold" size={12} />
          </a>
        </Header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <Tags>
          <span>
            <Alien />
            <p>cameronwll</p>
          </span>
          <span>
            <Alien />
            <p>cameronwll</p>
          </span>
          <span>
            <Alien />
            <p>cameronwll</p>
          </span>
        </Tags>
      </SummaryProfile>
    </ProfileContainer>
  )
}
