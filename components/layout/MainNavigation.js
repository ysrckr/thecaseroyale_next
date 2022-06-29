import Link from 'next/link'
import { HiOutlineShoppingCart } from 'react-icons/hi'
const MainNavigation = () => {
	return (
		<nav className="mx-5">
			<ul className="flex justify-between items-center text-stone-200 text-3xl">
				<li>
					<HiOutlineShoppingCart />
				</li>
			</ul>
		</nav>
	)
}
export default MainNavigation
