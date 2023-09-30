import axios from 'axios'

export const apiUser = axios.create({
  baseURL: 'https://api.github.com/users',
})

export const apiIssues = axios.create({
  baseURL: 'https://api.github.com/repos/ismaelczar/github-blog',
})

export const apiSearch = axios.create({
  baseURL: 'https://api.github.com/search/issues',
})
