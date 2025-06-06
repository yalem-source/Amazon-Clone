import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "../LowerHeader";
import header_style from "./Header.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {
	const [{ user, basket }] = useContext(DataContext);

	const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);

	return (
		<section className={header_style.fixed}>
			<section className={header_style.header__container}>
				{/* Logo section */}
				<div className={header_style.logo__container}>
					<Link to="/">
						<img
							src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
							alt="amazon logo"
						/>
					</Link>
					<div className={header_style.delivery}>
						<span>
							<SlLocationPin />
						</span>
						<div>
							<p>Deliver to</p>
							<span>Ethiopia</span>
						</div>
					</div>
				</div>

				{/* Search bar */}
				<div className={header_style.search}>
					<select name="" id="">
						<option value="">All</option>
					</select>
					<input type="text" />
					<BsSearch size={25} />
				</div>

				{/* Right side links */}
				<div className={header_style.order_container}>
					<Link to="#" className={header_style.language}>
						<img
							src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
							alt="US Flag"
						/>
						<select>
							<option value="">EN</option>
						</select>
					</Link>

					<Link to={!user && "/auth"}>
						<div>
							{user ? (
								<>
								<p> Hello {user?.email?.split("@")[0]} </p>
								<span onClick={()=>auth.signOut()}>Sign Out</span>
								</>
								
							) : (
								<>
								<p> Hello,Sign In</p>
								<span>Account & Lists</span>
								</>
								
							)}
						</div>

						
					</Link>

					<Link to="/orders">
						<p>Returns</p>
						<span>& Orders</span>
					</Link>

					<Link to="/cart" className={header_style.cart}>
						<BiCart size={35} />
						<span>{totalItem}</span>
					</Link>
				</div>
			</section>
			<LowerHeader />
		</section>
	);
}

export default Header;
