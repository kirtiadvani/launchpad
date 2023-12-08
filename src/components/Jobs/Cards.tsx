export interface Job {
  job: {
    title: string;
    company_name: string;
    location: string;
    description: string;
    tags: string[];
    url: string;
    remote: boolean;
  };
}

export default function Cards(job: Job) {
  return (
    <div data-aos="fade-left" className="w-full transition-all cursor-pointer">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#FF0066] text-white text-sm uppercase font-bold px-6 py-3">
          {job.job.title}
        </div>
        <div className="flex items-center px-6 py-3 bg-gray-100">
          <svg
            className="h-6 w-6 fill-current text-gray-500"
            viewBox="0 0 512 512"
          >
            <path
              d="M437.016,74.984C388.031,26,324.016,0,256,0S123.969,26,74.984,74.984C26,123.969,0,187.984,0,256s26,132.031,74.984,180.016
                    C123.969,486,187.984,512,256,512s132.031-26,180.016-74.984C486,388.031,512,324.016,512,256S486,123.969,437.016,74.984z
                    M256,482c-126.016,0-229.594-96.5-239.344-220h478.688C485.594,385.5,382.016,482,256,482z"
            />
          </svg>
          <h1 className="px-3 text-gray-600">{job.job.company_name}</h1>
        </div>
        <div className="px-6 py-4">
          <h1 className="font-bold text-xl mb-2">{job.job.title}</h1>
          <div dangerouslySetInnerHTML={{__html: job.job.description}} onClick={(e) => {
            e.preventDefault();
            const currentTarget = e.currentTarget;
            currentTarget.classList.toggle("h-12");
          }} className="text-gray-700 text-base h-12 overflow-hidden"> 
            
          </div>
          
        </div>
        <div className="px-6 pt-4 pb-2 flex flex-wrap gap-1">
          {job.job.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-[#ff0066] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2"
            >
              #{tag}
            </span>
            
          ))}
           <a
            href={job.job.url}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#ff0066] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2"
          >
            Apply
          </a>
        </div>
      </div>
    </div>
  );
}
