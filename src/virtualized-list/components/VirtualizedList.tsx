import {Data} from "../types";
import React, {useEffect, useRef, useState} from "react";


const VirtualizedList = ({data, containerHeight, itemHeight}: {
    data: Data[],
    containerHeight: number,
    itemHeight: number,
}) => {
    const containerRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = Math.ceil(containerHeight / itemHeight);

    const handleScroll = () => {
        if (containerRef.current) {
            const scrollTop = containerRef.current.scrollTop;
            const newStartIndex = Math.max(0, Math.floor(scrollTop / itemHeight));
            if (currentIndex !== newStartIndex) {
                setCurrentIndex(newStartIndex);
            }
        }
    }

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll)
        }
        return () => container.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <div ref={containerRef} className="list-container" style={{height: containerHeight}}>
            <div style={{height: data.length * itemHeight, position: "relative"}}>
                {data.slice(currentIndex, currentIndex + visibleCount).map((item, index) => {
                    return (
                        <div className="list-item"
                             style={{height: itemHeight, top: (currentIndex + index) * itemHeight}}
                             key={item.id}>
                            <h3>{item.title}</h3>
                            <span>{item.description}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default VirtualizedList;