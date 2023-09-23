import { styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  width: 100%;

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
  width: 100%;
  max-width: 1440px;
  display: flex;

  justify-content: space-between;
`
