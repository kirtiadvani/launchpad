import Cards from "./Cards";
import { useState, useRef, useEffect } from "react";
import "aos/dist/aos.css";
// @ts-ignore
import AOS from "aos";

export async function staticJobs() {
  const request = await fetch("https://launchpad-backend-redskull-127.vercel.app/db/get");
  if (request.ok) {
    return request.json();
  }
  return new Error(request.statusText);
}

export default function JobsComponent() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState<string>('');
  const [jobs, setJobs] = useState<any[]>([]);
  const [showJobs, setShowJobs] = useState<any[]>([]);
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
    staticJobs().then((res) => {
      setJobs(res);
      setShowJobs(res);
      console.log(res);
    });
    if(searchRef.current) {
      searchRef.current.focus();
    }
  }, []);
  
  
  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="h-full w-full overflow-x-hidden flex gap-5 flex-wrap justify-center">
        <form className="flex w-full justify-center gap-3">
          <input
            ref={searchRef}
            onChange={(e) => {
              e.preventDefault();
              setSearch(e.target.value);
              if (e.target.value.length === 0) {
                setShowJobs(jobs);
              }
            }}
            className="h-16 p-3 mb-5 sticky text-white rounded-xl w-[60%] ring-0 border-0 bg-gray-900 focus:outline-none focus:border-2 transition-all focus:border-[#ff0066]"
            placeholder="Search for jobs"
          />
          <button
            onClick={async (e) => {
              e.preventDefault();
              setShowJobs([]);
              let result = [] as any[];
              jobs.filter((job) => {
                if (
                  job.title.toLowerCase().includes(search.toLowerCase()) ||
                  job.company_name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  job.tags.includes(search) ||
                  job.location.toLowerCase().includes(search.toLowerCase()) ||
                  job.description.toLowerCase().includes(search.toLowerCase())
                ) {
                  result.push(job);
                }
              });
              setShowJobs(result);
            }}
            disabled={search.length < 4}
            className="
            h-16
            disabled:opacity-50
            p-3
            mb-5
            sticky
            text-white
            rounded-xl
            ring-0
            border-0
            bg-gray-900
            focus:outline-none
            focus:border-2
            transition-all
            focus:border-[#ff0066]
          "
            type="submit"
          >
            Search
          </button>
        </form>
        {showJobs && showJobs.length > 0 ? (
          showJobs.map((job, index) => <Cards key={index} job={job} />)
        ) : (
          <div className="h-full w-full flex justify-center items-center">
            <h1 className="text-white">Loading...</h1>
          </div>
        )}
      </div>
    </div>
  );
}
