"use client";

import Image from "next/image";
import { InfoIcon } from "lucide-react";
import { useState } from "react";

import { db } from "@/utils/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Button } from "@/components/ui/button";

export default function Home() {

  const [secret, setSecret] = useState("");

  async function handleSubmit(e:any) {
    e.preventDefault();
    // console.log(secret);
    const doc = await addDoc(collection(db, "secrets"), {
      secret: secret,
      createdAt: serverTimestamp(),
    });
  };

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
            <form className="flex flex-col mx-auto w-full max-w-lg p-8 mt-8 bg-secondary rounded-xl"
            onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Your secret"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                className="w-full p-4 mb-4 bg-white rounded-xl"
              />
              <Button type="submit">
                Share
              </Button>
            </form>
          </div>
    </div>
  );
}
