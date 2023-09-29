import styled from 'styled-components'
import { device } from '../../styles/mediaQuerys'

export const IssueComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IssueHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: auto;
  max-width: 864px;
  padding: 2rem 2.5rem;
  margin: -80px auto 0;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  @media ${device.mobile} {
    width: auto;
    padding: 1rem;
    font-size: 1rem;
  }
`

export const IssueLink = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-weight: 700;

    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};
    text-decoration: none;

    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }

    @media ${device.mobile} {
      font-size: 0.75rem;
    }
  }

  button {
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.2rem;

    font-weight: 700;
    color: ${(props) => props.theme.blue};
    background: transparent;
    text-decoration: none;

    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    border: none;

    cursor: pointer;
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

    color: ${(props) => props.theme['base-subtitle']};
  }
  svg {
    color: ${(props) => props.theme['base-label']};
  }

  @media ${device.mobile} {
    font-size: 0.6rem;
  }
`
export const IssueBody = styled.div`
  max-width: 864px;
  text-align: center;

  padding: 3rem;
  letter-spacing: 0;
  text-align: justify;

  @media ${device.mobile} {
    padding: 1rem;
  }
`
