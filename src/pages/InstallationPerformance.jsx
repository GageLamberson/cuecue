import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import galleryManifest from "../galleryManifest.json";

export default function InstallationPerformance() {
  const images = galleryManifest["/installation_performance"] || [];

  // Reusable component for the specific IP layout
  const ImageBox = ({ src, alt = "" }) => {
    if (!src) return null;
    return (
      <div className="mb-5 md:ml-5 mx-4 md:mx-0">
        <div data-rmiz="">
          <Zoom>
            <img src={src} alt={alt} className="md:max-w-2xl md:max-h-screen" loading="lazy" />
          </Zoom>
        </div>
        <span className="text-newgrey font-normal">{alt}</span>
      </div>
    );
  };

  // Helper to filter images for specific sub-projects
  const findImg = (namePart) => images.find(img => img.includes(namePart));
  const filterImgs = (namePart) => images.filter(img => img.includes(namePart));

  return (
    <div className="flex flex-col justify-center mb-10 space-y-40">
      
      {/* 1. Archival Unit */}
      <div className="flex flex-col align-middle justify-center">
        <div className="md:ml-5 mx-4 md:mx-0 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Archival Unit (2022)</h2>
          <p className="mb-5 italic">The Sitters, Remote Imaging Machine, Conveyor.</p>
          <p className="mb-5">an antiquated system that operates contradictory to its primary directive, creating a defective feedback loop. In this archival process by digital and analog means, documentation and preservation is followed by erasure. This begs the question, who or what is being erased in this process?</p>
          <p className="mb-5">this unit is manned in a performance of the process. https://youtu.be/s4z1F90d7ME</p>
        </div>
        <div className="flex flex-row align-middle justify-center mb-10 items-center flex-wrap">
          {/* Matches img (2) through img (16), plus specific named ones */}
          {filterImgs('img (').map(img => <ImageBox key={img} src={img} />)}
          <ImageBox src={findImg('img.2e39')} />
          <ImageBox src={findImg('yimg')} />
          <ImageBox src={findImg('zimg')} />
          
          <div className="w-3/5">
            <div className="aspect-video">
              <iframe title="Video 19" className="w-full h-full" src="https://www.youtube.com/embed/s4z1F90d7ME" frameBorder="0" allowFullScreen=""></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Remote Imaging Machine */}
      <div className="flex flex-col align-middle justify-center">
        <div className="md:ml-5 mx-4 md:mx-0 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Remote Imaging Machine (2022)</h2>
          <p className="mb-5 italic"></p>
          <p className="mb-5">flimsy tripod, cardboard box, DSLR camera, Audio/Visual digital output cable, motherboard, CPU, CPU fan, PSU, RAM, SSD, Wi-Fi adapter, headphones, power cables, 50ft HDMI cable, desk, rolling chair, monitor, inkjet printer, mouse and keyboard.</p>
          <p className="mb-5">remotely documenting.</p>
        </div>
        <div className="flex flex-row align-middle justify-center mb-10 items-center flex-wrap">
          <ImageBox src={findImg('imgDSC1472')} />
          <ImageBox src={findImg('imgDSC1481')} />
        </div>
      </div>

      {/* 3. The Sitters */}
      <div className="flex flex-col align-middle justify-center">
        <div className="md:ml-5 mx-4 md:mx-0 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">The Sitters (2022)</h2>
          <p className="mb-5 italic"></p>
          <p className="mb-5">8 exposed photo emulsion paintings, garbage bin, pitcher, sponge, soapy water.</p>
          <p className="mb-5">prep for whitewashing.</p>
        </div>
        <div className="flex flex-row align-middle justify-center mb-10 items-center flex-wrap">
          <ImageBox src={findImg('IMG_8030-2')} />
          <ImageBox src={findImg('imgDSC1431')} />
        </div>
      </div>

      {/* 4. Conveyor */}
      <div className="flex flex-col align-middle justify-center">
        <div className="md:ml-5 mx-4 md:mx-0 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Conveyor (2022)</h2>
          <p className="mb-5 italic"></p>
          <p className="mb-5">metal stool, hot light, contact sheet proofer, inkjet print on translucent film, developing silver gelatin print, institutionally white pedestal, UWPHOTO spot light, destroyed/erased silver gelatin prints.</p>
          <p className="mb-5">conveying and displaying.</p>
        </div>
        <div className="flex flex-row align-middle justify-center mb-10 items-center flex-wrap">
          <ImageBox src={findImg('imgDSC1419')} />
          <ImageBox src={findImg('imgDSC1423')} />
        </div>
      </div>

      {/* 5. Our Return to the Redwoods */}
      <div className="flex flex-col align-middle justify-center">
        <div className="md:ml-5 mx-4 md:mx-0 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Our Return to the Redwoods (2022)</h2>
          <p className="mb-5">bed, light table, inkjet prints of film from the same roll, failed silver gelatin prints</p>
          <div className="mb-5">
            <p className="italic">
              So when you praise something<br/>Alright? It lives...<br/>
              (Poem truncated for brevity, use full version from About page)
            </p>
          </div>
        </div>
        <div className="flex flex-row align-middle justify-center mb-10 items-center flex-wrap">
          <ImageBox src={findImg('IMG_4609-2')} />
          <ImageBox src={findImg('img (2).d825')} />
          <ImageBox src={findImg('img.dced')} />
          <ImageBox src={findImg('return_to_the_redwoods')} alt="return_to_the_redwoods" />
          <ImageBox src={findImg('tina_and_jamison3')} alt="tina_and_jamison3" />
        </div>
      </div>

      {/* 6. Building a Ladder */}
      <div className="flex flex-col align-middle justify-center">
        <div className="md:ml-5 mx-4 md:mx-0 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Building a Ladder (2022) *with Manfrotto</h2>
          <p className="mb-5">5 Manfrotto tripods, 120mm film negatives, flashlight, sheet music wire stand, table, 6 developing trays, 3 dark boxes, silver gelatin prints.</p>
          <p className="mb-5">Antiarchival?</p>
        </div>
        <div className="flex flex-row align-middle justify-center mb-10 items-center flex-wrap">
          {filterImgs('Copy of IMG_35').map(img => <ImageBox key={img} src={img} />)}
        </div>
      </div>

      {/* 7. Erasure */}
      <div className="flex flex-col align-middle justify-center">
        <div className="md:ml-5 mx-4 md:mx-0 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Erasure</h2>
        </div>
        <div className="flex flex-row align-middle justify-center mb-10 items-center flex-wrap">
          <ImageBox src={findImg('Erasure')} alt="Erasure" />
          <div className="w-3/5">
            <div className="aspect-video">
              <iframe title="Video 2" className="w-full h-full" src="https://www.youtube.com/embed/qdjAC2RxPN0" frameBorder="0" allowFullScreen=""></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}