import React from 'react'
import { motion } from "framer-motion";

export default function Cards({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={styles.card}
     
    >
       <div className='mt-4 my-3 p-1 bg-pink-100 '>
         <div className="card w-90  bg-base-90 shadow-xl hover:scale-105 duration-200 ">
     <figure  >
    <img src={item.image} alt="Shoes" />
   </figure>
     <div className="card-body bg-green-100 ">
     <h2 className="card-title">
       {item.name}
       <div className="badge badge-primary">{item.category}</div>
     </h2>
     <p>{item.title}</p>
     <div className="card-actions justify-between">
       <div className="badge badge-outline">{item.price}</div>
       <div className="cursor-pointer px-2 py-1 badge badge-outline bg-blue-500  hover:bg-blue-700 hover:text-white duration-200">Buy now</div>
     </div>
   </div>
   </div>
   </div>
    </motion.div>
  );
}

const styles = {
  card: {
    width: 200,
    padding: 5,
    borderRadius: 12,
    background: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    cursor: "pointer"
  }
};


