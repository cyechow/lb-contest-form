'use client'

import { useState } from "react";

import ThankYou from "./_components/thankyou";
import EntryForm from "./_components/form";

export default function Home() {
  const [submitted, setSubmitted] = useState(false)

  const resetForm = () => {
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <ThankYou resetSubmitted={ resetForm } />
    )
  }

  return (
    <div>
      <main className="flex flex-row min-h-screen justify-center items-center bg-white font-sans">
        <div className="flex">
          <div className="flex-1 text-gray-700 p-20">
              <h1 className="text-3xl font-bold pb-6">LimitBreaker Giveaway Contest</h1>
              <p className="pb-4">Enter our giveaway contest for a chance to win limited LimitBreaker items!</p>
              <p className="pb-4">To enter the draw, please follow LimitBreaker on Instagram <a href="https://www.instagram.com/lb.limitbreaker/" className="text-blue-500 underline">@lb.limitbreaker</a>
                {' '}and submit your name and IG handle.</p>
              <p className="pb-4">The winners will be announce on <b className="text-lg text-red-500">June 26th, 2024</b></p>
              <div className="mt-6">
                <EntryForm setSubmitted={() => setSubmitted(true)} />
              </div>
          </div>
        </div>
      </main>
    </div>
  );
}
