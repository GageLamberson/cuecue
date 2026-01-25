import { useState } from "react";
import { Link } from "react-router-dom";
import logoWhite from "../assets/Logo2.png"; 
import instaIcon from "../assets/instagram.svg";
import linkedInIcon from "../assets/linkedin.svg";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row-reverse">
      <nav className="">
        {/* Desktop Sidebar */}
        <ul className="hidden md:flex flex-col py-10 px-7 border-b md:border-b-0 md:border-l border-newgrey h-screen top-0 right-0 fixed w-56">
          <h2 className="text-2xl font-normal">Artist Practice</h2>
          <li className="font-light"><Link to="/">Galleries</Link></li>
          <li className="font-light"><Link to="/video">Videos</Link></li>
          <li className="border-b border-newgrey my-10 h-0"></li>
          <h2 className="text-2xl font-normal">Commercial Work</h2>
          <li className="font-light"><Link to="/events">Events</Link></li>
          <li className="font-light"><Link to="/exhibitions">Exhibitions</Link></li>
          <li className="font-light"><Link to="/personal_projects">Personal Projects</Link></li>
          <li className="border-b border-newgrey my-10 h-0"></li>
          <li className="font-light"><Link to="/about">About Me</Link></li>
          <div className="flex flex-col-reverse h-full w-full">
            <div className="flex flex-col w-full justify-between items-end">
              <li className="mb-5 text-2xl"><a href="https://www.instagram.com/gage.la/?hl=en" target="_blank"><img src={instaIcon} className="object-contain h-8 mr-2 brightness-0" alt="instagram" /></a></li>
              <li className="mb-5 text-2xl"><a href="https://www.linkedin.com/in/gage-lamberson-85a0b0210/" target="_blank"><img src={linkedInIcon} className="object-contain h-8 mr-2 brightness-0" alt="linkedin" /></a></li>
            </div>
          </div>
        </ul>

        {/* Mobile Navbar */}
        <div className="border-b border-newgrey py-5 px-8 flex flex-row md:hidden">
          <div className="w-0 lg:w-1/5"></div>
          <div className="md:w-0 w-1/2">
            <div className="flex items-center justify-start gap-x-6 px-2.5 py-2 md:px-7 md:py-2.5">
              <svg onClick={() => setIsMenuOpen(!isMenuOpen)} xmlns="http://www.w3.org/2000/svg" id="menu-button" className="h-6 w-6 cursor-pointer lg:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </div>
            <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden w-full lg:items-center lg:justify-center lg:w-3/5`} id="menu">
              <ul className="pt-4">
                <h2 className="text-2xl font-normal px-2.5">Artist Practice</h2>
                <li className="font-light px-2.5"><Link to="/" onClick={() => setIsMenuOpen(false)}>Galleries</Link></li>
                <li className="font-light px-2.5"><Link to="/video" onClick={() => setIsMenuOpen(false)}>Videos</Link></li>
                <li className="border-b border-newgrey my-10 h-0 w-3/4 px-2.5"></li>
                <h2 className="text-2xl font-normal px-2.5">Comercial Work</h2>
                <li className="font-light px-2.5"><Link to="/events" onClick={() => setIsMenuOpen(false)}>Events</Link></li>
                <li className="font-light px-2.5"><Link to="/exhibitions" onClick={() => setIsMenuOpen(false)}>Exhibitions</Link></li>
                <li className="font-light px-2.5"><Link to="/personal_projects" onClick={() => setIsMenuOpen(false)}>Personal Projects</Link></li>
                <li className="border-b border-newgrey my-10 h-0 w-3/4 px-2.5"></li>
                <li className="font-light px-2.5 mb-5"><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Me</Link></li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/5 w-1/2">
            <Link className="flex flex-row items-center justify-end gap-x-6 h-10 overflow-visible relative" to="/">
              <img src={logoWhite} className="h-20 absolute transform translate-x-6" alt="Cue" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Wrapper - MATCHED TO LIVE SITE DUMP */}
      <main className="flex flex-col align-middle w-full py-10 md:py-20 md:mr-56">
        <div className="flex flex-col flex-wrap align-middle justify-center md:mx-10 items-start">
          {children}
        </div>
      </main>
    </div>
  );
}