// import React, { useContext } from "react";
// // import header_style from"./Header.module.css"
// import { Link } from "react-router-dom";
// import { SlLocationPin } from "react-icons/sl";
// import { BsSearch } from "react-icons/bs";
// import LowerHeader from "../LowerHeader";
// import { BiCart } from "react-icons/bi";

// import header_style from "./Header.module.css";
// import "./Header.module.css";
// import { DataContext } from "../DataProvider/Dataprovider";

// function Header() {
// 	const [{basket}, dispatch] = useContext(DataContext);
// 	console.log("from header", basket);
// 	const totalItem=basket?.reduce((amount,item)=>{
// return item.amount + amount
// 	},0)
// 	return (
// 		<section className={header_style.fixed}>
// 			<section className={header_style.header__container}>
// 				{/* < log section> */}
// 				<div className={header_style.logo__container}>
// 					<Link to="/">
// 						<img
// 							src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
// 							alt="amazon logo"
// 						/>
// 					</Link>
// 					{/* delivery */}
// 					<div className={header_style.delivery}>
// 						<span>{SlLocationPin}</span>
// 						<div>
// 							<p> delivered to</p>
// 							<span> Ethiopia</span>
// 						</div>
// 					</div>
// 				</div>
// 				{/* search */}
// 				<div className={header_style.search}>
// 					<select name="" id="">
// 						<option values=""> All</option>
// 					</select>
// 					<input type="text" />
// 					<BsSearch size={25} />
// 				</div>
// 				{/* right side link */}
// 				<div className={header_style.order_container}>
// 					<Link to="" className={header_style.language}>
// 						<img
// 							src="https://simple.wikipedia.org/wiki/Flag_of_the_United_States"
// 							alt=""
// 						/>
// 						<select name="" id="">
// 							<option value="">EN</option>
// 						</select>
// 					</Link>
// 					{/* three components */}
// 					<Link to="">
// 						<p>Sign In</p>
// 						<span>Account & Lists</span>
// 					</Link>
// 					{/* orders */}
// 					<Link to="/orders">
// 						<p>Returns</p>
// 						<span> & orders</span>
// 					</Link>

// 					{/* cart */}
// 					<Link to="/cart" className={header_style.cart}>
// 						{/* {"/cart"} */}
// 						<BiCart size={35} />
// 						<span> {totalItem} </span>
// 					</Link>
// 				</div>
// 			</section>
// 			<LowerHeader />
// 		</section>
// 	);
// }

// export default Header;

// ****The Above code is mine******

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "../LowerHeader";
import header_style from "./Header.module.css";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {
	const [{ basket }] = useContext(DataContext);

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

					<Link to="/signin">
						<p>Sign In</p>
						<span>Account & Lists</span>
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
