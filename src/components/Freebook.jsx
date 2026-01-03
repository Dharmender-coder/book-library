import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Space } from "lucide-react";

const Freebook = () => {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);
 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
         
        },
      },
      {
        breakpoint: 475 ,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        },
      },
      
    ],
  };

  return (
    <>
      <div className="  max-w-screen-2xl container md:px-20 px-4 ">
        
        <div>
          <h1 className="font-bold text-3xl pb-2  ">Free Offered Courses</h1>
          <p className=" py-3 md:text-justify font-serif text-2xl">
            Inner change begins when people question their habits, beliefs, and
            sense of purpose.Books that focus on self-discovery do more than
            motivate;
          </p>
        </div>

        
         
            <Slider {...settings}>
           {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
           ))}
          </Slider>
         

       
      </div>
    </>
  );
};

export default Freebook;
