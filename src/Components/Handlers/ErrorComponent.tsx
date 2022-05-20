import React from 'react';
import UserNotFoundIcon from '../../assets/userNotFound.svg';

const ErrorComponent = () => {
    return (
        <div className={'w-screen h-[calc(100vh_-_72px)] flex justify-center items-center'}>
            <div className={'flex items-center justify-center flex-col'}>
                <img src={UserNotFoundIcon} alt={'initial-search-icon'}/>
                <span className={'text-secondary text-xl text-center'}>User not found</span>
            </div>
        </div>
    );
};

export default ErrorComponent;