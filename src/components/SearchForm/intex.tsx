import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchFormContainer, SearchFormHeader } from './styled'
import { useContext } from 'react'
import { IssuesContext } from '../../contexts/IssuesContext'

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormType = z.infer<typeof SearchFormSchema>

export function SearchForm() {
  const { searchIssues } = useContext(IssuesContext)

  const { register, handleSubmit, reset } = useForm<SearchFormType>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function handleSearchFormSubmit(data: SearchFormType) {
    await searchIssues(data.query)
    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchFormSubmit)}>
      <SearchFormHeader>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </SearchFormHeader>
      <input
        type="text"
        placeholder="Buscar Publicações"
        {...register('query')}
      />
    </SearchFormContainer>
  )
}
