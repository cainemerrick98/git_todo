import { headers } from "next/headers";
import { url } from "node:inspector";
import { GitHubRepo, GitHubUser } from "@/app/lib/models";

function createRequest(){
    const request = {
        method:'GET',
        headers:{
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28'
        }
    }
    console.log(request)
    return request
}

async function getGithubUser(): Promise<GitHubUser | null>{
    const request = createRequest()

    try{
        const response = await fetch(`https://api.github.com/user`, request)
        if(response.ok){
            const repos = await response.json()
            return repos
        }else{
            console.error('Failed to fetch user', response.status, response.statusText)
        }
    }catch(error){
        console.error('Error fetching user', error)
        return null
    }

    return null
}

async function getGitHubRepos(): Promise<GitHubRepo[] | null>{
    const request = createRequest()

    try{
        const response = await fetch(`https://api.github.com/user/repos`, request)
        if(response.ok){
            const repos = await response.json()
            return repos
        }else{
            console.error('Failed to fetch repos', response.status, response.statusText)
        }
    }catch(error){
        console.error('Error fetching repos', error)
        return null
    }
    
    return null
}

export {getGitHubRepos, getGithubUser}