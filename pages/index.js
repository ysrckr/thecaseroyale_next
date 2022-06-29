import Head from 'next/head'
import styles from '@styles/modules/Home.module.scss'
import Header from '@components/layout/Header'
import FeaturedProducts from '@components/modules/FeaturedProducts'
import { API_URL } from '@config/index'

const Home = ({ featuredProducts }) => {
	return (
		<>
			<Header />
			<FeaturedProducts featuredProducts={featuredProducts} />
		</>
	)
}
export default Home

export async function getServerSideProps() {
	const res = await fetch(`${API_URL}/api/v1/products/featured`)
	const featuredProducts = await res.json()
	return {
		props: { featuredProducts },
	}
}
