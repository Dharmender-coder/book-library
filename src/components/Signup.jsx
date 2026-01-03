import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="sign">
        <div id="my_modal_3" className=" border-2  shadow-md p-1 rounded-md w-80  bg-gray-600 border-blue-100 ">
          <div className=" border-2 ">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="bg-amber-50 p-2">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-md btn-circle btn-ghost ml-64  bg-blue-300"
              >
                ✕ 
              </Link>

              <h3 className="font-bold text-2xl">Signup</h3>

              <div className="mt-4 space-y-4">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-73 px-3 py-1  rounded-md outline-1"
                  {...register("Name", { required: true })}
                />
                <br />
                {errors.Name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-4">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-73 px-3 py-1 rounded-md outline-1 "
                  {...register("Email", { required: true })}
                />
                <br />
                {errors.Email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-4">
                <span>password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-73 px-3 py-1 rounded-md outline-1"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="justify-around mt-4">
                <button className="bg-blue-800 text-white rounded-md px-3 py-1 hover:bg-blue-900 duration-200">
                  Signup
                </button>
           <p >
                              Have account?{" "}
                              <Link
                                to="/"
                                className="underline text-blue-800 cursor-pointer"
                              >
                                Login
                              </Link>{" "}
                            </p>
              </div>
            </form>
          </div>
           
        </div>
      </div>
    </>
  );
};

export default Signup;
