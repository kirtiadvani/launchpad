import { ItemBuilderTypes } from "./types";
import ItemBuilder from "./itemBuilder";
import { useRouter } from "next/router";

const Items = [
    {
        id: 0o1,
        name: "Resume Rectifier",
        description: "Get your resume analyzed AI!",
        link: '/resume'
    },
    {
        id: 0o2,
        name: "Job Finder",
        description: "Jobs for you!",
        link: '/jobs'
    },
    {
        id: 0o3,
        name: "Only for Student Store",
        description: "Get free stuff!",
        link: ''
    }
]

export default function ThingsScreen() {
  const router = useRouter();
  return (
    <div className="px-12 py-20 h-screen w-screen">
    <div id="things" className="h-full w-full  flex flex-col bg-hero-pattern-2 bg-no-repeat bg-right-top bg-20% items-start gap-10">
      <h1 className="text-6xl font-medium font-times">Things to do!</h1>
      <div className="h-full w-full grid grid-cols-3 place-content-end gap-24">
        {Items.map((item: ItemBuilderTypes) => (
            <ItemBuilder
                key={item.id}
                description={item.description}
                id={item.id}
                name={item.name}
                link={item.link}
            />
        ))}
      </div>
    </div>
    </div>
  );
}
