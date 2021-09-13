import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="herobanner">
        <div className="container">
          <div className="show-on-scroll is-visible">
            <div className="heading">
              <h1 className=" ">
                The Future of
                <br />
                <span> AI </span> Is here{" "}
              </h1>
              <p>
                <a
                  href="#"
                  className=""
                  data-toggle="modal"
                  data-target="#get_trained"
                >
                  Get In Touch
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="globe zoom">
          {" "}
          <img
            src="images/world.svg"
            className=""
            alt="C360 soft"
            title="C360 soft"
            width="1920"
            height="556"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
