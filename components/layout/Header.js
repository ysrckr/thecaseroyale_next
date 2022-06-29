import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MainNavigation from './MainNavigation'

const Header = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="The Case Royale" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="bg-emerald-900 sticky shadow-sm">
				<div className="container mx-auto flex justify-between items-center">
					<div className="site-logo">
						<Link href="/">
							<a>
								<Image
									src="/images/site-logo.png"
									alt="site-logo"
									width={80}
									height={80}
								/>
							</a>
						</Link>
					</div>
					<MainNavigation />
				</div>
			</header>
		</>
	)
}
export default Header
