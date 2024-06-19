interface pageProps {
	resetSubmitted: () => void
}

export default function ThankYou({ resetSubmitted  } : pageProps) {
	return (
		<main className="flex flex-row min-h-screen justify-center items-center text-center">
			<div className="rounded-lg font-sans text-customGreen p-16">
					<h1 className="text-3xl pb-8">Thank you for entering our giveaway!</h1>
				<p className="text-customGreen">The drawing will happen on{" "}
					<span className="text-lg text-customCoral font-bold ml-1">
						June 23rd, 2024
					</span>
				</p>
				<p className="text-customGreen">
					Keep your eyes peeled on our Instagram feed!
				</p>
				<button
					type="submit"
					className="bg-customCoral font-bold text-sm text-white py-3 mt-6 rounded-lg w-full"
					onClick={resetSubmitted}>
					Submit another entry!
				</button>
			</div>
		</main>
	)
}