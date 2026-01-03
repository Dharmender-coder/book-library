import React from "react";


const AboutUs = () => {
  return (
    <section className="about-container font-serif">
      <h1 className=" mt-4 text-3xl font-bold">📚 About Our Library</h1>
      <h3 className="text-2xl font-bold">
        Welcome to Knowledge, Community, and Discovery
      </h3>
      <br />
      <p>
        Our <strong>library</strong> is more than just a place to borrow books —
        it’s a hub for learning, creativity, and connection. We believe in
        empowering individuals of all ages to explore ideas, access information,
        and engage with their community.
      </p>
      <br />

      <div className="mission">
        <h2 className="text-2xl font-bold">🌟Our Mission</h2>
        <br />
        <ul>
          <li>1. Provide free and open access to knowledge.</li>
          <li>2. Support lifelong learning and literacy.</li>
          <li>3. Foster creativity, innovation, and cultural enrichment.</li>
          <li>4. Create a welcoming space for everyone.</li>
        </ul>
      </div>
      <br />
      <br />
      <div>
        <h2>
          {" "}
          <h2 className="text-2xl font-bold">📖 What We Offer</h2>
          <br />
          <ul>
            <li>
              1. <strong>Books & Digital Resources:</strong> A diverse
              collection of print and e-books, journals, and multimedia..
            </li>
            <li>
              2. <strong>Programs & Events:</strong> Storytimes, workshops,
              lectures, and cultural activities.
            </li>
            <li>
              3. <strong>Technology Access:</strong> Computers, Wi-Fi, and
              digital learning tools.
            </li>
            <li>
              4. <strong>Community Spaces:</strong> Quiet study areas,
              collaborative workspaces, and meeting rooms.
            </li>
          </ul>
        </h2>
      </div>
      <br />
      <br />
      <div>
        <h2 className="text-2xl font-bold">🤝 Our Commitment</h2>
        <br />
        <p>
          We are dedicated to inclusivity, sustainability, and innovation.
          Whether you’re here to read, research, or simply relax, our library is
          your space to grow.
        </p>
      </div>

      <section className="team">
        <h2 className="font-bold">Meet the Team</h2>
        <ul>
          <li>👩‍💻 Jane Doe – CEO</li>
          <li>👨‍💻 John Smith – CTO</li>
          <li>🎨 Sarah Lee – Designer</li>
        </ul>
      </section>

      <section className="contact">
        <h2 className="font-bold">Contact Us</h2>
        <p>Email: contact@mycompany.com</p>
        <p>Phone: +91 98765 43210</p>
      </section>
    </section>
    
   
  );
};

export default AboutUs;


