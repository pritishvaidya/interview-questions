# Folder Tree Viewer

This project is a **React-based Folder Tree Viewer** that dynamically renders an **N-level nested folder structure**. It
supports state persistence using `localStorage` and prevents state resets when toggling folders.

### Companies [2025]

**Postman | Quizziz**

## Features

- **Recursive Rendering**: Supports unlimited levels of folders and files.
- **Expandable/Collapsible Folders**: Click to toggle visibility.
- **State Persistence**: Keeps track of open/closed folders even after a page reload.
- **Optimized State Management**: Uses a global state to ensure parent folders do not reset child states.
- **TypeScript Support**: Ensures type safety with interfaces.

## Folder Structure

```
/
├── src/
│   ├── components/
│   │   ├── FolderTree.tsx
│   │   ├── utils/
│   │   │   ├── helpers.ts // Todo
│   ├── App.tsx
│   ├── index.tsx
│   ├── data.ts
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/interview-questions.git
   cd folder-structure
   ```
2. Install dependencies:
   ```sh
   yarn install
   # or
   yarn install
   ```

## Running the App

To start the development server, run:

```sh
npm start
# or
yarn start
```

The app will be available at `http://localhost:3000/`.

## Usage

- Click on a **folder** 📁 to expand/collapse it.
- The open/closed state is saved across reloads.
- Works recursively for nested folders and files.

## Technologies Used

- **React** (Functional Components & Hooks)
- **TypeScript** (Static Typing)
- **Tailwind CSS** (Basic Styling)
- **LocalStorage** (State Persistence)

## Future Enhancements

- Add drag-and-drop support.
- Implement a file upload system.
- Support for context menus (rename, delete, etc.).

## License

This project is licensed under the MIT License.
