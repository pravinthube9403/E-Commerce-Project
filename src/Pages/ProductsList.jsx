import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts,addCart } from '../Redux/store'
import { Link } from 'react-router-dom';

const ProductsList = () =>
{
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products)
  useEffect(() =>
  {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => { console.log(data.products); dispatch(setProducts(data.products)) })
    
  },[dispatch])
  return (
		<div>
			<section class='text-gray-600 body-font'>
				<div class='container px-5 py-24 mx-auto'>
					<div class='flex flex-wrap -m-4'>
						{products &&
							products.map((pr, index) => (
								<div
									class='p-4 md:w-1/3'
									key={index}>
									<div class='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
										<img
											class='lg:h-48 md:h-36 w-full object-cover object-center'
											src={pr.thumbnail}
											alt={pr.title}
										/>
										<div class='p-6'>
											<h2 class='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
												{pr.category}
											</h2>
											<Link to={`/product/${pr.id}`}>
												<h1 class='title-font text-lg font-medium  hover:text-blue-600 text-gray-900 mb-3'>
													{pr.title}
												</h1>
											</Link>
											<p class='leading-relaxed mb-3'>{pr.description}</p>
											<div class='flex items-center flex-wrap '>
												<a class='text-red-500 inline-flex items-center md:mb-2 lg:mb-0'>
													<button onClick={() => dispatch(addCart(pr))}>
														Add to cart
													</button>
												</a>
											</div>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default ProductsList
