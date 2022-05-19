import React, {FC, useState} from 'react';
import RepositoryList from "./RepositoryList";
import Spinner from "./Spinner";
import usePaginateFetch from "../hooks/usePaginateFetch";
import ReactPaginate from "react-paginate";
import NextIcon from "./PageChangeIcon";

interface RepoComponentProps {
    username: string | null | undefined,
    totalRepo: number | undefined
}

const RepoComponent:FC<RepoComponentProps> = ({username, totalRepo}) => {

    const [currentPage, setCurrentPage] = useState<number>(1)

    const {isLoading, repoData, isError} = usePaginateFetch(1, username)

    if(isLoading){
        return (
            <Spinner/>
        )
    }
    if(isError){
        return (
            <Spinner/>
        )
    }

    return (
        <div className={'w-[70%]'}>
            <h2 className={'text-3xl mt-10 font-bold'}>Repositories({totalRepo})</h2>
            <RepositoryList repoData={repoData}/>
            <div className={'flex flex-row'}>
                <div>

                </div>
                <ReactPaginate
                    className={'flex flex-row items-center'}
                    pageCount={Math.ceil(totalRepo! / 4)}
                    breakLabel={'...'}
                    pageRangeDisplayed={2}
                    previousLabel={<NextIcon className={'rotate-180'}/>}
                    nextLabel={<NextIcon/>}
                />
            </div>
        </div>
    );
};

export default RepoComponent;