import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [result, setResult] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const Access_Key = import.meta.env.VITE_FORM_ACCESS_KEY;

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!email || !name || !description) {
      setResult("Please fill all required fields");
      return;
    }

    setSubmitting(true);
    setResult("Sending....");
    
    try {
      const formData = new FormData();
      
      formData.append("email", email);
      formData.append("name", name);
      formData.append("number", number);
      formData.append("message", description);
      formData.append("access_key", Access_Key);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("We Successfully Recieved your message..!");
        setEmail("");
        setName("");
        setNumber("");
        setDescription("");
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("Failed to submit the form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen px-2 pt-32 pb-10 bg-gradient-to-bl from-green-400 to-black flex items-center justify-center">
      <div className="bg-[#9e9e9e49] backdrop-blur-xl text-white rounded-2xl border-2 border-neutral-400 shadow-2xl w-full sm:max-w-4xl font-mono p-6">
        <div className="text-green-400 py-2 flex items-center gap-3">
          <div className="flex gap-1 items-center">
            <span className="h-4 w-4 rounded-full bg-red-500"></span>
            <span className="h-4 w-4 rounded-full bg-amber-500"></span>
            <span className="h-4 w-4 rounded-full bg-green-500"></span>
          </div>
          contact@flexflow
        </div>
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

        <form className="mt-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="bg-transparent border-b border-neutral-400 w-full mb-2 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="bg-transparent border-b border-neutral-400 w-full mb-2 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            name="number"
            placeholder="Enter your number"
            className="bg-transparent border-b border-neutral-400 w-full mb-2 outline-none"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            className="bg-transparent border-b border-neutral-400 w-full mb-2 outline-none resize-none"
            rows="2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button 
            type="submit"
            disabled={submitting}
            className="mt-4 px-5 active:scale-90 ease-in-out duration-200 py-2 bg-green-600 text-white text-sm rounded cursor-pointer disabled:bg-green-800 disabled:cursor-not-allowed"
          >
            {submitting ? "Sending..." : "Send"}
          </button>
          
          {result && (
            <p className="mt-2 text-center text-sm font-semibold text-green-500">{result}</p>
          )}
        </form>
      </div>
    </div>
  );
}