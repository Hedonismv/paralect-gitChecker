//User interface from  https://api.github.com/users/USERNAME endpoint;
export interface IUser {
    avatar_url: string,
    followers: number,
    following: number,
    html_url: string,// for a.href
    login: string | null,
    name: string,
    url: string,
    public_repos: number
}

//Repository interface from  https://api.github.com/users/USERNAME/repos endpoint;
export interface IRepository {
    id: number,
    name: string,
    description: string,
    full_name: string,
    html_url: string //for a.href
}