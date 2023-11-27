import ServiceCard from '../components/ServiceCard'
import diagnostics from '../assets/images/diagnostics.jpg'
import brake from '../assets/images/brake.jpg'
import engine from '../assets/images/engine.jpg'

export default function Services() {
	return (
		<div id="services" className="flex min-h-screen flex-col space-y-10 py-10">
			<h2 className="text-xl">Our Services:</h2>
			<p>
				Our services are comprehensive and customized to meet your specific needs. We guarantee
				honest, affordable, and timely work.
			</p>
			<div className="flex flex-col justify-evenly gap-10 md:flex-row">
				<ServiceCard title="Diagnostics" services="diagnostics & inspections">
					<img src={diagnostics.src} alt="" />
				</ServiceCard>
				<ServiceCard title="Routine Maintenance " services="fluids, brakes, belts +">
					<img src={brake.src} alt="" />
				</ServiceCard>
				<ServiceCard
					title="Repairs & Upgrades"
					services="engine, transmission, exhaust, drivetrain, suspension, cosmetic +"
				>
					<img src={engine.src} alt="" />
				</ServiceCard>
			</div>
		</div>
	)
}
