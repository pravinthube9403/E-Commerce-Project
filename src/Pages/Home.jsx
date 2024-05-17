import React from 'react'
import "../App.css";
const Home = () => {
  return (
    <div>
      <div className='flex'>

        <div className='p-20 flex flex-col space-y-5'>
          <h2 className='text'>SUMMER SALE IS ON</h2>
          <h1>Make youe Fashion More Perfect</h1>
          <h4>Shop the latest trends, elevate your style with our intuitive clothing web app. </h4>
          <button className="text1 m-36 w-28 h-10">Explore More</button>
        </div>
        <div>
          <img src="../../src/assets/head-img-3.png" alt="" />
        </div>
      </div>
       <div>
         <ul className="flex justify-around p-10">
          <li><img className=" h-10" src="../../src/assets/svgs/free-shipping.svg" alt="" />
          <span>Free Shipping</span>
         </li>
          <li><img className=" h-10" src="../../src/assets/svgs/Secure-Payments.svg" alt="" />
          <span>Secure Payments</span>
         </li>
          <li><img className=" h-10" src="../../src/assets/svgs/Easy-Returns.svg" alt="" />
          <span>Easy Returns</span>
         </li>
          <li><img className=" h-10" src="../../src/assets/svgs/Support.svg" alt="" />
          <span>24/7 Support</span>
         </li>
         </ul>
         
       </div>
    </div>
  )
}

export default Home
