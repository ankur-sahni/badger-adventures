import { galleryImages } from "@/config/images";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata = pageMetadata({
  title: "Gallery: Treks and Expeditions in the Himalaya",
  description:
    "Photos from the trail: Himalayan meadows, high lakes, campsites, bonfires and summits on treks and expeditions from Manali.",
  path: "/gallery",
  image: galleryImages[0],
});

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="From the trail"
        intro="Meadows, high lakes, camps and summits from treks and expeditions around Manali."
      />
      <section aria-label="Photo gallery" className="section-y">
        <div className="container-page">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  );
}
