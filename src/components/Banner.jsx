import React from "react";


const Banner = () => {
  return (
    <>
      <div className="max-w-screen bg-gray-400 container mx-auto md:px-20 px-4 flex  flex-col md:flex-row my-12 ">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32 ">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something
              <span className="text-blue-500"> new everyday!!!</span>
            </h1>
            <p className="text-2xl justify-items font-serif text-justify py-5 px-3">
              Buy books online from independent sellers around the world. 
              Fill your bookshelves with used books, the latest paperback
              bestsellers, collectible books such as a first editions and 
              signed copies, large print books, illustrated books, and for
              gotten out-of-print books from years gone by. We've even got 
              coffee-table books for sale if you are looking for something.
            </p>

            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-primary mb-10 w-25">Message</button>
          {/* <Link to={"/signup"}>Join Now</Link> */}
        </div>
        <div className="order-1 w-full md:w-1/2 mt-7 shadow-2xl">
          <img src="Banner.jpg" className=" w-full  " alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
