import React, {useEffect, useState} from 'react';
import axios from "axios";
import {IUser} from "../types/Types";

const UseFetch = (username:string) => {
    const [isError, setIsError] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [userData, setUserData] = useState<IUser | null>(null)
    const [isInitial, setIsInitial] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        setUserData(null)
        setIsError(false)
        if(username === ''){
            setIsInitial(true)
        }else{
            axios.get(`https://api.github.com/users/${username}`)
                .then(res => {
                    setUserData(res.data)
                    setIsLoading(false)
                    setIsInitial(false)
                })
                .catch((err) => {
                    setIsLoading(false)
                    setIsError(true)
                    setIsInitial(false)
                })
        }

    }, [username])

    return {isError, isLoading, userData, isInitial}
};

export default UseFetch;