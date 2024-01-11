import Heading from "@/components/design-system/Headings";
import { FC, useEffect, useState } from "react";

const PhotoGallery: FC<{ getImagesUrlFromStorage: () => Promise<any> }> = ({
  getImagesUrlFromStorage,
}) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const data = await getImagesUrlFromStorage();
        const photosUrls = data.map((obj: any) => obj.data.publicUrl);

        setPhotos(photosUrls);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }
    fetchPhotos();
  }, []);

  if (!photos || !photos.length) {
    return <></>;
  }

  return (
    <div className="w-4/5 mx-auto py-6">
      <div className="photoGallery">
        <Heading level={2}>Gallerie photos</Heading>
        <div className="grid grid-cols-4 gap-4 p-12">
          {photos.slice(1).map((photo, index) => (
            <div key={index} className="relative aspect-w-1 aspect-h-1">
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
