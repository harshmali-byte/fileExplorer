import { useDispatch } from "react-redux";
import { selectFile,deleteFile } from "../redux/fileSlice";
export default function FileItem({file}){
    const dispatch = useDispatch();

    return (
        <div className="p-2 border rounded flex justify-between items-center">
        <span onClick={() => dispatch(selectFile(file.id))}> {file.name} </span>
        <button onClick={() => dispatch(deleteFile({id: file.id}))} className="text-red-500">  delete</button>
    
        </div>
    );
}