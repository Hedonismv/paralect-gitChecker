export interface IUser {
    avatar_url: string,
    followers: number,
    following: number,
    html_url: string,
    login: string | null,
    name: string,
    url: string,
    public_repos: number
}

export interface IRepository {
    id: number,
    name: string,
    description: string,
    full_name: string
}