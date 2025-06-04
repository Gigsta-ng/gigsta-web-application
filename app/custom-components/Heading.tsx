export default function Heading({ heading }: { heading: string }) {
    return (
        <div className="flex flex-col w-fit">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">{heading}</h2>
            <div className="w-full h-1 bg-yellow-500 rounded-xl mt-1"></div>
        </div>
    );
}