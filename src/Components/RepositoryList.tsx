import React, {FC} from 'react';
import RepositoryItem from "./RepositoryItem";
import {IRepository} from "../types/Types";

interface RepoListProps {
    repoData: IRepository[] | null
}

const RepositoryList:FC<RepoListProps> = ({repoData}):any => {

    return (
        repoData!.map((usr: IRepository) =>
            <RepositoryItem data={usr} key={usr.id}/>
        )
    )
};

export default RepositoryList;