export default function Heading({ heading }: { heading: string }) {
	return (
		<div className="flex flex-col w-fit mb-9">
			<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
				{heading}
			</h2>
			<div className="w-full h-1 bg-yellow-500 rounded-xl mt-3" />
		</div>
	);
}
