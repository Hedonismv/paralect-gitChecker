import React, {FC} from 'react';
import {IUser} from "../types/Types";
import FollowingIco from '../assets/provate.svg';
import FollowersIco from '../assets/shared.svg';

interface UserComponentProps{
    userData: IUser | null
}

const UserComponent:FC<UserComponentProps> = ({userData}) => {
    return (
        <div>
            <img className={'rounded-full w-[280px] mt-10'} src={userData?.avatar_url} alt={'user-avatar'}/>
            <div className={'mt-7'}>
                <h4 className={'text-2xl'}>{userData?.name}</h4>
                <h4 className={'text-base text-header mt-3'}>{userData?.login}</h4>
            </div>
            <div className={'flex flex-row items-center justify-between mt-6'}>
                <div className={'flex flex-row'}>
                    <img className={''} src={FollowersIco} alt={'followers-icon'}/>
                    <span>{userData?.followers} followers</span>
                </div>
                <div className={'flex flex-row'}>
                    <img className={''} src={FollowingIco} alt={'following-icon'}/>
                    <span>{userData?.following} following</span>
                </div>
            </div>
        </div>
    );
};

export default UserComponent;