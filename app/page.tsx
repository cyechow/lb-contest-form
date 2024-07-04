"use client";

import Image from "next/image";
import { useState } from "react";

import ThankYou from "./_components/thankyou";
import EntryForm from "./_components/form";
import Closed from "./_components/closed";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [ended, setEnded] = useState(true);

  if (ended) {
    return (
      <div className="bg-hero-pattern bg-cover">
        <Closed />
        </div>
    );
  }

  if (submitted) {
    return (
      <div className="bg-hero-pattern bg-cover">
        <ThankYou resetSubmitted={() => setSubmitted(false)} />
       </div>
    );
  }

  return (
    <div className="bg-hero-pattern bg-cover">
      <main className="flex flex-row min-h-screen justify-center items-center">
        <div className="flex">
          <div className="flex-1 text-customGreen p-20">
            <Image
              src="/images/otter.png"
              alt="LB otter image"
              layout="responsive"
              width={1453}
              height={818}
              objectFit="cover"
              className="rounded-none mb-6"
            />
            <p className="text-xl text-customCoral text-center">
              Join Our Giveaway for a Chance to
            </p>
            <p className="text-xl text-customCoral text-center mb-8">
              Win Exclusive LimitBreaker Gear!
            </p>
            <p>To enter:</p>
            <ol className="my-4 ml-4 flex-col flex gap-1">
              <li className="flex gap-2">
                <p>1.</p>
                <p>
                  Follow us on Instagram{" "}
                  <a
                    href="https://www.instagram.com/lb.limitbreaker/"
                    className="text-white underline"
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
              Winners will be announced on our Instagram feed on{" "}
              <span className="text-lg text-customCoral font-bold ml-2 mr-2">
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
