import React, {useEffect, useState} from "react";
import ProgressBar from "./ProgressBar";
import './App.css'

const App = () => {
    const [limit, setLimit] = useState<number>(0);
    const [progressBars, updateProgressBars] = useState<{ complete: boolean, running: boolean, id: number }[]>([]);

    const addProgressBar = (): void => {
        updateProgressBars((prevState) => progressBars.concat({complete: false, running: false, id: prevState.length}));

        // Automatically start the progress bar if there's space
        const availableBar = progressBars.find((bar) => !bar.running && !bar.complete);
        if (availableBar) {
            startProgress(availableBar.id);
        }
    }

    const startProgress = (id: number) => {
        if (limit < 3) { // Max 3 bars at a time
            setLimit((prev) => prev + 1);
            updateProgressBars((prevState) =>
                prevState.map((bar) =>
                    bar.id === id ? {...bar, running: true} : bar
                )
            );
        }
    };


    const resetProgress = () => {
        updateProgressBars([]);
        setLimit(0)
    }

    const onCompleteProgress = (id) => {
        setLimit(prevState => {
            return prevState - 1
        })
        updateProgressBars(prevState => prevState.map(bar => bar.id === id ? {
            complete: true,
            running: false,
            id: bar.id
        } : bar));
    }

    useEffect(() => {
        const nextBar = progressBars.find((bar) => !bar.running && !bar.complete);
        if (nextBar) {
            startProgress(nextBar.id);
        }
    }, [limit]);

    return (
        <div className="container">
            <div className="row">
                <button className="click" onClick={addProgressBar}>Click Me</button>
                <button className="reset" onClick={resetProgress}>Reset</button>
            </div>
            <div className="progress-container">
                {progressBars.map(progress => (
                    <ProgressBar key={progress.id} data={progress}
                                 onComplete={onCompleteProgress}/>
                ))}
            </div>
        </div>
    )
}

export default App;