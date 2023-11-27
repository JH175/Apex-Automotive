type ServiceCardProps = {
	title?: string
	children: React.ReactNode
	services?: string
}

export default function ServiceCard(props: ServiceCardProps) {
	return (
		<div className="flex flex-col items-center gap-10">
			<div className="h-60 overflow-hidden rounded-md">{props.children}</div>
			<div className="flex w-full flex-col items-center justify-center gap-5 text-center">
				<p className="text-xl">{props.title}</p>
				<p className="text-lime-300">{props.services}</p>
			</div>
		</div>
	)
}
