import JobsComponent from "@/components/Jobs/JobsComponent";

export default function Jobs() {
  return (
    <div className="min-h-screen bg-black w-full gap-10 flex p-12 flex-col items-center">
      <div className="h-96 flex items-center">
        <h1 className="text-5xl relative text-white font-medium z-50 font-times">
          Jobs for you <span className="text-[#ff0066]">{":p"}</span>
        </h1>
      </div>
      <JobsComponent />
    </div>
  );
}
