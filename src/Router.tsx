import { Route, Routes } from 'react-router-dom'

import { Blog } from './pages/Blog'
import { Issue } from './pages/Issue/[id]'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/issue/:id" element={<Issue />} />
    </Routes>
  )
}
