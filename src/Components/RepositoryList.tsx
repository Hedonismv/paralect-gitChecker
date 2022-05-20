import React, {FC} from 'react';
import RepositoryItem from "./RepositoryItem";
import {IRepository} from "../types/Types";
import usePaginateFetch from "../hooks/usePaginateFetch";
import Spinner from "./UI/Spinner";
import ErrorComponent from "./Handlers/ErrorComponent";

interface RepoListProps {
    repoData?: IRepository[] | null,
    username: string | null | undefined,
    currentPage: number
}

const RepositoryList:FC<RepoListProps> = ({username, currentPage}):any => {


    const {isLoading, repoData, isError} = usePaginateFetch(currentPage, username)

    if(isLoading){
        return <Spinner/>
    }

    if(isError){
        return <ErrorComponent/>
    }

    return (
        repoData!.map((usr: IRepository) =>
            <RepositoryItem data={usr} key={usr.id}/>
        )
    )
};

export default RepositoryList;