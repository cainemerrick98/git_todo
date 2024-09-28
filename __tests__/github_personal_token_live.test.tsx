import '@testing-library/jest-dom'
import {getGithubUser, getGitHubRepos} from '../src/app/api/auth/github_auth_pak'
import { GitHubRepo, GitHubUser } from '@/app/lib/models'
import { mock } from 'node:test'


describe('getGitHubUser (live)', () => {
    it('should return a github user', async () => {
        const user = await getGithubUser()

        //check has user property avatar url
        if(user){
            expect(user).toHaveProperty('avatar_url')
        }
    })
})

describe('getGitHubRepos (live)', () => {
    it('should return the real repositories for a given org', async () => {
        const repos = await getGitHubRepos()

        //we expect an array of repos
        expect(Array.isArray(repos)).toBe(true)

        //check for a repo property
        if(repos && repos.length > 0){
            expect(repos[0]).toHaveProperty('name')
        }
    })
})




