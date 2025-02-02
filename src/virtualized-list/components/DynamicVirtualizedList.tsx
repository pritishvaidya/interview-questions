import React, {useCallback, useEffect, useRef, useState} from "react";

const DynamicVirtualizedList = ({data, containerHeight}) => {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemHeights, setItemHeights] = useState({});
    const [totalHeight, setTotalHeight] = useState(0);
    const itemRefs = useRef({});

    useEffect(() => {
        const heights = {};
        let total = 0;
        data.forEach((_, index) => {
            const itemElement = itemRefs.current[index];
            const height = itemElement ? itemElement.getBoundingClientRect().height : 50;
            heights[index] = height;
            total += height;
        });
        setItemHeights(heights);
        setTotalHeight(total);
    }, [data]);

    const handleScroll = useCallback(() => {
        if (!containerRef.current) return;
        const scrollTop = containerRef.current.scrollTop;
        let accumulatedHeight = 0;
        let newStartIndex = 0;

        for (let i = 0; i < data.length; i++) {
            accumulatedHeight += itemHeights[i] || 50;
            if (accumulatedHeight >= scrollTop) {
                newStartIndex = i;
                break;
            }
        }
        if (currentIndex !== newStartIndex) {
            setCurrentIndex(newStartIndex);
        }
    }, [containerRef.current, currentIndex]);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            return () => container.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll, itemHeights]);

    const calculateVisibleItems = () => {
        const visibleItems = [];
        let accumulatedHeight = 0;
        for (let i = currentIndex; i < data.length; i++) {
            if (accumulatedHeight > containerHeight) break;
            visibleItems.push(data[i]);
            accumulatedHeight += itemHeights[i] || 100;
        }
        return visibleItems;
    };

    return (
        <div
            ref={containerRef}
            className="list-container"
            style={{height: containerHeight}}
        >
            <div style={{height: totalHeight, position: "relative"}}>
                {calculateVisibleItems().map((item, index) => {
                    const top = Number(Object.values(itemHeights).slice(0, currentIndex + index).reduce((a, b) => Number(a) + Number(b), 0),)
                    return (
                        <div
                            key={item.id}
                            ref={(el) => (itemRefs.current[index] = el)}
                            className="list-item"
                            style={{top}}
                        >
                            <h3>{item.title}</h3>
                            <span>{item.description}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DynamicVirtualizedList