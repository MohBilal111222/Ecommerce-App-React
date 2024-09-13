// import axios from "axios"
// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"


// function Singlepage() {

//     const [singleUser,setSingleUser] = useState(null)
//     const {id} = useParams()
//     useEffect(()=>{
//         axios(`https://fakestoreapi.com/products/${id}`)
//         .then((res)=>{
//             console.log(res.data);
//             setSingleUser(res.data)
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
//     },[])

//     function backPurchase(){
//         window.history.back()
//     }
//     return (
//         <div className="flex justify-center items-center h-screen p-4">
//     <div className="card bg-base-100 shadow-xl flex flex-col max-w-sm w-full">
//         {singleUser ? (
//             <>
//                 <figure className="flex-shrink-0">
//                     <img
//                         className="w-full h-48 object-cover p-2 rounded-t-[20px]"
//                         src={singleUser.image}
//                         alt={singleUser.title}
//                     />
//                 </figure>
//                 <div className="card-body flex-1 flex flex-col">
//                     <h2 className="card-title text-lg font-semibold p-2">{singleUser.title}</h2>
//                     <p className="flex-1 p-2">{singleUser.description}</p>
//                     <div className="card-actions mt-4 flex justify-end">
//                     <button className="btn w-full p-3 bg-blue-500 text-white" onClick={backPurchase}>Back to purchase
//                 </button>
//                     </div>
//                 </div>
//             </>
//         ) : (
//             <h1>Loading...</h1>
//         )}
//     </div>
// </div>
//     )
// }

// export default Singlepage


























































import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function SingleProduct() {
  let [data ,setData ] = useState([])  
  const {id} = useParams()
  useEffect(()=>{
    axios(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>{
      setData(res.data)
      console.log(res.data);
      
    })
  },[])
  return (
    <>
    <div>
      <h1 className='text-[2rem] text-center'>Product : {id}</h1>
    </div>
    

   { data ? <div className="flex flex-col md:flex-row max-w-5xl mx-auto p-4 bg-[white] text-[#38bdf8] shadow-lg mt-7 rounded-xl">
 
  <div className="w-full md:w-1/2 shadow-2xl  p-2 ">
    <img className="  object-contain w-[32rem] h-[27rem]  rounded-3xl" src={data.image} alt="Product Image" />
  </div>

  
  <div className="w-full md:w-1/2 flex flex-col justify-center p-6 space-y-4">
   
    <h1 className="text-3xl font-bold ">{data.title}</h1>

   
    <p className="text-xl text-green-600 font-semibold">{data.price}</p>

   
    <p className="">
    {data.description}
    </p>

   
    <button className="px-6 py-2 bg-[#38bdf8] text-white font-semibold rounded-lg hover:bg-blue-500">
      Add to Cart
    </button>
  </div>
</div>
: <div className="flex justify-center items-center h-screen">
<div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
</div>

}

      
      
    </>

  )
}

export default SingleProduct