import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function Gallery({ title, date, images }) {
  // 1. Identify if we are in a Commercial/Project section (captions always hidden there)
  const isCommercialSection = ['/events', '/exhibitions', '/personal_projects']
    .some(path => window.location.hash.includes(path));

  const getCaption = (path) => {
    // If it's a commercial section, return empty immediately
    if (isCommercialSection) return ""; 

    const filename = path.split('/').pop(); // Extract e.g., "img_1.jpg" or "Beach_Grandpa.jpg"
    const nameWithoutExt = filename.split('.')[0]; // Remove .jpg
    
    // 2. Logic to hide generic/system names even in Artist Practice
    const lowerName = nameWithoutExt.toLowerCase();
    const isGenericName = lowerName.includes('img') || lowerName.includes('copy of');

    if (isGenericName) {
      return "";
    }

    // Return clean name for valid artistic titles
    return nameWithoutExt.replace(/_/g, ' ');
  };

  return (
    <div className="flex flex-row align-middle justify-center mb-10 items-center flex-wrap">
      {/* Page Title & Date */}
      <div className="mx-4 md:mx-0 mb-10 md:mb-20 max-w-2xl w-full align-middle">
        <h1 className="text-5xl md:text-7xl font-bold mb-5 align-middle">{title}</h1>
        {date && <span className="text-2xl font-light mb-10 block">{date}</span>}
      </div>

      {/* Image List */}
      {images.map((src, t) => (
        <div key={t} className="mb-5 md:ml-5 mx-4 md:mx-0">
          <div data-rmiz="">
            <Zoom>
              <img 
                src={src} 
                alt="" 
                className="md:max-w-2xl md:max-h-screen" 
                loading="lazy" 
              />
            </Zoom>
          </div>
          {/* The caption only shows if getCaption returns a string */}
          <span className="text-newgrey font-normal">{getCaption(src)}</span>
        </div>
      ))}
    </div>
  );
}