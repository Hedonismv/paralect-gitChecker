import React, {useEffect, useState} from 'react';
import {IRepository} from "../types/Types";
import axios from "axios";

const UsePaginateFetch = (page: number | null, username: string | null | undefined) => {
    const [repoData, setRepoData] = useState<IRepository[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isError, setIsError] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        setRepoData(null)
        if(username){
            axios.get(`https://api.github.com/users/${username}/repos?per_page=4&page=${page}`)
                .then((res) => {
                    setRepoData(res.data)
                    setIsLoading(false)
                })
                .catch(err => setIsError(true))
        }
    }, [page, username])

    return {repoData, isLoading, isError}
};

export default UsePaginateFetch;