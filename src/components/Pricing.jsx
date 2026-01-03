import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/Banner.jpg",
      title: "QUARTERLY",
      price: 3000,
      length: 3,
    },
    {
      imgUrl: "/Banner.jpg",
      title: "HEAL_YEARLY",
      price: 5000,
      length: 6,
    },
    {
      imgUrl: "/Banner.jpg",
      title: "YEARLY",
      price: 10000,
      length: 12,
    },
  ];
  return (
    <section className="pricing ">
      <h1 className="text-3xl font-bold underline">Library Services</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Reading
                </p>
                <p>
                  <Check /> Borrowing
                </p>
                <p>
                  <Check /> Digital Access
                </p>
                <p>
                  <Check /> 24/7 Skilled Support
                </p>
                <p>
                  <Check /> 20 Days Freezing Option
                </p>
                <Link to={"/signup"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
