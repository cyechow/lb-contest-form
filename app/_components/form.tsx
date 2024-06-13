import { useFormik, Field, Formik, Form, FormikHelpers, FormikProvider, useField } from "formik"
import { saveEntry } from "@/app/_lib/actions"
import * as Yup from "yup"
import React from "react";
import Image from "next/image";
import imageFile from "../../public/image.jpg";

interface formProps {
	setSubmitted: () => void
}

const FormInput = ({ label, helpText, ...props }) => {
	const [field, meta] = useField(props)

	const [didFocus, setDidFocus] = React.useState(false);
	const handleFocus = () => setDidFocus(true);
	const showFeedback = (!!didFocus && field.value.trim().length > 2) || meta.touched;

	return (
		<div className={`form-control ${
			showFeedback ? (meta.error ? 'invalid' : 'valid') : ''
		}`}>
			<div className="flex items-center space-between">
				<label
					htmlFor={props.id}
				>{label}</label>{' '}
				{showFeedback ? (
					<div
						id={`${props.id}-feedback`}
						aria-live="polite"
						className="feedback text-sm"
					>
						{meta.error ? meta.error: '✓'}
					</div>
				) : null}
			</div>
			<div className="flex items-center space-between">
				<input
					{...props}
					{...field}
					className="flex-1 border-2 border-gray-500 p-2 rounded-md focus:border-red-500 focus:ring-red-500"
					aria-describedby={`${props.id}-feedback ${props.id}-help`}
					onFocus={handleFocus}
				/>
			</div>
			<div className="text-xs" id={`${props.id}-help`} tabIndex={-1}>
				{helpText}
			</div>
		</div>
	)
}

export default function EntryForm({setSubmitted} : formProps) {

	// Formik - to handle all form-related things like validation and submission
	const formik = useFormik({
		initialValues: {
			name: '',
			ighandle: ''
		},

		validationSchema: Yup.object({
		name: Yup.string()
			.min(2, 'Name must be at least 2 characters long')
			.required('Name is required'),
		ighandle: Yup.string().matches(RegExp("^[a-zA-Z0-9.]+$"), "Valid Instagram handle required.").max(30, "Valid Instagram handles are 30 characters or less.")
			.required('Instagram handle is required.')
		}),

		onSubmit: async (values) => {
			saveEntry(values)
			setSubmitted()
		}
	});
	return (
		<FormikProvider value={formik} >
			<Form>
				<FormInput
					label="Name"
					id="name"
					name="name"
					helpText=""
					type="text"
				/>
				<FormInput
					label="Instagram Handle"
					id="ighandle"
					name="ighandle"
					helpText="Must be a valid IG handle, 30 characters or less and cannot contain any special characters aside from '.'"
					type="text"
				/>
				<div>
					<button type="submit" className="bg-gray-500 font-bold text-sm text-white py-3 mt-6 rounded-lg w-full">Submit</button>
				</div>
			</Form>
		</FormikProvider>
	)
}