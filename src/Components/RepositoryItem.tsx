import React, {FC} from 'react';
import {IRepository} from "../types/Types";


interface RepoItemProps {
    data: IRepository
}


const RepositoryItem:FC<RepoItemProps> = ({data}) => {

    return (
        <div className={'flex rounded bg-white flex-col pl-8 py-6 my-6'}>
            <a
                rel={"noreferrer"}
                target={"_blank"}
                href={data.html_url}
                className={'font-medium text-header mb-4 text-2xl'}
            >{data.name}</a>
            <span className={'text-base'}>{data.description}</span>
        </div>
    );
};

export default RepositoryItem;