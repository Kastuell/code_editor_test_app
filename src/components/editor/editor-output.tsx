interface IEditorOutput {
  value: string | undefined;
}

export const EditorOutput = ({ value }: IEditorOutput) => {
  console.log(value);
  return <textarea className="min-w-full" placeholder={value} />;
};
