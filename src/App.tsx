import React, {useState} from "react";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import useFetch from "./hooks/useFetch";
import ErrorComponent from "./Components/Handlers/ErrorComponent";
import InitialComponent from "./Components/UI/InitialComponent";
import Spinner from "./Components/UI/Spinner";

function App() {

    const [username, setUsername] = useState<string>('')

    const {isLoading, userData, isError, isInitial} = useFetch(username);



    return (
        <>
            <Header setUsername={setUsername}/>
            {isInitial && <InitialComponent/>}
            {isLoading && <Spinner className={'h-[calc(100vh_-_72px)]'}/>}
            {userData && <Main userData={userData}/>}
            {isError && <ErrorComponent/>}
        </>
    );
}

export default App;
