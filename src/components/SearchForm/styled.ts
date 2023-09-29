import { styled } from 'styled-components'
import { device } from '../../styles/mediaQuerys'

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  padding: 1rem;
  width: auto;

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
export const SearchFormHeader = styled.div`
  max-width: 1440px;
  display: flex;
  width: 100%;

  justify-content: space-between;
`
