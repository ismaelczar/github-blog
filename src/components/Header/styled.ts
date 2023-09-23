import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  /* max-width: 1440; */
  height: 292px;

  background: ${(props) => props.theme['base-profile']};
`
export const Effect = styled.div`
  max-width: 371px;
`
