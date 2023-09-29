import { styled } from 'styled-components'
import { device } from '../../styles/mediaQuerys'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  height: 292px;

  background: ${(props) => props.theme['base-profile']};
`
export const Effect = styled.div`
  max-width: 371px;

  @media ${device.mobile} {
    img {
      display: none;
    }
  }
`
