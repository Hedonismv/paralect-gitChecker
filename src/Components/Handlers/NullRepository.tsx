import React from 'react';
import NullRepositoryIcon from '../../assets/repNotFound.svg';

const NullRepository = () => {
    return (
        <div className={'w-full mt-10 md:h-[calc(100vh_-_72px)] flex justify-center items-center'}>
            <div className={'flex items-center justify-center flex-col'}>
                <img src={NullRepositoryIcon} alt={'initial-search-icon'}/>
                <span className={'text-secondary text-xl text-center'}>Repository list is empty</span>
            </div>
        </div>
    );
};

export default NullRepository;