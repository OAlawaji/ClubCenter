import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  return (
    <div
      className="flex flex-col justify-center items-center h-32 mx-auto pt-8
         text-sakry font-kanit font-semibold"
      style={{
        backgroundColor: "#000000",
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/black-linen-2.png")',
      }}
      id="about"
    >
      <h2>
        <span className="font-bold text-red-500">Disclaimer: </span>
        this website is not official and only made by
        <a
          href="https://www.linkedin.com/in/oalawaji/"
          className="text-blue-500 hover:text-blue-300 font-extrabold"
        >
          {" "}
          Omar Alawaji (OAlawaji){" "}
        </a>
        for practicing purposes, This website is <span className="font-bold text-red-500">The Front End Version</span>, meanwhile the full version is still in progress and will be hosted seperatly.
      </h2>
      <div>
        <a href="https://www.linkedin.com/in/oalawaji/">
          <LinkedInIcon
            className="text-blue-500 hover:text-blue-300"
            style={{ fontSize: 40 }}
          />
        </a>
        <a href="https://www.linkedin.com/in/oalawaji/ ">
          <GitHubIcon
            className="text-black-800 hover:text-gray-600"
            style={{ fontSize: 32 }}
          />
        </a>
      </div>
    </div>
  );
}
export default Footer;
