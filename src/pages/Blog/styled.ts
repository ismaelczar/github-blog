import styled from 'styled-components'
import { device } from '../../styles/mediaQuerys'

export const BlogContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  width: 864px;
  margin: 0 auto 4rem;

  @media ${device.mobile} {
    width: auto;
  }
`
