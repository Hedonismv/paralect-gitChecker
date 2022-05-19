import React, {FC} from 'react';
import {IRepository} from "../types/Types";


interface RepoItemProps {
    data: IRepository
}


const RepositoryItem:FC<RepoItemProps> = ({data}) => {
    // width: 877px;
    // height: 112px;
    return (
        <div className={'flex rounded bg-white flex-col pl-8 py-6 my-6'}>
            <h2 className={'text-header mb-4 text-2xl'}>{data.name}</h2>
            <span className={'text-base'}>{data.description}</span>
        </div>
    );
};

export default RepositoryItem;