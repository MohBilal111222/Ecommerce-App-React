
// function Card() {
//     return (
//        <>
//        <div className="card bg-base-100 w-96 shadow-xl">
//        <figure>
//        <img
//         src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//         alt="Shoes" />
//        </figure>
//        <div className="card-body">
//        <h2 className="card-title">Shoes!</h2>
//        <p>If a dog chews shoes whose shoes does he choose?</p>
//        <div className="card-actions justify-end">
//        <button className="btn btn-primary">Buy Now</button>
//        </div>
//        </div>
//        </div>
//        </>
//     )
//   }
  
//   export default Card













































import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({image, title, price, desc, items}) {
    const navigate = useNavigate();
  
    function singleUser(i) {
      navigate(`SingleProduct/${i.id}`);
    }
  
    return (
      <div className='flex justify-center'>
        <div className="card bg-base-100 flex-grow max-w-md shadow-xl mt-6 p-3 text-center bg-white">
          <figure className='mx-auto shadow-sm'>
            <img
              className='mx-auto w-full h-[20rem] object-contain'
              src={image}
              alt={title} />
          </figure>
          <div className="card-body p-5">
            <h2 className="card-title">{title}</h2>
            <p>Rs: {price}</p>
            <p className='h-[3rem] overflow-hidden'>{desc}...</p>
            <div className="card-actions justify-end">
              <button onClick={() => singleUser(items)} className="w-[7rem] px-3 py-2 rounded-xl bg-[red] mt-2">See More...</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default Card