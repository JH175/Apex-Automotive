export default function Contact() {
	return (
		<div id="contact" className="flex min-h-screen flex-col gap-10 py-10">
			<h2 className="text-xl">Contact Us:</h2>
			<div className="flex flex-col justify-evenly gap-10 md:flex-row">
				<div className="flex flex-col gap-10">
					<div>
						<p className="text-xl">Call: (859) 802-3693</p>
						<p>Email: apex@apexnky.com</p>
					</div>
					<div>
						<p className="underline underline-offset-4">Shop Address</p>
						<a target="_blank" href="https://maps.app.goo.gl/kzyLWztFWR45bXRQ8">
							<p className="text-lime-300">6613 Camp Ernst Road</p>
							<p className="text-lime-300">Burlington, KY 41005</p>
						</a>
					</div>
					<div>
						<p className="underline underline-offset-4">Hours</p>
						<p>Monday - Friday</p>
						<p>8am - 6pm</p>
					</div>
				</div>
				<iframe
					className="h-[20rem] rounded-md md:w-1/2"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.227491963777!2d-84.70712772483974!3d39.010123771700165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841c5c3c4bbaea1%3A0xb09d180ce6c34336!2sApex%20Automotive!5e0!3m2!1sen!2sus!4v1712695643837!5m2!1sen!2sus"
					loading="lazy"
				/>
			</div>
		</div>
	)
}
