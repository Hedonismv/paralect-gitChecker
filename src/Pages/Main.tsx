import React, {FC} from 'react';
import UserComponent from "../Components/UserComponent";
import RepoComponent from "../Components/RepoComponent";
import {IUser} from "../types/Types";

interface MainProps {
    userData: IUser | null
}

const Main:FC<MainProps> = ({ userData}) => {


    return (
        <div className={'justify-center flex '}>
            <div className={'container justify-between flex-col md:flex-row flex'}>
                <UserComponent userData={userData}/>
                <RepoComponent username={userData?.login} totalRepo={userData?.public_repos}/>
            </div>
        </div>
    );
};

export default Main;