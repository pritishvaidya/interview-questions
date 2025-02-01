interface FileNode {
    name: string;
    type: "file";
}

interface FolderNode {
    name: string;
    type: "folder";
    children: (FolderNode | FileNode)[];
}

type FolderStructure = (FolderNode | FileNode)[];
