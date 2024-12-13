import { useState } from "react";
import { Editor } from "./editor";
import { EditorHeader } from "./editor-header";
import useMutateEditor from "./editor.api";
import { EditorOutput } from "./editor-output";

export const EditorWrapper = () => {
  const [lang, setLang] = useState("py");

  const [value, setValue] = useState("");

  const changeValue = (text: string) => {
    setValue(text);
  };

  const { isPending, mutateEditor, data, error } = useMutateEditor();

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <EditorHeader
          isPending={isPending}
          mutateEditor={mutateEditor}
          value={value}
          selectFunc={(e) => setLang(e.target.value)}
        />
        <Editor language={lang} changeValue={changeValue} value={value} />
        <EditorOutput value={data?.value ?? error?.message} />
      </div>
    </div>
  );
};
