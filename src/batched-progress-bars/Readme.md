# React Progress Bar App

This is a simple React application that dynamically adds and manages progress bars, ensuring that at most three bars run
simultaneously.

## Features

- Add progress bars dynamically.
- A maximum of 3 progress bars can run at the same time.
- Progress bars complete automatically and trigger the next available bar.
- Reset all progress bars.

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. Clone this repository:
   ```sh
   git clone https://github.com/interview-questions.git
   cd batched-progress-bar
   ```
2. Install dependencies:
   ```sh
   yarn install  # or yarn install
   ```
3. Start the development server:
   ```sh
   yarn start  # or yarn start
   ```
4. Open your browser and navigate to `http://localhost:3000/`.

## Usage

1. Click the **Click Me** button to add a new progress bar.
2. Each progress bar completes in 1 second and triggers the next bar (if available).
3. At most 3 progress bars run at a time.
4. Click **Reset** to remove all progress bars.

## Technologies Used

- **React**: Front-end library
- **TypeScript**: Ensures type safety
- **CSS**: For basic styling

## Potential Improvements

- Customize progress bar speed.
- Add animations.
- Improve UI with better design.
- Add tests using Jest.

## License

This project is licensed under the MIT License. Feel free to modify and use it for your own purposes.

---

### Author

**Pritish Vaidya**
