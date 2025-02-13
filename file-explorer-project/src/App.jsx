// import FileExplorer from "./components/FileExplorer";
// import FileViewer from "./components/FileViewer";

import FileExplorer from "./components/FileExplorer";
import FileViewer from "./components/FileViewer";

export default function App(){
  return (
    <div className = "flex">
      <FileExplorer/>
      <FileViewer/>
    </div>
  );
}