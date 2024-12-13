interface IEditorHeader {
  selectFunc: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  mutateEditor: (value: string) => Promise<void>;
  isPending: boolean;
}

export const EditorHeader = ({
  selectFunc,
  value,
  isPending,
  mutateEditor,
}: IEditorHeader) => {
  return (
    <div className="w-full flex justify-between bg-transparent">
      <select
        className="bg-slate-500 text-gray-100 cursor-pointer hover:opacity-80 active:opacity-100 duration-300 active:outline-none"
        onChange={selectFunc}
      >
        <option value={"py"}>Python</option>
        <option value={"go"}>Go</option>
      </select>

      <button
        className="bg-green-500 py-2 px-3 text-gray-100 hover:opacity-80 active:opacity-100 duration-300 disabled:pointer-events-none"
        onClick={() => mutateEditor(value)}
        disabled={isPending}
      >
        {isPending ? "Loading..." : "Run"}
      </button>
    </div>
  );
};
