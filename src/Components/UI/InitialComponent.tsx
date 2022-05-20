import React from 'react';
import InitialSearchIcon from '../../assets/initialSearch.svg';

const InitialComponent = () => {
    return (
        <div className={'w-screen h-[calc(100vh_-_72px)] flex justify-center items-center'}>
            <div className={'flex items-center justify-center flex-col'}>
                <img src={InitialSearchIcon} alt={'initial-search-icon'}/>
                <span className={'text-secondary text-xl text-center'}>Start with searching <br/>a GitHub user</span>
            </div>
        </div>
    );
};

export default InitialComponent;