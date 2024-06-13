'use client'

import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { saveEntry } from "@/app/_lib/actions"
import { useState } from "react";
import ThankYou from "./_components/thankyou";

import EntryForm from "./_components/form";

import Image from "next/image";
import imageFile from "../public/image.jpg";

export default function Home() {
  const [submitted, setSubmitted] = useState(false)

  // Router
  const router = useRouter();

  // Formik - to handle all form-related things like validation and submission
  const formik = useFormik({
    initialValues: {
      name: '',
      ighandle: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name must be at least 2 characters long')
        .required('Name is required'),
      ighandle: Yup.string().matches(RegExp("^[a-zA-Z0-9.]+$"), "Valid Instagram handle required.").max(30, "Valid Instagram handles are 30 characters or less.")
        .required('Instagram handle is required.')
    }),

    onSubmit: (values) => {
      saveEntry(values)
      setSubmitted(true)
    }
  });

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
              <p className="pb-4">To enter the draw, please follow LimitBreaker on Instagram <a href="https://www.instagram.com/lb.limitbreaker/">@lb.limitbreaker</a>
                {' '}and submit your name and IG handle.</p>
              <p className="pb-4">The winners will be announce on <i className="text-red-500">some date</i>.</p>
              <div className="mt-6">
                <EntryForm setSubmitted={() => setSubmitted(true)} />
              </div>
          </div>
        </div>
      </main>
    </div>
  );
}
