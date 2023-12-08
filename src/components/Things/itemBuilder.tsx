import { ItemBuilderTypes } from "./types"
import { useRouter } from "next/router"

export default function ItemBuilder (props: ItemBuilderTypes) {
  const router = useRouter()
    return <div className="h-full flex flex-col gap-5">
    <h1 className=" text-4xl">0{props.id}</h1>
    <p className="text-2xl">
        {props.description}
    </p>
    <p className="mt-7 text-4xl">{props.name}</p>
    <button disabled={props.link === ""} onClick={(e) => {
      e.preventDefault()
      router.push(props.link)
    }} className="p-3 px-5 w-fit font-times text-white text-xl active:scale-95 transition-all duration-200 cursor-pointer select-none rounded-full bg-[#202020]">
      Check out now!
    </button>
  </div>
}