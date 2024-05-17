// Cart.js
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeCart } from "../Redux/store"
import "../App.css"

function Cart() {
	const cart = useSelector((state) => state.products.cart)
	const dispatch = useDispatch()
	return (
		<div>
			<br />
			<div className=" flex justify-around">
				<div className=" ">
					{cart.map((item) => (
						<div key={item.id}>
							<div className="shadow-md m-5 p-5">
								<img className=" h-40  " src={item.thumbnail} alt="" />
								{item.title} <br />
								{item.price + "$"} <br />
								{item.brand} <br />
								<button
									className='inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-800 rounded text-base mt-4 md:mt-0'
									onClick={() => dispatch(removeCart(item))}>
									Delete
								</button>
							</div>
						</div>
					))}
				</div>
				<div className="shadow-md h-96 w-96 justify-between">
					<h1>PRICE DETAILS</h1> <br />
					<hr />
					<div >
						<ul>
							<li className="flex justify-around">
								<h2>Price</h2>
								<h2>{cart.reduce((sum, pr) => sum + pr.price, 0) + "$"}</h2>
							</li><br />
							<li className="flex justify-around">
								<h2>Discount </h2>
								<h2>0$</h2>
							</li><br />
							<li className="flex justify-around">
						       <h2>Coupon Discount   </h2>
                                <h2>0$</h2>
							</li><br />
							<hr /><br />
							<li className="flex justify-around">
					          	<h1>Total</h1>
                                <h1>{cart.reduce((sum, pr) => sum + pr.price, 0) + "$"}</h1>
							</li><br />
						</ul>
						<hr /><br />
						<div className="flex justify-around">
						<h2>Have a Coupon </h2>
						<button className="border w-20">Apply</button>
                            
						</div><br />
						<button className='inline-flex  items-center text1 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
							checkout
						</button>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Cart
