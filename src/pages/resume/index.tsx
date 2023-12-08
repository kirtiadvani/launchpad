import { Input } from "@/components/Ui/input";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Resume() {
  const [status, setStatus] = useState("idle");
  const inputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<string>("");
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("change", async (e) => {
        e.preventDefault();
        const file = (document.getElementById("inputRef") as HTMLInputElement)
          ?.files?.[0];
        if (file) {
          setStatus("uploaded");
          const data = Buffer.from(await file.arrayBuffer());
          fetch("https://lauchpad-backend.onrender.com/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              file: data,
            }),
          })
            .then((res) => res.json())
            .then(async (data) => {
              setStatus("success");
              console.log(data);
              setData(data[0].candidates[0].output);
            });
        }
      });
    }
  }, []);

  if (status === "idle") {
    return (
      <div className="flex flex-col gap-10 h-screen w-screen overflow-hidden justify-center items-center bg-black">
        <div className="h-[200px] w-[200px] bg-cover bg-[url('/gifs/tree.gif')]">
        </div>
        <h1 className="text-white mt-10 text-xl">
          Upload your resume, and we&apos;ll do the rest.
        </h1>
        <Input className="w-fit" type="file" ref={inputRef} id="inputRef" />
      </div>
    );
  }
  if (status === "uploaded") {
    return (
      <div className="flex text-white flex-col gap-5 h-screen w-screen overflow-hidden justify-center items-center bg-black">
        <h1 className="text-xl">Uploaded Successfully!</h1>
        <div className="flex justify-center items-center gap-2">
          <div className="w-10 h-10 border-2 border-gray-100 rounded-full animate-spin"></div>
          Processing...
        </div>
      </div>
    );
  }
  if (status === "success") {
    return(
      <div className="flex text-white px-24 py-16 flex-col gap-10 h-screen w-screen overflow-hidden justify-start items-center bg-black">
        <h1 className="text-3xl font-medium">
          Here&apos;s your summary!
        </h1>
        <p dangerouslySetInnerHTML={{__html: data}} className="text-lg w-[80%] whitespace-break-spaces overflow-auto overflow-x-hidden p-5 bg-gray-800 rounded-xl"></p>
      </div>
    )
  }
}

