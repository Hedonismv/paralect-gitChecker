import React, {useState} from "react";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import useFetch from "./hooks/useFetch";
import ErrorComponent from "./Components/ErrorComponent";
import InitialComponent from "./Components/InitialComponent";

function App() {

    const [username, setUsername] = useState<string>('')

    const {isLoading, userData, isError, isInitial} = useFetch(username);

    console.log(isLoading, userData, isError, isInitial)


    return (
        <>
            <Header setUsername={setUsername}/>
            {isInitial && <InitialComponent/>}
            {userData && <Main isLoading={isLoading} isError={isError} userData={userData}/>}
            {isError && <ErrorComponent/>}
        </>
    );
}

export default App;
