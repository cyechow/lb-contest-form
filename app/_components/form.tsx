import { useFormik, Form, FormikProvider, useField } from "formik";
import { checkEntry, saveEntry } from "@/app/_lib/actions";
import * as Yup from "yup";
import React from "react";

interface formProps {
  setSubmitted: () => void;
}

interface inputProps {
  label: string;
  helpText: string;
  id: string;
  name: string;
  type: string;
}

const FormInput = ({ label, helpText, id, name, type }: inputProps) => {
  const [field, meta] = useField({ id, name, type });

  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div
      className={`form-control ${
        showFeedback ? (meta.error ? "invalid" : "valid") : ""
      }`}
    >
      <div className="flex items-center space-between text-customCoral">
        <label htmlFor={id}>{label}</label>{" "}
        {showFeedback ? (
          <div
            id={`${id}-feedback`}
            aria-live="polite"
            className="feedback text-sm"
          >
            {meta.error ? meta.error : "✓"}
          </div>
        ) : null}
      </div>
      <div className="flex items-center space-between">
        <input
          {...{ id, name, type }}
          {...field}
          className="flex-1 text-gray-500 border-2 border-gray-500 p-2 rounded-md focus:border-customCoral focus:ring-customCoral"
          aria-describedby={`${id}-feedback ${id}-help`}
          onFocus={handleFocus}
        />
      </div>
      <div className="text-xs" id={`${id}-help`} tabIndex={-1}>
        {helpText}
      </div>
    </div>
  );
};

export default function EntryForm({ setSubmitted }: formProps) {
  // Formik - to handle all form-related things like validation and submission
  const formik = useFormik({
    initialValues: {
      name: "",
      ighandle: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters long")
        .required("Name is required"),
      ighandle: Yup.string()
        .required("Instagram handle is required.")
        .test("Unique IG handle", "IG handle already submitted",
          function (value) {
            return new Promise(async (resolve, reject) => {
              let valid = await checkEntry(value);
              console.log(`Entry is valid: ${valid}`)
              resolve(valid)
            })
          }
        )
    }),
    // TODO: what do we want to do with validation & feedback? Currently validate & call checkEntry on every change, not optimal.
    // OnChange/Blur set to false will push validation to onSubmit only.
    // validateOnChange: false,
    // validateOnBlur: false,

    onSubmit: async (values) => {
      saveEntry(values);
      setSubmitted();
    },
  });
  return (
    <FormikProvider value={formik}>
      <Form>
        <FormInput label="Name" id="name" name="name" helpText="" type="text" />
        <FormInput
          label="Instagram Handle/Name"
          id="ighandle"
          name="ighandle"
          type="text"
          helpText=""
        />
        <div>
          <button
            type="submit"
            className="bg-customCoral font-bold text-sm text-white py-3 mt-6 rounded-lg w-full hover:bg-pink-400 transition"
          >
            Submit
          </button>
        </div>
      </Form>
    </FormikProvider>
  );
}
