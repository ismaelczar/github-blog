import { styled } from 'styled-components'

export const GridPosts = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;
  gap: 2rem;
`

export const PostsCard = styled.div`
  padding: 1rem;
  line-height: 160%;

  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-post']};

  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1.25;

  max-height: 250px;
  overflow: hidden;

  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${(props) => props.theme['base-label']};
    cursor: pointer;
  }
`

export const PostsCardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  strong {
    flex-wrap: wrap;
    font-size: 1.25rem;
    width: 300px;
    line-height: 160%;
  }
`
