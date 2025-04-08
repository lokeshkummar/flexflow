import React, { useState } from "react";
import { Link } from "react-router";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("")
  const [description, setDescription] = useState("");

  return (
    <div className="min-h-screen pt-32 pb-10 bg-gradient-to-bl from-green-400 to-black flex items-center justify-center">
      <div className="mx-4 md:mx-0 bg-[#5d5d5d78] backdrop-blur-xl text-white rounded-2xl border-2 border-neutral-400 shadow-2xl w-full max-w-2xl font-mono p-6">
        <div className="text-green-400 py-2 flex items-center gap-3">
          <div className="flex gap-1 items-center">
            <span className="h-4 w-4 rounded-full bg-red-500"></span>
            <span className="h-4 w-4 rounded-full bg-amber-500"></span>
            <span className="h-4 w-4 rounded-full bg-green-500"></span>
          </div>
          contact@flexfloww.vercel.app</div>
        <hr className="mt-2 mb-4 border-neutral-400" />
        <p>Hey there! We're excited to link</p>
        <p>------------------------------------</p>

        <p>
          To start, could you give us <span className="text-purple-300">your email</span>?
        </p>
        <div className="text-green-400">✔ {email}</div>

        <p>
          Awesome! And what's <span className="text-purple-300">your name</span>?
        </p>
        <div className="text-green-400">✔ {name}</div>
        <p>
          Awesome! And what's <span className="text-purple-300">your number</span>?
        </p>
        <div className="text-green-400">✔ {number}</div>
        <p>
          Perfect, and <span className="text-purple-300">how can we help you</span>?
        </p>
        <div className="text-green-400">✔ {description}</div>

        {/* <p className="mt-6 text-sm text-gray-300">
          Beautiful! Here's what we've got:
        </p>
        <p className="text-sm">email: {email}</p>
        <p className="text-sm">name: {name}</p>
        <p className="text-sm">number: {number}</p>
        <p className="text-sm">description: {description}</p> */}

        <form className="mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent border-b border-neutral-400 w-full mb-2 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-transparent border-b border-neutral-400 w-full mb-2 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
           <input
            type="text"
            placeholder="Enter your number"
            className="bg-transparent border-b border-neutral-400 w-full mb-2 outline-none"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <textarea
            placeholder="Enter your message"
            className="bg-transparent border-b border-neutral-400 w-full mb-2 outline-none resize-none"
            rows="2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
<Link className="px-5 py-2 bg-green-600 text-white text-sm rounded">Send</Link>
      </div>
    </div>
  );
}
