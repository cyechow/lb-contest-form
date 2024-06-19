interface pageProps {
	resetSubmitted: () => void
}

export default function ThankYou({ resetSubmitted  } : pageProps) {
	return (
		<main className="flex flex-row min-h-screen justify-center items-center">
			<div className="bg-white rounded-lg font-sans text-customGreen p-16">
					<h1 className="text-3xl pb-4">Congrats, you&apos;ve entered the giveaway!</h1>
				<p className="text-customGreen">The draw will happen on{" "}
					<span className="text-lg text-customCoral font-bold">
						June 23rd, 2024{" "}
					</span>{" "}
					, we will reach out if you&apos;ve won!
				</p>
				<button
					type="submit"
					className="bg-gray-500 font-bold text-sm text-white py-3 mt-6 rounded-lg w-full"
					onClick={resetSubmitted}>
					Submit another entry!
				</button>
			</div>
		</main>
	)
}