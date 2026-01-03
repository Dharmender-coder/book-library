import React from "react";
import Courses from "../courses/courses";
import list from "../../public/list.json"
import Cards from "./Cards";
import{ Link} from "react-router-dom"

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  ">
        <div className="mt-16 items-center justify-center text-center"><br/>
          <h1 className=" text-3
          xl md:text-4xl">
            we'are delighted to have you
            <span className="text-blue-500"> Here! :</span>
          </h1>
          <p className="text-2xl font-serif text-justify mt-2">
            Not all books make great online courses, but a well-suited book can
            create an engaging and transformative learning experience with the
            right approach. To determine its potential, the key is to evaluate
            your book’s content, audience, and structure. Contact us for a free
            review if you’re unsure whether your book is ready to leap. With the
            proper guidance, you can turn your book into an impactful course
            that reaches and inspires learners worldwide.
          
          </p>
          <Link to="/">
             <button className="mt-6 w-25 bg-blue-500 text-white px-4  rounded-md hover:bg-blue-700 duration-300">Back</button>
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-y-8">
          {
           list.map((item)=>(
            
            <Cards key={item.id} item={item}/>
           
           ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
