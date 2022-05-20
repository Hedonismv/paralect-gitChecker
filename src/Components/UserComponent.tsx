import React, {FC, useMemo} from 'react';
import {IUser} from "../types/Types";
import FollowingIco from '../assets/provate.svg';
import FollowersIco from '../assets/shared.svg';
import {cutNumber} from "../utils/helpers";

interface UserComponentProps{
    userData: IUser | null,
}

const UserComponent:FC<UserComponentProps> = ({userData}) => {


    const followers = useMemo(() => {
        return cutNumber(userData?.followers!)
    }, [userData?.followers])

    const following = useMemo(() => {
        return cutNumber(userData?.following!)
    }, [userData?.following])


    return (
        <div className={'flex justify-center flex-col items-center md:block'}>
            <img className={'rounded-full w-[280px] mt-10'} src={userData?.avatar_url} alt={'user-avatar'}/>
            <div className={'mt-7 flex flex-col gap-2 md:items-center lg:items-start'}>
                <span className={'text-3xl font-semibold'}>{userData?.name}</span>
                <span className={'text-lg font-normal text-header'}><a href={userData?.html_url} target={"_blank"} rel={"noreferrer"}>{userData?.login}</a></span>
            </div>
            <div className={'flex flex-row items-center md:flex-col lg:flex-row justify-between mt-6 gap-2'}>
                <div className={'flex flex-row'}>
                    <img className={''} src={FollowersIco} alt={'followers-icon'}/>
                    <span>{followers} followers</span>
                </div>
                <div className={'flex flex-row'}>
                    <img className={''} src={FollowingIco} alt={'following-icon'}/>
                    <span>{following} following</span>
                </div>
            </div>
        </div>
    );
};

export default UserComponent;