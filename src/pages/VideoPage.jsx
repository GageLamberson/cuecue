import React from 'react';

export default function VideoPage() {
  const videoLinks = [
    "https://www.youtube.com/embed/kP7dAbsfmDE",
    "https://www.youtube.com/embed/fWLitcKIGHA",
    "https://www.youtube.com/embed/2WE5j9KlmJE",
    "https://www.youtube.com/embed/-gtjWPr2MS0",
    "https://www.youtube.com/embed/qdjAC2RxPN0",
    "https://www.youtube.com/embed/s4z1F90d7ME",
    "https://www.youtube.com/embed/ydRNbFXZLs4"
  ];

  return (
    <div className="flex flex-col items-center justify-center mb-10 w-full">
      {/* Title Section - Simplified to match live source */}
      <div className="max-w-2xl md:mb-10">
        <h1 className="text-7xl font-bold mb-5">Videos</h1>
      </div>
      
      {/* Video List Section */}
      <div className="flex flex-col justify-center mx-auto w-11/12 md:mx-0 md:w-full md:px-40">
        {videoLinks.map((link, index) => (
          <div key={index} className="my-8 md:my-16">
            <div className="aspect-video">
              <iframe
                title={`Video ${index + 1}`}
                className="w-full h-full"
                src={link}
                frameBorder="0"
                allowFullScreen=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}