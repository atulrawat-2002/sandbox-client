import { Editor } from "@monaco-editor/react";
import { dracula } from "../../../../dracula";

const EditorComponents = () => {

  const handleEditorTheme = (editor, monaco) => {
    monaco.editor.defineTheme("dracula", dracula);
    monaco.editor.setTheme("dracula");
  };

  return (
    <>
      <Editor
        height={"100vh"}
        width={"100%"}
        defaultLanguage="javascript"
        defaultValue="// You can write javascript code here"
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
