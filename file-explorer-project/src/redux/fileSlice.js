import {createSlice} from "@reduxjs/toolkit";
import fileData from "../data/fileData";

const fileSlice = createSlice({
    name: "file",
    initialState: {files: fileData, selectedFile: null},
    reducers: {
        addFile: (state, action) => {
            const parent = findFolder(state.files, action.payload.parentId);
            if(parent) parent.children.push(action.payload.newFile);
        },
        renameFile: (state, action) => {
            const file = findFile(state.files, action.payload.id);
            if(file) file.name = action.payload.newName;
        },
        deleteFile: (state, action) => {
            removeFile(state.files, action.payload.id);
        },
        selectFile: (state, action) => {
            state.selectedFile = action.payload;
        },
    },
});

function findFolder(files, id){
    for(let file of files){
        if(file.id === id && file.type === "folder") return file;
        if(file.children){
            const found = findFolder(file.children, id);
            if(found) return found;
        }
    }
    return null;
}

function findFile(files, id){
    for (let file of files){
        if(file.id === id) return file;
        if(file.children) {
            const found = findFile(file.children, id);
            if (found) return found;
        }
    }
    return null;
}

function removeFile(files, id){
    return files.filter(file => {
        if(file.id === id) return false;
        if(file.children) file.children = deleteFile(file.children, id);
        return true;
    });
}

export const { addFile, renameFile,deleteFile, selectFile} = fileSlice.actions;
export default fileSlice.reducer;