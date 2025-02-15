// import {createSlice} from "@reduxjs/toolkit";
// import fileData from "../data/fileData";

// const fileSlice = createSlice({
//     name: "file",
//     initialState: {files: fileData, selectedFile: null},
//     reducers: {
//         addFile: (state, action) => {
//             const parent = findFolder(state.files, action.payload.parentId);
//             if(parent) parent.children.push(action.payload.newFile);
//         },
//         renameFile: (state, action) => {
//             const file = findFile(state.files, action.payload.id);
//             if(file) file.name = action.payload.newName;
//         },
//         deleteFile: (state, action) => {
//             removeFile(state.files, action.payload.id);
//         },
//         selectFile: (state, action) => {
//             state.selectedFile = action.payload;
//         },
//     },
// });

// function findFolder(files, id){
//     for(let file of files){
//         if(file.id === id && file.type === "folder") return file;
//         if(file.children){
//             const found = findFolder(file.children, id);
//             if(found) return found;
//         }
//     }
//     return null;
// }

// function findFile(files, id){
//     for (let file of files){
//         if(file.id === id) return file;
//         if(file.children) {
//             const found = findFile(file.children, id);
//             if (found) return found;
//         }
//     }
//     return null;
// }

// function removeFile(files, id){
//     return files.filter(file => {
//         if(file.id === id) return false;
//         if(file.children) file.children = deleteFile(file.children, id);
//         return true;
//     });
// }

// export const { addFile, renameFile,deleteFile, selectFile} = fileSlice.actions;
// export default fileSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import fileData from "../data/fileData";

const fileSlice = createSlice({
    name: "file",
    initialState: { files: fileData, selectedFile: null },
    reducers: {
        addFile: (state, action) => {
            const { parentId, name } = action.payload;
            const parent = parentId ? findFolder(state.files, parentId) : null;
            const newFile = {
                id: Date.now(),
                name,
                type: "file",
            };

            if (parent) {
                parent.children = [...parent.children, newFile]; // ✅ Parent Folder Ke Andar Add
            } else {
                state.files = [...state.files, newFile]; // ✅ Root Level Add
            }
        },
        addFolder: (state, action) => {
            const { parentId, name } = action.payload;
            const parent = parentId ? findFolder(state.files, parentId) : null;
            const newFolder = {
                id: Date.now(),
                name,
                type: "folder",
                children: [],
            };

            if (parent) {
                parent.children = [...parent.children, newFolder]; // ✅ Parent Folder Ke Andar Add
            } else {
                state.files = [...state.files, newFolder]; // ✅ Root Level Add
            }
        },
        renameFile: (state, action) => {
            const file = findFile(state.files, action.payload.id);
            if (file) file.name = action.payload.newName;
        },
        deleteFile: (state, action) => {
            state.files = removeFile(state.files, action.payload.id);
        },
        selectFile: (state, action) => {
            state.selectedFile = action.payload;
        },
    },
});

function findFolder(files, id) {
    for (let file of files) {
        if (file.id === id && file.type === "folder") return file;
        if (file.children) {
            const found = findFolder(file.children, id);
            if (found) return found;
        }
    }
    return null;
}

function findFile(files, id) {
    for (let file of files) {
        if (file.id === id) return file;
        if (file.children) {
            const found = findFile(file.children, id);
            if (found) return found;
        }
    }
    return null;
}

function removeFile(files, id) {
    return files
        .map(file => ({
            ...file,
            children: file.children ? removeFile(file.children, id) : file.children,
        }))
        .filter(file => file.id !== id);
}

export const { addFile, addFolder, renameFile, deleteFile, selectFile } = fileSlice.actions;
export default fileSlice.reducer;
