import React, {FC, useMemo, useState} from 'react';
import RepositoryList from "./RepositoryList";
import ReactPaginate from "react-paginate";
import NextIcon from "./UI/PageChangeIcon";
import NullRepository from "./Handlers/NullRepository";
import {calcRepos} from "../utils/helpers";

interface RepoComponentProps {
    username: string | null | undefined,
    totalRepo: number | undefined
}

const RepoComponent:FC<RepoComponentProps> = ({username, totalRepo}) => {

    const [page, setPage] = useState(1)

    const handlePage = (event: any) => {
        const page = event.selected + 1
        setPage(page)
    }

    const reposRange = useMemo(() => {
        return calcRepos(totalRepo!, page)
    }, [totalRepo, page])


    return (
        <div className={'w-full md:ml-5 md:w-[70%]'}>
            {!totalRepo
                ? <NullRepository/>
                :
                <>
                    <h2 className={'text-3xl mt-10 font-semibold'}>Repositories({totalRepo})</h2>
                    <RepositoryList
                        username={username}
                        currentPage={page}
                    />
                    <div className={'flex flex-col md:flex-row justify-center md:justify-end items-center gap-4 md:gap-8'}>
                        <div>
                            <span className={'text-secondary font-light'}>{reposRange} of {totalRepo} items</span>
                        </div>
                        <ReactPaginate
                            className={'flex flex-row items-center gap-2.5 text-secondary'}
                            pageCount={Math.ceil(totalRepo! / 4)}
                            breakLabel={'...'}
                            pageRangeDisplayed={2}
                            activeClassName={'bg-header text-white py-0.5 px-2 rounded-sm'}
                            previousLabel={<NextIcon className={'rotate-180'}/>}
                            nextLabel={<NextIcon/>}
                            onPageChange={handlePage}
                        />
                    </div>
                </>
            }
        </div>
    );
};

export default RepoComponent;