


// import { useSelector, useDispatch } from "react-redux";
// import { addFolder, addFile, deleteFile, selectFile } from "../redux/fileSlice";
// import FolderItem from "./FolderItem";

// export default function FileExplorer() {
//     const dispatch = useDispatch();
//     const files = useSelector(state => state.file.files);
//     const selectedFolder = useSelector(state => state.file.selectedFile);

//     // New Folder Create Karne Ka Function
//     const handleNewFolder = () => {
//         const folderName = prompt("Enter folder name:");
//         if (!folderName) return; // Cancel agar user ne kuch enter nahi kiya

//         dispatch(addFolder({ parentId: selectedFolder?.id || null, name: folderName }));
//     };

//     // New File Create Karne Ka Function
//     const handleNewFile = () => {
//         const fileName = prompt("Enter file name (with extension, e.g., file.txt):");
//         if (!fileName) return;

//         dispatch(addFile({ parentId: selectedFolder?.id || null, name: fileName }));
//     };

  

//     // Folder Select Karne Ka Function
//     const handleSelectFolder = (id) => {
//         dispatch(selectFile(id));
//     };

//     return (
//         <div className="w-1/3 text-[#] h-screen bg-gray-100 p-4 overflow-auto">
//             <h2 className="text-lg font-bold mb-4">File Explorer</h2>

//             {/* Buttons for New Folder and New File */}
//             <div className="mb-4 flex gap-2">
//                 <button 
//                     onClick={handleNewFolder} 
//                     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                 >
//                     New Folder
//                 </button>
//                 <button 
//                     onClick={handleNewFile} 
//                     className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//                 >
//                     New File
//                 </button>
//             </div>

//             {/* Selected Folder Info */}
//             {selectedFolder && (
//                 <div className="mb-4 p-2 bg-yellow-200 rounded">
//                     Selected Folder: <strong>{selectedFolder.name}</strong>
//                 </div>
//             )}

//             {/* Folder and Files List */}
//             {files.map(file => (
//                 <div 
//                     key={file.id} 
//                     className={`flex justify-between items-center p-2 rounded mb-2 ${selectedFolder?.id === file.id ? 'bg-yellow-100' : 'bg-white'}`} 
//                     onClick={() => file.type === "folder" && handleSelectFolder(file)}
//                 >
//                     <FolderItem file={file} />
                   
//                 </div>
//             ))}
//         </div>
//     );
// }



import { useSelector, useDispatch } from "react-redux";
import { addFolder, addFile, deleteFile, selectFile } from "../redux/fileSlice";
import FolderItem from "./FolderItem";

export default function FileExplorer() {
    const dispatch = useDispatch();
    const files = useSelector(state => state.file.files);
    const selectedFolder = useSelector(state => state.file.selectedFile);

    // Naya Folder Create Karne Ka Function
    const handleNewFolder = () => {
        const folderName = prompt("Enter folder name:");
        if (!folderName) return;

        dispatch(addFolder({ parentId: selectedFolder?.id || null, name: folderName }));
    };

    // Naya File Create Karne Ka Function
    const handleNewFile = () => {
        const fileName = prompt("Enter file name (with extension, e.g., file.txt):");
        if (!fileName) return;

        dispatch(addFile({ parentId: selectedFolder?.id || null, name: fileName }));
    };

    // Delete File/Folder Function (Independent)
    const handleDelete = (file) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete "${file.name}"?`);
        if (confirmDelete) {
            dispatch(deleteFile({ id: file.id, type: file.type }));
        }
    };

    // Folder Select Karne Ka Function
    const handleSelectFolder = (file) => {
        if (file.type === "folder") {
            dispatch(selectFile(file));
        }
    };

    return (
        <div className="w-1/3 h-screen bg-gray-100 p-4 overflow-auto">
            <h2 className="text-lg font-bold mb-4">File Explorer</h2>

            {/* Buttons for New Folder and New File */}
            <div className="mb-4 flex gap-2">
                <button 
                    onClick={handleNewFolder} 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    New Folder
                </button>
                <button 
                    onClick={handleNewFile} 
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    New File
                </button>
            </div>

            {/* Selected Folder Info */}
            {selectedFolder && (
                <div className="mb-4 p-2 bg-yellow-200 rounded">
                    Selected Folder: <strong>{selectedFolder.name}</strong>
                </div>
            )}

            {/* Folder and Files List */}
            {files.map(file => (
                <div 
                    key={file.id} 
                    className={`flex justify-between items-center p-2 rounded mb-2 
                    ${selectedFolder?.id === file.id ? 'bg-yellow-100' : 'bg-white'}`} 
                    onClick={() => handleSelectFolder(file)}
                >
                    <FolderItem file={file} />
                   
                </div>
            ))}
        </div>
    );
}
