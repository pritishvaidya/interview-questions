const data: FolderStructure = [
    {
        name: "src",
        type: "folder",
        children: [
            {
                name: "components",
                type: "folder",
                children: [
                    {name: "FolderTree.js", type: "file"},
                    {
                        name: "utils",
                        type: "folder",
                        children: [
                            {name: "helpers.js", type: "file"},
                        ],
                    },
                ],
            },
            {name: "App.js", type: "file"},
            {name: "index.js", type: "file"},
            {name: "data.js", type: "file"},
        ],
    },
    {
        name: "public",
        type: "folder",
        children: [
            {name: "index.html", type: "file"},
            {
                name: "assets",
                type: "folder",
                children: [
                    {name: "logo.png", type: "file"},
                ],
            },
        ],
    },
];

export default data;