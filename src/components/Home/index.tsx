export default function HomeScreen() {
  return (
    <div className="h-screen w-[100%] flex gap-5 p-12">
      <div className="h-full w-[60%] gap-10 flex flex-col p-10">
        <span className="text-6xl text-start ml-5">🚀</span>
        <div className="text-5xl font-times font-medium">
          <span>Student Launchpad,</span> <br />
          <span className="text-3xl">Be The Future!</span>
        </div>
        <div className="p-5 shadow-custom my-2 border border-solid">
          <div className=" bg-[#333333] p-5 text-white">
            Launchpad is a platform for students in tech. Get free resume
            analyzing and improvising with{" "}
            <span className="font-medium">Only for Student Store!</span> <br />
           
            <a href="#things" className="p-5 mt-5 px-8 w-fit inline-block font-times text-white text-xl active:scale-95 transition-all duration-200 cursor-pointer select-none rounded-full bg-[#202020]">
              Get started!
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-end">
        <div className="h-full w-full bg-hero-pattern bg-bottom bg-no-repeat">
        </div>
      </div>
    </div>
  );
}
