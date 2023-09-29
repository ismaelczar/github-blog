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
  padding: 1rem;
  line-height: 160%;
  text-decoration: none;
  cursor: pointer;

  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-post']};

  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1.25;

  max-height: 250px;
  overflow: hidden;
  border: 1px solid transparent;

  time {
    font-size: 0.875rem;
  }

  &:hover {
    border: 1px solid ${(props) => props.theme['base-label']};
    cursor: pointer;
  }

  @media ${device.mobile} {
    padding: 1rem;
  }
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
`