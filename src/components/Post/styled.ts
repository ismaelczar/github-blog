import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import { device } from '../../styles/mediaQuerys'

export const GridPosts = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;
  gap: 2rem;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }
`

export const PostsCard = styled(NavLink)`
  padding: 0.5rem;
  line-height: 160%;
  text-decoration: none;
  cursor: pointer;

  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-post']};

  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-height: 250px;
  border: 1px solid transparent;

  white-space: pre-wrap;

  time {
    font-size: 0.875rem;
  }

  &:hover {
    border: 1px solid ${(props) => props.theme['base-label']};
    cursor: pointer;
  }

  @media ${device.mobile} {
    padding: 1rem;
    time {
      font-size: 0.75rem;
    }
  }
`

export const Separator = styled.div`
  margin: 0.5rem;
  overflow: hidden;
`

export const PostsCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 1.25rem;

  strong {
    flex-wrap: wrap;
    font-size: 1.25rem;
    width: 300px;
    line-height: 160%;
  }

  @media ${device.mobile} {
    strong {
      width: 230px;
    }
  }
`

export const PostContent = styled.div`
  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.blue};
  }
`
