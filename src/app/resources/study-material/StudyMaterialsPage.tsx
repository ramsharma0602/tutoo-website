import StudyMaterialsHero from "./components/StudyMaterialsHero";
import StudyMaterialsFilters from "./components/StudyMaterialsFilters";
import BrowseResources from "./components/BrowseResources";
import ResourceLibrary from "./components/ResourceLibrary";
import FeaturedDownloads from "./components/FeaturedDownloads";
import StudyMaterialsCTA from "./components/StudyMaterialsCTA";

export default function StudyMaterialsPage() {
  return (
    <main className="bg-[#F8FAFC] overflow-hidden">

      <StudyMaterialsHero />

      <StudyMaterialsFilters />

      <BrowseResources />

      <ResourceLibrary />

      <FeaturedDownloads />

      <StudyMaterialsCTA />

    </main>
  );
}