# Virtualized List in React

## Overview

This project implements a **Virtualized List** in React, optimized for rendering large datasets efficiently. Instead of
rendering all items at once, it only renders the visible portion of the list, improving performance and reducing memory
usage.

## Features

- **Efficient Rendering**: Uses virtualization to render only visible items.
- **Smooth Scrolling**: Dynamically updates the displayed items based on the scroll position.
- **Performance Optimized**: Reduces re-renders and improves responsiveness.
- **Customizable Item and Container Heights**.

## Technologies Used

- React (Functional Components & Hooks)
- JavaScript
- CSS for basic styling

## Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── DynamicVirtualizedList.js
│   │   ├── DynamicVirtualizedListAsync.js
│   │   ├── VirtualizedList.js
│   │   ├── VirtualizedListAsync.js
│   ├── App.js
│   ├── index.js
├── public/
│   ├── index.html
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/interview-questions.git
   cd virtualized-list
   ```
2. Install dependencies:
   ```sh
   yarn install
   ```

## Running the App

Start the development server:

```sh
yarn start
```

The app will be available at `http://localhost:3000/`.

## Usage

- Scroll through the list to see **virtualized rendering** in action.
- The list dynamically updates the visible items based on scroll position.
- Customize `containerHeight` and `itemHeight` for different layouts.

## Code Explanation

### `VirtualizedList.js`

This component handles:

- **Rendering only visible items**
- **Tracking the scroll position**
- **Adjusting the displayed range dynamically**

```javascript
const VirtualizedList = ({data, itemHeight, containerHeight}) => {
    const containerRef = useRef(null);
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = Math.ceil(containerHeight / itemHeight);

    const handleScroll = () => {
        if (containerRef.current) {
            const scrollTop = containerRef.current.scrollTop;
            const newStartIndex = Math.max(0, Math.floor(scrollTop / itemHeight));
            setStartIndex(newStartIndex);
        }
    };
```

## Future Enhancements

- Support for infinite scrolling
- Dynamic item heights
- Keyboard navigation support

## License

This project is licensed under the MIT License.
