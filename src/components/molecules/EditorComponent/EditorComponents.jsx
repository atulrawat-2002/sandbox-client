import { Editor } from "@monaco-editor/react";
import { dracula } from "../../../../dracula";
import { useEditorSocketStore } from "../../../store/editorSocketStore";
import { useActiveFileTabStore } from "../../../store/activeFileTabStore";
import { extensionToFileType } from "../../../utils/extensionToFileType";
import EditorButton from "../../atoms/EditorButton/EditorButton";

const EditorComponents = () => {
  let timerId = null;
  const { editorSocket } = useEditorSocketStore();
  const { activeFileTab, setActiveFileTab } = useActiveFileTabStore();  

  const fileTabs = {};

  const handleEditorTheme = (editor, monaco) => {
    monaco.editor.defineTheme("dracula", dracula);
    monaco.editor.setTheme("dracula");
  };

  function handleChange(value, e) {

    if(timerId != null ) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      console.log("sending write file event")
      const editorcontent = value;
      editorSocket.emit("writeFile", {
        data: editorcontent,
        pathToFileOrFolder: activeFileTab?.path,
      });
    }, 2000);

  }

  return (
    <>
      <EditorButton isActive={true} />
      <Editor
        width="100%"
        language={activeFileTab?.extension ? extensionToFileType(activeFileTab?.extension) : "js"}
        value={activeFileTab?.value ? activeFileTab.value : "// Code here"}
        options={{
          fontSize: 13,
          fontFamily: "monospace",
        }}
        onMount={handleEditorTheme}
        onChange={handleChange}
      />
    </>
  );
};

export default EditorComponents;
