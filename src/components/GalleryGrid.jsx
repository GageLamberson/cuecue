import Thumbnail from "./Thumbnail";
import logoImg from "../assets/Logo2.png";

export default function CategoryGrid({ title, list }) {
  return (
    <div className="md:w-full w-11/12 mx-auto">
      {/* Header section matches Live Site structure */}
      <div className="md:px-40 w-full">
        <div className="flex flex-row items-center justify-center md:justify-start">
          <div>
            <img className="h-48 object-scale-down" src={logoImg} alt="Cue" />
          </div>
          <h1 className="text-8xl md:text-9xl font-black">
            <span>Cue</span>
          </h1>
        </div>
        <h2 className="text-6xl md:text-7xl font-bold mt-28 mb-10">{title}</h2>
      </div>
      
      {/* 2-Column Grid Wrapper */}
      <div className="flex flex-col md:flex-row md:flex-wrap align-middle justify-center items-center">
        {list.map((item, idx) => (
          <Thumbnail key={idx} portrait={item.img} path={item.path} />
        ))}
      </div>
    </div>
  );
}