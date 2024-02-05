import Image from "next/image";
import { InfoIcon } from "lucide-react";


export default function Home() {
  return (
        <div>
      <div className="flex flex-col items-start max-w-xl px-8 mx-auto my-16 sm:px-0">
        <h1 className="self-center text-3xl font-bold text-center sm:text-6xl">
           Welcome to <span className=" italic underline font-bold">secreter</span><span className=" text-cyan-500"> !</span>
        </h1>
        <div className="flex p-4 mt-5 rounded-xl border-none bg-secondary">
          <InfoIcon className="w-12 h-12 mr-3 text-blue-400" />
          <div>
            <span className=" text-pink-500 font-bold text-3xl ">Share a secret </span> 
            <p> ... with a link that only works one time and then self-destructs.</p>
          </div>
        </div>

        {/* <CreateCourseForm /> */}
      </div>
    </div>
  );
}
