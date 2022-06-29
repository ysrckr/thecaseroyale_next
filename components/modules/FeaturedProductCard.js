import Image from 'next/image'
import { API_URL } from '@config/index'
import { useEffect, useState } from 'react'
import style from '@styles/modules/FeaturedProductCard.module.scss'

const FeaturedProductCard = ({ featuredProduct }) => {
	//State of Variations
	const [variation, setVariation] = useState({})
	//Variations in Product before variation call
	const featuredProductVars = featuredProduct.variations
	//Variation colors in Product before variation call
	const featuredProductColors = featuredProduct.attributes[0].options
	//Featured Product Price
	const featuredProductPrice = featuredProduct.price
	//Display CheckBoxes for Variations
	const displayCheckbox = () => {
		const row = []
		for (let i = 0; i < featuredProductColors.length; i++) {
			row.push(
				<input
					type="checkbox"
					name={featuredProductVars[i]}
					id={featuredProductVars[i]}
					key={featuredProductVars[i]}
					style={{ color: `${featuredProductColors[i]}`, border: 'none' }}
				/>
			)
		}
		return row
	}
	//Call for variations
	useEffect(() => {
		const fetchData = async () => {
			try {
				const productId = featuredProduct.id
				const res = await fetch(
					`${API_URL}/api/v1/products/${productId}/variations`
				)
				const vars = await res.json()
				setVariation(vars[0])
			} catch (error) {
				console.log(error)
			}
		}

		fetchData()
	}, [featuredProduct])
	//Variaation Base Price to Float
	const regularPriceNumber = parseFloat(variation.regular_price).toFixed(2)
	//Variation Sale Price to Float
	const salePriceNumber = parseFloat(variation.sale_price).toFixed(2)
	//Product Price to Float
	const featuredProductPriceNumber = parseFloat(featuredProductPrice).toFixed(2)
	//Prices to Dollars
	const regularPriceDollar = Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(regularPriceNumber)
	const salePriceDollar = Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(salePriceNumber)
	const featuredProductPriceDollar = Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(featuredProductPriceNumber)

	return (
		<div className="flex flex-col justify-center items-center">
			<Image
				src={featuredProduct.images[0].src}
				alt={featuredProduct.images[0].alt}
				width={200}
				height={200}
			/>
			<p>{featuredProduct.name}</p>
			{/* If Featured Product has Variations, display CheckBoxes */}
			{featuredProduct.variations.length > 0 && displayCheckbox()}
			{/* If Featured Product has Variations, display variation prices */}
			{featuredProduct.variations.length > 0 ? (
				featuredProduct.price !== variation.sale_price ? (
					<div>
						<span>{regularPriceDollar}</span>
					</div>
				) : (
					<div className="flex justify-between items-center min-w-fit">
						<span className="mx-8">
							<s className={style.strike}>{regularPriceDollar}</s>
						</span>
						<span className="mx-8">{salePriceDollar}</span>
					</div>
				)
			) : (
				//Else display Product price
				<div>
					<span>{featuredProductPriceDollar}</span>
				</div>
			)}
		</div>
	)
}
export default FeaturedProductCard
