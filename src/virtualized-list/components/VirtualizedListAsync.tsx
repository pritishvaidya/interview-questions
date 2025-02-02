import {Data} from "../types";
import React, {useCallback, useEffect, useRef, useState} from "react";

const OFFSET = 100

const VirtualizedListAsync = ({containerHeight, itemHeight, fetchData}: {
    containerHeight: number,
    itemHeight: number,
    fetchData: (page: number) => Promise<Data[]>,
}) => {
    const containerRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [items, updateItems] = useState<Data[]>([])
    const [page, setPage] = useState(0);
    const visibleCount = Math.ceil(containerHeight / itemHeight);

    const handleScroll = useCallback(async () => {
        if (containerRef.current) {
            const scrollTop = containerRef.current.scrollTop;
            const newStartIndex = Math.max(0, Math.floor(scrollTop / itemHeight));
            if (currentIndex !== newStartIndex) {
                setCurrentIndex(newStartIndex);
            }

            if (scrollTop + containerHeight >= items.length * itemHeight - OFFSET && !loading) {
                await updateList()
            }
        }
    }, [containerRef.current, containerHeight, itemHeight, loading, currentIndex]);

    const updateList = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetchData(page + 1)
            if (response.length === 0) return;
            updateItems(prevItems => [...prevItems, ...response])
            setPage(prevState => prevState + 1)
        } catch (ex) {
            // Handle the error
        } finally {
            setLoading(false);
        }
    }, [loading, fetchData, page])

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll)
        }
        return () => container.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    useEffect(() => {
        updateList()
    }, [])


    return (
        <div ref={containerRef} className="list-container" style={{height: containerHeight}}>
            <div style={{height: items.length * itemHeight, position: "relative"}}>
                {items.slice(currentIndex, currentIndex + visibleCount).map((item, index) => {
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

export default VirtualizedListAsync;