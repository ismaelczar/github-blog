import { Header } from '../../components/Header'
import { Posts } from '../../components/Posts/intext'
import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchForm/intex'
import { BlogContainer } from './styled'

export function Blog() {
  return (
    <div>
      <Header />

      <BlogContainer>
        <Profile />
        <SearchForm />
        <Posts />
      </BlogContainer>
    </div>
  )
}
