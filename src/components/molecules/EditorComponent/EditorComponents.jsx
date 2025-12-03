import { Editor } from "@monaco-editor/react";
import { dracula } from "../../../../dracula";
import { useEditorSocketStore } from "../../../store/editorSocketStore";
import { useActiveFileTabStore } from "../../../store/activeFileTabStore";

const EditorComponents = () => {
  const { editorSocket } = useEditorSocketStore();
  const { activeFileTab, setActiveFileTab } = useActiveFileTabStore();

    editorSocket?.on("readFileSuccess", (data) => {
      console.log(data.value);
      setActiveFileTab(data.value, data.path);
    });

  const handleEditorTheme = (editor, monaco) => {
    monaco.editor.defineTheme("dracula", dracula);
    monaco.editor.setTheme("dracula");
  };

  return (
    <>
      <Editor
        height="100vh"
        width="100%"
        defaultLanguage={undefined}
        value={
          activeFileTab?.value
            ? activeFileTab.value
            : "// Code here"
        }
        options={{
          fontSize: 13,
          fontFamily: "monospace",
        }}
        onMount={handleEditorTheme}
      />
    </>
  );
};

export default EditorComponents;
