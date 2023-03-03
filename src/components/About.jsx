import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full">
        <div className="pb-8">
          <p className="font-bold inline border-b-4 border-gray-500 text-4xl">
            About
          </p>
        </div>
        <p className="text-xl mt-20 tracking-widest">
          Hi, My  Name is <strong className="text-2xl">Abhishek Verma</strong>, I'm final year <strong>IT</strong> undergrad student
          from UIET, Kanpur . I've done my schooling from Kendriya Vidyalaya IIT
          Kanpur . I've developed my interest in web development in my final
          year of college, as i like to create beautiful and performant websites
          with delightful user experience . I'm also part of my college
          development team where i developed several projects one of which is 
          <strong className="text-2xl"> Eventify</strong> which is a event management tool using GraphQl api and Mapbox
          api , and a Music player <strong className="text-2xl">(Musixx)</strong> using ReactJS .
        </p>
        <br />
        <p className="text-xl tracking-widest">
          I've done two internships one is with <strong className="text-2xl">TwoWaits</strong> where i helped development team to build different landing pages for their website and Campaigns using ReactJs and second is with <strong className="text-2xl">Chegg India</strong> as a Subject Matter Expert.
          A part from this i'm also doing my BS degree which is in online mode in Data Science and Programming from IIT Madras.
        </p>
      </div>
    </div>
  );
};

export default About;
