import React, {FC} from 'react';
import UserComponent from "../Components/UserComponent";
import RepoComponent from "../Components/RepoComponent";
import {IUser} from "../types/Types";
import Spinner from "../Components/Spinner";

interface MainProps {
    isLoading: boolean,
    userData: IUser | null,
    isError: boolean
}

const Main:FC<MainProps> = ({isError, userData, isLoading}) => {
    return (
        <div className={'justify-center flex '}>
            <div className={'container justify-between flex-row flex'}>
                {isLoading ? <Spinner/> : <UserComponent userData={userData}/>}
                <RepoComponent username={userData?.login} totalRepo={userData?.public_repos}/>
            </div>
        </div>
    );
};

export default Main;