import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () =>
{
  const cart = useSelector((state) => state.products.cart)
  return (
		<header className='text-gray-600 body-font text1 rounded'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
					<span className='ml-3 text-xl'>myCart</span>
				</a>
				<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
					<Link
						className='mr-5 hover:text-gray-900'
						to='/Home'>
						Home
					</Link>
					<Link
						className='mr-5 hover:text-gray-900'
						to='/Products'>
						Products
					</Link>
					<Link
						className='mr-5 hover:text-gray-900'
						to='/Contact'>
						contact
					</Link>
				</nav>
				<div className='space-x-4'>
				<Link to='/cart'>
					<button className='inline-flex items-center bg-gray-100 border-0 px-2 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0 h-9 w-13'>
						Cart
						<span className=' rounded-lg p-6'> {cart.length}</span>
					</button>
				</Link>
				<Link to='/Login'>
			     	<button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
				     	Login
				     </button>
				</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
