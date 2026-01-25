import { useState } from "react";
import { Link } from "react-router-dom";

export default function Thumbnail({ portrait, path }) {
  const [isHovered, setIsHovered] = useState(false);

  // Formats path to Title Case with spaces
  const cleanTitle = (str) => {
    const name = str.split("/").pop();
    return name
      .split("_")
      .map((word) => {
        if (word.toLowerCase() === "bw") return "BW";
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  const titleText = cleanTitle(path);

  return (
    <Link
      to={path}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // z-30 on hover ensures the "pop out" image stays above all other borders/thumbnails
      className={`border border-newgrey p-4 sm:p-5 md:w-max h-max md:max-w-2xl relative mb-10 md:ml-10 transition-all duration-300 ${
        isHovered ? "z-30" : "z-10"
      }`}
    >
      {/* Mobile Title (visible only on small screens) */}
      <h2 className="text-xl sm:text-3xl md:hidden mb-2 sm:mb-5 font-medium">
        {titleText}
      </h2>

      {/* 
        Image: Matches snippet classes 
        On Hover: md:scale-125 md:brightness-50
      */}
      <img
        className={`object-scale-down transition filter z-10 ${
          isHovered ? "md:scale-125 md:brightness-50" : ""
        }`}
        src={portrait}
        alt=""
      />

      {/* 
        Desktop Title: Matches snippet classes
        Note: scale-125 and md:opacity-100 applied on hover
      */}
      <h2
        className={`absolute bottom-2/4 left-0 right-0 mx-auto text-3xl transition text-center max-w-xl text-white pointer-events-none ${
          isHovered ? "scale-125 md:opacity-100" : "opacity-0"
        }`}
      >
        {titleText}
      </h2>
    </Link>
  );
}