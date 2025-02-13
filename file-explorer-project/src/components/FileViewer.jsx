import { useSelector } from "react-redux";

export default function FileViewer(){
    const selectedFile = useSelector(state => state.file.selectedFile);

    return (
        <div className="w-2/3 h-screen p-4">
            <h2 className="text-lg font-bold">File Viewer</h2>
            {selectedFile ? (
                <div className="p-4 border bg-white shadow mt-4">
                <h3 className="text-md font-semibold"> {selectedFile.name}</h3>
                <p className="text-gray-600"> Tyis is a preview of {selectedFile.name}</p>
                </div>
            ) : (
                <p className="text-gray-500"> select a file to view</p>
            )}
            </div>
    );
}