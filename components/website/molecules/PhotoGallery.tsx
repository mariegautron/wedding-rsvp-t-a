import React, { FC, useEffect, useState } from "react";
import { Row, Col, Typography, Divider } from "antd";

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
    <div className="container">
      <div className="photoGallery">
        <Title
          level={2}
          style={{
            textAlign: "center",
            fontSize: "50px",
            fontFamily: "Playfair Display, serif",
          }}
        >
          Photos
        </Title>
        <Divider />
        <div className="photoGrid">
          {photos.map((photo, index) => {
            return (
              index !== 0 && (
                <div key={index} className="photoWrapper">
                  <img
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="photoItem"
                  />
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
