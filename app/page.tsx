"use client";

import { useState } from "react";
import { Bebas_Neue } from "next/font/google";

import ThankYou from "./_components/thankyou";
import EntryForm from "./_components/form";

const bebas_neue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const resetForm = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return <ThankYou resetSubmitted={resetForm} />;
  }

  return (
    <div>
      <main className="flex flex-row min-h-screen justify-center items-center bg-white">
        <div className="flex">
          <div className="flex-1 text-gray-700 p-20">
            <h1 className={`text-3xl font-bold mb-6 ${bebas_neue.className}`}>
              LimitBreaker Giveaway
            </h1>
            <p className="mb-4">
              🎉 Join Our Giveaway for a Chance to Win Exclusive
              LimitBreaker Items! 🎉
            </p>
            <p>To enter:</p>
            <ol className="my-4 ml-4 flex-col flex gap-1">
              <li className="flex gap-2">
                <p>1.</p>
                <p>
                  Follow us on Instagram{" "}
                  <a
                    href="https://www.instagram.com/lb.limitbreaker/"
                    className="text-blue-500 underline"
                  >
                    @lb.limitbreaker
                  </a>
                </p>
              </li>
              <li className="flex gap-2">
                <p>2.</p>
                <p>
                  Submit your name and Instagram handle using the form below
                </p>
              </li>
            </ol>
            <p className="mb-4">
              Winners will be announced on our Instagram page on{" "}
              <span className="text-lg text-red-500 font-bold">
                June 23rd, 2024{" "}
              </span>{" "}
              and contacted via direct message.
            </p>
            <div className="mt-6">
              <EntryForm setSubmitted={() => setSubmitted(true)} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
