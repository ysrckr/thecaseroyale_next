import FeaturedProductCard from './FeaturedProductCard'
const FeaturedProducts = ({ featuredProducts }) => {
	return (
		<div>
			<h2>Featured Products</h2>
			<div className="grid col-auto">
				{featuredProducts.map(featuredProduct => (
					<FeaturedProductCard
						key={featuredProduct.id}
						featuredProduct={featuredProduct}
					/>
				))}
			</div>
		</div>
	)
}
export default FeaturedProducts
