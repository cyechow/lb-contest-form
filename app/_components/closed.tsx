import Image from "next/image";

export default function Closed() {
	return (
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
					<p className="text-xl text-customCoral text-center p-10">
						Giveaway has ended, thank you to those who entered!
					</p>
					<p className="text-xl text-customGreen text-center">
						Keep an eye our Instagram feed{" "}
						<a
							href="https://www.instagram.com/lb.limitbreaker/"
							className="text-white underline"
						>
							@lb.limitbreaker
						</a>{" "} for upcoming giveaways and events!
					</p>
				</div>
			</div>
		</main>
	)
}