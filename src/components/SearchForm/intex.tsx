import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchFormContainer, SearchFormHeader } from './styled'

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormType = z.infer<typeof SearchFormSchema>

export function SearchForm() {
  const { register, handleSubmit, reset } = useForm<SearchFormType>({
    resolver: zodResolver(SearchFormSchema),
  })

  function QueryPost(data: SearchFormType) {
    console.log(data.query)
    reset()
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(QueryPost)}>
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
