const fileData = [
    { 
        id: "1",
        name: "Documents",
        type: "folder",
        children: [
            { id: "2", name: "Resume.pdf",
            type: "file"
            },
            {id: "3", name: "CoverLetter.docx", type: "file"},

        ],
    },
    { id: "4",
        name: "Projects",
        type: "folder",
        children: [
            {id: "5", name: "ReactApp.zip",
                type: "file"},
                {id: "6", name: "README.md",
                    type: "file"
                },
        ]
    }
];
export default fileData;