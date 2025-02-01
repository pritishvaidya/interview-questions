import React, {useEffect} from 'react';

const ProgressBar = ({data, onComplete}: { data: any, onComplete: (id: string) => void }) => {
    const [progress, setProgress] = React.useState(0);

    useEffect(() => {
        if (data.running && !data.complete) {
            setProgress(100)
            setTimeout(() => {
                onComplete(data.id)
            }, 1000)
        }
    }, [data.running, data.complete])

    return (
        <div className="progress-bar">
            <div className="progress-content" style={{width: `${progress}%`}}/>
        </div>
    )
}

export default ProgressBar;