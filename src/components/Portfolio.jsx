import React from "react";
import music from "../assets/portfolio/music.png";
import eventify from "../assets/portfolio/eventify.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: music,
      demo: "https://frabjous-kashata-6bc199.netlify.app/",
      code: "https://github.com/abhishek-3-9-00/Musix",
    },
    {
      id: 2,
      src: eventify,
      demo: "https://github.com/abhishek-3-9-00/Eventify-QL",
      code: "https://github.com/abhishek-3-9-00/Eventify-QL",
    },
  ];

  const onClickUrl = (url) => {
    return () => window.open(url, "_blank", "noreferrer");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-[400px] w-full"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={onClickUrl(demo)}
                  className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-110"
                >
                  Demo
                </button>
                <button
                  onClick={onClickUrl(code)}
                  className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-110"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
