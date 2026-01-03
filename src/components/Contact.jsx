import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can integrate with backend or email service
  };

  return (
    <div className="align-bottom contacts  ">
      <div className="  text-black absolute inset-0 flex justify-center items-center w-75 ">
        <form onSubmit={handleSubmit} className=" p-4 bg-amber-50 ml-5 ">
          <h2 className="text-2xl text-bold underline">Contact Us</h2>
          <label>
            Name:
            <br />
            <input
              type="text"
              className="w-77  px-3 py-1 border rounded-md "
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="please enter your name"
            />
          </label>
          <br />
          <label>
            Email:
            <br />
            <input
              type="email"
              className="w-77 px-3 py-1 border rounded-md outline-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="please enter your email"
            />
          </label>
          <br />
          <label>
            Message:
            <br />
            <textarea
              name="message"
              className="w-77 px-3 py-1 border rounded-md outline-none"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="please enter your message"
            />
          </label>
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
