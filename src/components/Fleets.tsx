import fleet from '../assets/images/fleet.jpg'

export default function Fleets() {
	return (
		<div id="fleets" className="flex min-h-screen flex-col space-y-10  py-10">
			<h2 className="text-xl">Fleet Solutions:</h2>
			<div className="flex flex-col items-center justify-evenly gap-10 md:flex-row">
				<div className="overflow-hidden rounded-md">
					<img src={fleet.src} />
				</div>
				<div className="flex flex-col space-y-10 rounded-md md:w-2/3">
					<p>
						Our Customized fleet solutions are not just about keeping your vehicles on the road;
						they're about optimizing performance, enhancing reliability, and ultimately contributing
						to the seamless function of your business. We offer a comprehensive suite of services
						aimed at ensuring that your fleet operates at peak efficiency.
					</p>
					<p>
						Whether you manage a small business with a handful of vehicles or oversee a large-scale
						operation with an extensive fleet, our fleet solutions are adaptable to your specific
						requirements.
					</p>
				</div>
			</div>
		</div>
	)
}
