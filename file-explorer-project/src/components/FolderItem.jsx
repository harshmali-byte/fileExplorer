import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectFile } from "../redux/fileSlice";

export default function FolderItem({file}){
    const [expanded, setExpanded] = useState(false);
        const dispatch = useDispatch();
        return (
            <div className="ml-2">
            <div
            className="cursor-pointer font-semibold flex items-center"
            onClick={() => setExpanded(!expanded)}
            >
                {file.name}
            </div>
            {expanded  && file.children?.map(child =>
            child.type === "folder" ? <FolderItem key={child.id} file={child} />
            : 
                <div
                key={child.id}
                className="ml-4 cursor-pointer"
                onClick={() => dispatch(selectFile(child))}
                >
                    {child.name}
                </div>
            )}
            </div>
        )
    }
