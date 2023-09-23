import { SearchFormContainer, SearchFormHeader } from './styled'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </SearchFormHeader>
      <input type="text" placeholder="Buscar Publicações" />
    </SearchFormContainer>
  )
}
