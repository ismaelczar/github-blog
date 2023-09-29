import styled from 'styled-components'
import { device } from '../../styles/mediaQuerys'

export const ProfileContainer = styled.section`
  display: flex;
  gap: 2rem;

  width: auto;
  padding: 2rem 2.5rem;
  margin: -80px auto 0;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  img {
    height: 148px;
    width: 148px;
    border-radius: 8px;
  }

  @media ${device.mobile} {
    align-items: center;
    flex-direction: column;
    padding: 1rem;
  }
`
export const SummaryProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-weight: 700;
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-top: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  color: ${(props) => props.theme['base-subtitle']};

  svg {
    color: ${(props) => props.theme['base-label']};
  }

  @media ${device.mobile} {
    font-size: 0.6rem;
  }
`
