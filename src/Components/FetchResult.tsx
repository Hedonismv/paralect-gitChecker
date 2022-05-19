import React, {FC} from 'react';
import Spinner from './Spinner';

interface FetchResultProps {
    loading: boolean | any,
    error: string | any,
    data: [] | any
}


const FetchResult:FC<FetchResultProps> = ({ loading, error, data, children }):any => {
    if (error) {
        return <p>ERROR: {error.message}</p>;
    }
    if (loading) {
        return (
            <Spinner/>
        );
    }
    if (!data) {
        return <p>Nothing to show...</p>;
    }
    if (data) {
        return children;
    }
};

export default FetchResult;
