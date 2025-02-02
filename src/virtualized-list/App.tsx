import React from 'react'
import "./App.css"
import VirtualizedListAsync from "./components/VirtualizedListAsync";

const fetchData = async (page: number, itemsPerPage: number = 10) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_per_page=${itemsPerPage}`)
    return response.json();
}

const App = () => {
    return <div><VirtualizedListAsync fetchData={fetchData} containerHeight={500} itemHeight={100}/></div>
}

export default App