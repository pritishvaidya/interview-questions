import React from 'react'
import VirtualizedList from "./components/VirtualizedList";
import data from './data'
import "./App.css"

const App = () => {
    return <div><VirtualizedList data={data} containerHeight={500} itemHeight={100}/></div>
}

export default App