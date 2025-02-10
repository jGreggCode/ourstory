import { useState } from "react";
import video1 from "../assets/We.mp4";
import video2 from "../assets/We2.mp4";
import { smtpexpressClient } from "../constants/Smtp.js";

const HeroSection = () => {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    setLoading(true);

    try {
      await smtpexpressClient.sendApi.sendMail({
        subject: "Valentine's Date",
        message: `<h2>You're my Valentine forever! ❤️</h2>`,
        sender: {
          name: "Babe",
          email: "babe-1eed1b@smtpexpress.email",
        },
        recipients: {
          email: "felicisimojv@gmail.com", // Hardcoded recipient email
        },
      });

      alert("Your Valentine request has been sent! 💌");
    } catch (error) {
      alert("Oops! Something went wrong. Please try again later.");
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Hey
        <span className="bg-gradient-to-r from-purple-200 to-purple-800 text-transparent bg-clip-text">
          {" "}
          Babe!
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Malapit na valentines, I know it's still a few days away, but I can't
        stop thinking about how amazing it will be to have you as my Valentine.
        Will you say yes?
      </p>
      <div className="flex justify-center my-10">
        <button
          onClick={handleButtonClick}
          className="bg-gradient-to-r from-purple-300 to-purple-900 py-3 px-4 mx-3 rounded-md"
          disabled={loading}
        >
          {loading ? "Sending..." : "Yes!"}
        </button>
        <button
          onClick={handleButtonClick}
          className="bg-gradient-to-r from-purple-300 to-purple-900 py-3 px-4 mx-3 rounded-md"
          disabled={loading}
        >
          {loading ? "Sending..." : "Absolutely!"}
        </button>
      </div>
      <div className="flex md:flex-row mt-10 justify-center">
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-1/2 lg:w-[300px] border border-purple-700 shadow-purple-400 mx-3 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-1/2 lg:w-[300px] border border-purple-700 shadow-purple-400 mx-3 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
