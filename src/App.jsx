import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Gallery from "./components/Gallery";
import CategoryGrid from "./components/CategoryGrid";
import About from "./pages/About";
import VideoPage from "./pages/VideoPage";
import InstallationPerformance from "./pages/InstallationPerformance";

// Import the generated manifest
import galleryManifest from "./galleryManifest.json";

export default function App() {
  // Hardcoded dates to match live site metadata
  const GALLERY_DATES = {
    "/events/chusid": "05-18-22",
    "/events/katie_bunn-Marcuse": "05-16-22",
    "/events/kolya": "05-09-22",
    "/events/rebecca_frye-Chapel-PCNW_field_trip": "05-18-22",
    "/events/sperling_and_dr_mille_henry_visit": "07-14-22",
    "/events/whitney_lynn": "05-17-22",
    "/exhibitions/JLG_honors_opening_1": "05-17-22",
    "/exhibitions/medium_BA_graduate_exhibition_opening": "05-17-22",
    "/exhibitions/MFA_reception_henry_art_gallery": "06-3-22",
  };

  // Logic to build the lists for the index grids
  const getListForCategory = (type) => {
    return Object.entries(galleryManifest)
      .filter(([path]) => {
        if (type === "practice") {
          return !["/events", "/exhibitions", "/personal_projects"].some(p => path.startsWith(p));
        }
        return path.startsWith(`/${type}`);
      })
      .map(([path, imgs]) => ({
        // We use the first image in the folder as the cover
        img: imgs[0],
        path: path
      }));
  };

  return (
    <HashRouter>
      <Layout>
        <Routes>
          {/* Index Pages */}
          <Route path="/" element={<CategoryGrid title="Galleries" list={getListForCategory("practice")} />} />
          <Route path="/events" element={<CategoryGrid title="Events" list={getListForCategory("events")} />} />
          <Route path="/exhibitions" element={<CategoryGrid title="Exhibitions" list={getListForCategory("exhibitions")} />} />
          <Route path="/personal_projects" element={<CategoryGrid title="Personal Projects" list={getListForCategory("personal_projects")} />} />

          {/* Static Exceptions */}
          <Route path="/about" element={<About />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/installation_performance" element={<InstallationPerformance />} />

          {/* Dynamic Gallery Routes */}
          {Object.entries(galleryManifest).map(([path, images]) => {
            // Skip the manual override for installation performance
            if (path === "/installation_performance") return null;

            // Generate Title from Path (e.g., /BW_film_photography -> BW Film Photography)
            const slug = path.split("/").pop();
            const title = slug
              .split("_")
              .map(word => (word.toLowerCase() === "bw" ? "BW" : word.charAt(0).toUpperCase() + word.slice(1)))
              .join(" ");

            return (
              <Route 
                key={path} 
                path={path} 
                element={<Gallery title={title} images={images} date={GALLERY_DATES[path]} />} 
              />
            );
          })}
        </Routes>
      </Layout>
    </HashRouter>
  );
}