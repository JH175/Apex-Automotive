export default function Contact() {
	return (
		<div id="contact" className="flex min-h-screen flex-col gap-10 py-10">
			<h2 className="text-xl">Contact Us:</h2>
			<div className="flex flex-col justify-evenly gap-10 md:flex-row">
				<div className="flex flex-col gap-10">
					<p className="text-xl">Call: (859) 802-3693</p>
					<p>Email: apex@apexnky.com</p>
					<div>
						{/* <p className="underline underline-offset-4">Shop Address</p>
						<p>6613 Camp Ernst Road</p>
						<p>Burlington, KY 41005</p> */}
						<p className="underline underline-offset-4">Mobile Service Area</p>
						<p>Northern Kentucky / Greater Cincinnati Area</p>
						<p className="text-lime-300">Hebron, Burlington, Florence +</p>
					</div>
					<div>
						<p className="underline underline-offset-4">Hours</p>
						<p>Monday - Friday</p>
						<p>8am - 6pm</p>
					</div>
				</div>

				<iframe
					className="h-[20rem] rounded-md md:w-1/2"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198409.0509082994!2d-84.85157661985677!3d39.01208737275841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5e5b15bf3cd4823%3A0x965e42e73da7836e!2sApex%20Automotive!5e0!3m2!1sen!2sus!4v1701050563770!5m2!1sen!2sus"
					loading="lazy"
				/>
			</div>
		</div>
	)
}
