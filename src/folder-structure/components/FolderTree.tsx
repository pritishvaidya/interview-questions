import React from 'react'

const FolderTree = ({data, path = "", globalState, setGlobalState}) => {
    const toggleFolder = (fullPath: string) => {
        setGlobalState((prev) => ({...prev, [fullPath]: !prev[fullPath]}));
    }

    return (
        <ul className="folder-tree">
            {data.map((item: FolderNode) => {
                const fullPath = `${path}/${item.name}`;
                return (
                    <li key={fullPath}>
                        {item.type === 'folder' ? (
                            <>
                            <span
                                onClick={() => toggleFolder(fullPath)}
                            >
                                {globalState[fullPath] ? "📂" : "📁"} {item.name}
                                 </span>
                                <span>
                                {globalState[fullPath] && item.children && (
                                    <FolderTree data={item.children} path={fullPath} globalState={globalState}
                                                setGlobalState={setGlobalState}/>
                                )}
                            </span>
                            </>
                        ) : (
                            <span>📄 {item.name}</span>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}

export default FolderTree