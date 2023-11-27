import { motion } from 'framer-motion'
import { useState } from 'react'
import logo from '../assets/images/logo.png'
import { useMediaQuery } from '../hooks/useMediaQuery'
export default function Nav() {
	const [extended, setExtended] = useState(false)
	const toggleNav = () => {
		setExtended((prevExtended) => !prevExtended)
	}
	const matches = useMediaQuery('(min-width: 1280px)')
	return (
		<div className="flex items-center justify-between">
			<div className="flex w-[10rem] items-center justify-center">
				<img src={logo.src} alt="" />
			</div>

			{matches ? (
				<nav className="flex gap-10">
					<a className="hover:text-lime-300" href="#services">
						Services
					</a>

					<a className="hover:text-lime-300" href="#fleets">
						Fleets
					</a>
					<a className="hover:text-lime-300" href="#contact">
						Contact Us
					</a>
				</nav>
			) : null}
			{!matches ? (
				<div
					onClick={toggleNav}
					className={`z-50 cursor-pointer space-y-1.5 ${extended && 'fixed right-10 top-10'}`}
				>
					<motion.span
						animate={{ rotateZ: extended ? 45 : 0, y: extended ? 8 : 0 }}
						className="block h-0.5 w-8 bg-lime-300"
					></motion.span>
					<motion.span
						animate={{ width: extended ? 0 : 24 }}
						className="block h-0.5 w-6 bg-lime-300"
					></motion.span>
					<motion.span
						animate={{
							rotateZ: extended ? -45 : 0,
							y: extended ? -8 : 0,
							width: extended ? 32 : 16
						}}
						className="block h-0.5 w-4 bg-lime-300"
					></motion.span>
				</div>
			) : null}
			{extended && !matches ? (
				<motion.div
					animate={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 25 }}
					className="fixed bottom-0 left-0 z-40 flex h-screen w-full items-center justify-center bg-neutral-900"
				>
					<nav className="flex flex-col gap-10 text-center">
						<a onClick={toggleNav} href="#services">
							Services
						</a>
						<a onClick={toggleNav} href="#fleets">
							Fleets
						</a>
						<a onClick={toggleNav} href="#contact">
							Contact Us
						</a>
					</nav>
				</motion.div>
			) : null}
		</div>
	)
}
