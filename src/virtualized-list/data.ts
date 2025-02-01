import {Data} from "./types";

const VirtualizedListData: Data[] = Array.from({length: 1000}, (_, index) => ({
    id: index,
    title: `React Performance ${index + 1}`,
    description: `Virtualized List Item ${index + 1}`,
}))

export default VirtualizedListData