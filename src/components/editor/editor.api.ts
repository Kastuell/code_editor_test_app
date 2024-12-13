import { useState } from "react";

type CustomError = { status: string; message: string };
type CustomResponse = { status: string; value: string };

function useMutateEditor() {
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState<Pick<CustomResponse, "value"> | null>();
  const [error, setError] = useState<Pick<CustomError, "message"> | null>();

  const mutateEditor = async (value: string) => {
    setIsPending(true);
    return new Promise<CustomResponse>((resolve, reject) => {
      if (Math.random() > 0.5) {
        setTimeout(
          () =>
            resolve({
              status: "success",
              value: value,
            }),
          2000
        );
      } else {
        setTimeout(
          () =>
            reject({
              status: "error",
              message: "SyntaxError: Unexpected token",
            }),
          2000
        );
      }
    })
      .then((res) => {
        console.log(res);
        alert("Resolved successfully after 2000 ms");
        setData(res);
        setError(null);
      })
      .catch((e: CustomError) => {
        console.log(e);
        alert(e.message);
        setData(null);
        setError(e);
      })
      .finally(() => setIsPending(false));
  };

  return {
    isPending,
    mutateEditor,
    data,
    error,
  };
}

export default useMutateEditor;
