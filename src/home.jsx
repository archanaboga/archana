import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";

const pic =
  "https://img.freepik.com/free-vector/cute-girl-with-peace-sign-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3977.jpg?w=2000";
const HomePage = () => {
  return (
    <div className=" w-full h-screen  flex items-center justify-around ">
      <div className="flex flex-col">
        <h1
          className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text:6xl dark:text-white  
        "
        >
          Hi There,
          <p>
            I'm Archana <a className="md:text-red-900"> Boga</a>
            <h1 className="Mb-4 text-5xl font-blod leading-none tracking-tight text-white-900 md:text-5xl ">
              <p>
                I Am into <a class="md:text-orange-900 ">Web Develop!</a>
              </p>
            </h1>
          </p>
        </h1>

        <div div className="flex items-center justify-center gap-3">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <PhoneIcon />
        </div>
      </div>

      <img
        width={200}
        height={200}
        className="rounded-3xl"
        src={pic}
        alt="Profile pix"
      />
    </div>
  );
};

export default HomePage;
