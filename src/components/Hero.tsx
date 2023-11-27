export default function Hero() {
	return (
		<div id="top" className=" flex flex-col justify-center space-y-10 py-10">
			<h1 className="text-xl">
				Top-notch mobile mechanic service in the{' '}
				<span className="text-lime-300">Northern Kentucky</span> area
			</h1>
			<p>
				At Apex, we pride ourselves on delivering unparalleled automotive expertise and reliable
				solutions for both individuals and fleets. We are dedicated to providing comprehensive
				services that ensure your vehicle's optimal performance and longevity. Whether you're in
				need of <span className="text-lime-300">routine maintenance</span>,{' '}
				<span className="text-lime-300">complex repairs</span>, or{' '}
				<span className="text-lime-300">fleet solutions</span>, Apex Automotive has you covered.
			</p>
			<a
				href="#contact"
				className="mx-auto w-fit rounded-md border border-lime-300 p-5 text-center text-xl text-white shadow-md hover:shadow-lime-300"
			>
				Contact Us
			</a>
		</div>
	)
}
