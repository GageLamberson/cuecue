import React from 'react';
import logoOrange from "../assets/Logo2.png";
import instaIcon from "../assets/instagram.svg";
import linkedInIcon from "../assets/linkedin.svg";

export default function About() {
  return (
    <div className="m-auto md:m-0 w-11/12 md:w-full md:px-40 h-max mb-10">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-center md:justify-start">
        <div>
          <img className="h-48 object-scale-down" src={logoOrange} alt="Cue" />
        </div>
        <h1 className="text-8xl md:text-9xl font-black">
          <span>Cue</span>
        </h1>
      </div>

      {/* About Me Section */}
      <h2 className="text-5xl font-bold mt-40 mb-10">About Me</h2>
      <p className="mb-10 text-justify">
        Gage Lamberson graduated from the University of Washington with a Bachelor of Arts in Photo/Media with Honors. 
        He has been actively studying photography since his second year of high school. However, after completing 
        his AA at Green River College he began to feel limited by straight photography. He wanted to expand his 
        practice at the UW. There he was given the freedom to play and experiment, eventually focusing on 
        installation art. Through this new mode of working he found greater intentionality. He was named in 
        the 2022 Dean’s List for his excellent academic record in the College of Arts and Sciences. In addition 
        to his artist practice, Gage was employed as a photographer by the UW School of Art + Art History + Design. 
        He now works at Yuen Lui Studio as a photographer and at Green River College as film photography lab tech/instructor.
      </p>

      {/* Artist Statement Section */}
      <h2 className="text-5xl font-bold mt-40 mb-10">Artist Statement</h2>
      <p className="mb-10 text-justify">
        The concept that my most recent works revolve around is The Archive. I question the sanctity of The Archive 
        and the institutions that control it. Historically, marginalized groups are left out of The Archive. 
        The histories of racialized, non-western and Indigenous peoples are often erased from our education, 
        replaced by a eurocentric version of history. How does this erasure come to pass? Who is erased? 
        These are the questions I want to ask with my art. My education has adhered to eurocentricity, I want to revise my sight.
      </p>
      <p className="mb-10 text-justify">
        The art I make is very reliant on the space I inhabit; aware of its surroundings. In my second year, 
        my analog practice no longer had the need to be converted to digital, so I utilized traditional 
        techniques to comment on the traditional space around me. This oppressive institution may be 
        considered a traditional space by people in power. Utilizing photosensitive materials in a 
        performance of Process was my place of departure. Taking apparatuses out of the darkroom and 
        into the light was the gesture I became partial to, I applied it to a new set of concept driven works.
      </p>

      {/* 2-Column Grid Section */}
      <div className="flex flex-row flex-wrap mt-40">
        
        {/* LEFT COLUMN: Work Experience & Education */}
        <div className="flex flex-col w-full lg:max-w-xl 2xl:mr-32">
          {/* Work Experience */}
          <ul className="flex flex-col">
            <li className="mb-5 text-2xl font-medium">Work Experience</li>
            <li className="mb-5">Ulta Beauty Task Associate</li>
            <li className="mb-5">Green River College Instructional and Classroom Support Tech</li>
            <li className="mb-5">Yuen Lui Studio Photographer</li>
            <li className="mb-5">Event Photographer, UW School of Art + Art History + Design</li>
            <li className="mb-5">Freelance Event and Portrait Photographer</li>
            <li className="mb-5">Amazon Fresh Associate</li>
            <li className="mb-5">Lowe’s Night MST Associate</li>
            <li className="mb-5">Darkroom Assistant, Green River College</li>
          </ul>

          {/* Education - Added with mt-20 row margin */}
          <ul className="flex flex-col mt-20">
            <li className="mb-5 text-2xl font-medium">Education</li>
            <li className="mb-5"><strong>2025-2026</strong> Graphic Design Certificate, Green River College, Auburn, WA</li>
            <li className="mb-5"><strong>2020-22</strong> Bachelor of Arts in Art with Departmental Honors (Photo/Media Program), Division of Art, School of Art + Art History + Design, University of Washington, Seattle, WA</li>
            <li className="mb-5"><strong>2019</strong> Associates in Arts, Green River College, Auburn, WA</li>
          </ul>
        </div>

        {/* RIGHT COLUMN: Exhibitions & Publications */}
        <div className="flex flex-col w-full lg:max-w-xl">
          {/* Exhibitions */}
          <ul className="flex flex-col">
            <li className="mb-5 text-2xl font-medium">Exhibitions</li>
            <li className="mb-5"><strong>2025</strong> Cardinal Markings Showcase X, 700 Dexter Ave N, Seattle, WA</li>
            <li className="mb-5"><strong>2022</strong> BA with Honors Thesis Exhibition, Jacob Lawrence Gallery, Seattle, WA</li>
            <li className="mb-5"><strong>2022</strong> Medium: Photo/Media BA Graduating Exhibition, Galleries Room 09/10D, School of Art + Art History + Design, University of Washington, Seattle, WA</li>
            <li className="mb-5"><strong>2022</strong> Student Exhibition, Parnassus Gallery, Seattle, WA</li>
            <li className="mb-5"><strong>2021</strong> Student Public Projection, Hybrid Space, 1205 E Pike St, Seattle, WA</li>
            <li className="mb-5"><strong>2018, 2017, 2016</strong> Student Showcase, Helen S. Smith Gallery, Green River College, Auburn, WA</li>
          </ul>

          {/* Publications - Added with mt-20 row margin */}
          <ul className="flex flex-col mt-20">
            <li className="mb-5 text-2xl font-medium">Publications</li>
            <li className="mb-5"><strong>2024</strong> Night Timin’ Domino Film Photo Magazine, June ’15</li>
            <li className="mb-5"><strong>2022</strong> Medium Photo/Media BA Graduating Catalogue, May ’25</li>
            <li className="mb-5"><strong>2021</strong> Photographic Relationships Zine, March ’17</li>
            <li className="mb-5"><strong>2017</strong> The Current, Green River College Newspaper, November Edition</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <h2 className="text-5xl font-bold mt-40 mb-10">Contact Me</h2>
      <ul className="">
        <li className="mb-5 text-2xl">gagelamberson13@gmail.com</li>
        <li className="mb-5 text-2xl">
          <a href="https://www.instagram.com/gage.la/?hl=en" className="flex flex-row items-center w-min">
            <img src={instaIcon} className="object-contain h-8 mr-2 brightness-0" alt="instagram" />
            <span>gale.la</span>
          </a>
        </li>
        <li className="mb-5 text-2xl">
          <a href="https://www.linkedin.com/in/gage-lamberson-85a0b0210/" className="flex flex-row items-center w-min">
            <img src={linkedInIcon} className="object-contain h-8 mr-2 brightness-0" alt="linkedin" />
            <span className="whitespace-nowrap">Gage Lamberson</span>
          </a>
        </li>
      </ul>
    </div>
  );
}