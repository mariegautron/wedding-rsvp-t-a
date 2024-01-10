import React, { FC, useEffect, useState } from "react";
import { Row, Col, Typography, Divider } from "antd";
import Heading from "@/components/design-system/Headings";

const { Title } = Typography;

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
    <div className="container py-6">
      <div className="photoGallery">
        <Heading level={2}>Gallerie photos</Heading>
        <div className="photoGrid grid grid-cols-4 gap-4">
          {photos.slice(1).map((photo, index) => (
            <div
              key={index}
              className="photoWrapper aspect-w-1 aspect-h-1 relative"
            >
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="photoItem absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
