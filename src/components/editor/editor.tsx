import { go } from "@codemirror/lang-go";
import { python } from "@codemirror/lang-python";
import { abyss } from "@uiw/codemirror-theme-abyss";
import ReactCodeMirror from "@uiw/react-codemirror";
import { useCallback, useEffect, useState } from "react";

interface IEditor {
  language: any;
  value: string;
  changeValue: (text: string) => void;
}

export const Editor = ({ language, changeValue, value }: IEditor) => {
  const [curLang, setCurLang] = useState(() => python());

  const onChange = useCallback((val: string) => {
    changeValue(val);
  }, []);

  useEffect(() => {
    switch (language) {
      case "go":
        setCurLang(go());
        break;
      case "py":
        setCurLang(python());
        break;
    }
  }, [language]);

  return (
    <ReactCodeMirror
      className="min-h-[300px]"
      minHeight="300px"
      value={value}
      extensions={[curLang]}
      onChange={onChange}
      theme={abyss}
    />
  );
};
