import React, {useEffect, useState} from 'react'
import FolderTree from "./components/FolderTree";
import data from './data'

const FolderStructure = () => {
    const [globalState, setGlobalState] = useState<{ [key: string]: boolean }>(() => {
        const storedState = localStorage.getItem("folderTreeState");
        return storedState ? JSON.parse(storedState) : {};
    });

    useEffect(() => {
        localStorage.setItem("folderTreeState", JSON.stringify(globalState));
    }, [globalState]);

    return (
        <FolderTree data={data} globalState={globalState} setGlobalState={setGlobalState}/>
    )
}

export default FolderStructure