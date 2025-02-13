import { useSelector } from "react-redux";
import FolderItem from "./FolderItem"

export default function FileExplorer(){
    const files = useSelector(state => state.file.files);
    return (
        <div className="w-1/3 text-[#] h-screen bg-gray-100 p-4 overflow-auto">
            <h2 className="text-lg font-bold mb-4">File Explorer</h2>
            {files.map(file => <FolderItem key={file.id} file={file} />)}
        </div>
    );
 }

 
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import FolderItem from "./FolderItem";


// export default function FileExplorer(){
//     const files = useSelector(state => state.file.files);

//     const [searchTerm, setSEarchTerm] = useState("");
//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     const filteredFiles = files.filter(file =>
//         file.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="w-1/3 h-screen bg-gray-100 p-4 overflow-auto">
//             <h2 className="text-lg font-bold mb-4">File Explorer</h2>

//             <input 
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Search files"
//             className="w-full p-2 border rounded mb-4"
//             />
//             </div>
//     );
// }